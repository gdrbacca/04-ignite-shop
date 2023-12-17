import Image from 'next/image'
import { HomeContainer, LoadingContainer, Product } from '../styles/pages/home'
import { useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import 'keen-slider/keen-slider.min.css'
import { stripe } from '../lib/stripe'
import { GetStaticProps } from 'next'
import Stripe from 'stripe'
import Link from 'next/link'
import Loading from './loading'
import { Handbag } from 'phosphor-react'

interface HomeProps {
  products: {
    id: string
    name: string
    imageURL: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  /* <pre>{JSON.stringify(products)}</pre> */

  return (
    <>
      <Head>
        <title>Home - Ignite Shop</title>
      </Head>
      {!products ? (
        <LoadingContainer>
          <Loading />
          <Loading />
          <Loading />
        </LoadingContainer>
      ) : (
        <HomeContainer ref={sliderRef} className="keen-slider">
          {products.map((product) => {
            return (
              <Link
                href={`/products/${product.id}`}
                key={product.id}
                prefetch={false}
              >
                <Product className="keen-slider__slide">
                  <Image
                    src={product.imageURL}
                    width={520}
                    height={480}
                    alt=""
                  />
                  <footer>
                    <div>
                      <strong>{product.name}</strong>
                      <span>{product.price}</span>
                    </div>

                    <button>
                      <Handbag size={28} />
                    </button>
                  </footer>
                </Product>
              </Link>
            )
          })}
        </HomeContainer>
      )}
    </>
  )
}

// getServerSideProps
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageURL: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })

  // console.log(response.data)
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
