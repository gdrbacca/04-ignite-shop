import {
  CartFooter,
  Container,
  ProductsContainerCart,
  ProductsList,
} from '../styles/pages/sidebarCart'
import { X } from 'phosphor-react'
import axios from 'axios'
import { useState } from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart'
import { ProductCart } from './productCart'

interface SidebarCartProps {
  active: (param: boolean) => void
  /*   counter: (param: number) => void */
}

export function SidebarCart({ active }: SidebarCartProps) {
  const { cartCount, cartDetails, totalPrice } = useShoppingCart()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  function closeSidebar() {
    active(false)
  }

  async function handleBuyProduct() {
    try {
      const arrayProduto: string[] = []
      Object.values(cartDetails ?? {}).map((entry) =>
        arrayProduto.push(entry.id),
      )

      console.log(JSON.stringify(arrayProduto))
      setIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        priceId: JSON.stringify(arrayProduto) /* product.defaultPriceId, */,
      })
      const { checkoutUrl } = response.data
      // console.log(response.data)

      window.location.href = checkoutUrl
    } catch (error) {
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar')
    }
  }

  return (
    <Container>
      <X size={20} onClick={closeSidebar} />
      <ProductsContainerCart>
        <h1>Sacola de compras</h1>
        <ProductsList>
          {cartCount && cartCount > 0 ? (
            Object.values(cartDetails ?? {}).map((entry) => (
              <ProductCart key={entry.id} product={entry} />
            ))
          ) : (
            <>
              <br />
              <p>Sem items</p>
            </>
          )}
        </ProductsList>

        <CartFooter>
          <table>
            <td>
              <tr>Quantidade</tr>
              <tr>
                <strong>Valor total</strong>
              </tr>
            </td>
            <td align="right">
              <tr>{cartCount > 0 ? cartCount : 0} itens</tr>
              <tr>
                <strong>
                  {cartCount > 0
                    ? formatCurrencyString({
                        value: totalPrice,
                        currency: 'BRL',
                      })
                    : 0}
                </strong>
              </tr>
            </td>
          </table>

          <button
            onClick={handleBuyProduct}
            disabled={isCreatingCheckoutSession || cartCount === 0}
          >
            Finalizar compra
          </button>
        </CartFooter>
      </ProductsContainerCart>
    </Container>
  )
}
