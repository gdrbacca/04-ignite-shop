import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'
import { CartProvider } from 'use-shopping-cart'
import { Header } from './header'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      // Connects to your Stripe account
      stripe={process.env.STRIPE_PUBLIC_KEY}
      // Redirected here after successful payments
      successUrl={`${process.env.NEXT_URL}/success`}
      // Redirected here when you click back on Stripe Checkout
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="GBP"
      // Only customers from UK will be able to purchase
      // Having this setting means that we will capture shipping address
      allowedCountries={['GB']}
      // Enables local storage
      shouldPersist={true}
    >
      <Container>
        <Header />
        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
