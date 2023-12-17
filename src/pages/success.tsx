import Link from 'next/link'
import {
  SuccessContainer,
  SuccessImage,
  SuccessImageContainer,
} from '../styles/pages/success'
import { GetServerSideProps } from 'next'
import { stripe } from '../lib/stripe'
import Stripe from 'stripe'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'
import { useEffect } from 'react'

interface SuccessProps {
  customerName: string
  quantidade: number
  product: {
    name: string
    imageUrl: string
  }[]
}

export default function Success({
  customerName,
  quantidade,
  product,
}: SuccessProps) {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <SuccessContainer>
      <h1>Compra Efetuada</h1>

      <SuccessImageContainer>
        {product.map((entry) => {
          return (
            <SuccessImage key={entry.imageUrl}>
              <Image
                key={entry.imageUrl}
                src={entry.imageUrl}
                width={120}
                height={110}
                alt=""
              />
            </SuccessImage>
          )
        })}
      </SuccessImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua compra de {quantidade}{' '}
        {quantidade === 1 ? 'camiseta' : 'camisetas'} já está a caminho da sua
        casa.{' '}
      </p>

      <Link href={'/'}>Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })
  // console.log('session')
  // console.log(session)
  // console.log(session.line_items.data.length)
  const customerName = session.customer_details.name

  const arrayProduto: {
    name: string
    imageUrl: string
  }[] = []
  Object.values(session.line_items.data ?? {}).map((entry) => {
    const product = entry.price.product as Stripe.Product
    const entryProduct = {
      name: product.name,
      imageUrl: product.images[0],
    }
    return arrayProduto.push(entryProduct)
  })

  // const product = session.line_items.data[0].price.product as Stripe.Product
  return {
    props: {
      customerName,
      quantidade: session.line_items.data.length,
      product: arrayProduto,
    },
  }
}
