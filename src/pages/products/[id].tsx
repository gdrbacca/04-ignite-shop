import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductsDetails,
} from '../../styles/pages/products'
import { GetStaticPaths, GetStaticProps } from 'next'
import { stripe } from '../../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import Head from 'next/head'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  LoadingProductContainer,
  LoadingProductsDetails,
} from '../../styles/pages/loading'
import { useShoppingCart } from 'use-shopping-cart'
import { Product } from 'use-shopping-cart/core'

interface ProductProps {
  product: {
    id: string
    name: string
    imageURL: string
    price: number
    description: string
    defaultPriceId: string
  }
}

export default function Products({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addItem } = useShoppingCart()

  function handleAddSacola() {
    // console.log('clicou add sacola')
    const produto: Product = {
      name: product.name,
      price: product.price,
      image: product.imageURL,
      id: product.defaultPriceId,
      currency: 'BRL',
    }
    addItem(produto, { count: 1 })
  }

  if (isFallback) {
    return (
      <LoadingProductContainer>
        <Skeleton
          baseColor="#232323"
          highlightColor="#454545"
          height={656}
          width={576}
          borderRadius={8}
        />
        <LoadingProductsDetails>
          <Skeleton
            baseColor="#232323"
            highlightColor="#454545"
            height={50}
            width={480}
            borderRadius={8}
          />
          <Skeleton
            baseColor="#232323"
            highlightColor="#454545"
            height={50}
            width={250}
            borderRadius={8}
          />
          <footer>
            <Skeleton
              baseColor="#232323"
              highlightColor="#454545"
              height={60}
              width={576}
              borderRadius={8}
            />
          </footer>
        </LoadingProductsDetails>
      </LoadingProductContainer>
    )
  }

  return (
    <>
      <Head>
        <title>{product.name} - Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageURL} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductsDetails>
          <h1>{product.name}</h1>
          <span>
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price / 100)}
          </span>

          <p>{product.description}</p>

          <button onClick={handleAddSacola}>Colocar na sacola</button>
        </ProductsDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'prod_OzNN8WpHXBrPAy' } }],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })
  // console.log(product)
  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageURL: product.images[0],
        price: price.unit_amount,
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1,
  }
}
