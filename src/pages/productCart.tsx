import { Product, formatCurrencyString } from 'use-shopping-cart/core'
import {
  ImageContainerCart,
  ProductNameCart,
  ProductPriceCart,
  ProductsCart,
  ProductsDetailsCart,
} from '../styles/pages/sidebarCart'
import Image from 'next/image'
import { useShoppingCart } from 'use-shopping-cart'

const imagem =
  'https://files.stripe.com/links/MDB8YWNjdF8xT0JPU2VLZVdYem5EcUtNfGZsX3Rlc3RfdFdFVjFwOUp2SzR4aWt6dFhadGFwSDBN00LPfvTbVO'

interface ProductProps {
  product: Product
}

export function ProductCart({ product }: ProductProps) {
  const { removeItem } = useShoppingCart()

  function handleRemoveProduct() {
    removeItem(product.id)
  }
  return (
    <ProductsCart>
      <ImageContainerCart>
        <Image src={product.image} width={100} height={100} alt="" />
      </ImageContainerCart>
      <ProductsDetailsCart>
        <ProductNameCart>{product.name}</ProductNameCart>
        <ProductPriceCart>
          {formatCurrencyString({ value: product.price, currency: 'BRL' })}
        </ProductPriceCart>
        <button onClick={handleRemoveProduct}>Remover</button>
      </ProductsDetailsCart>
    </ProductsCart>
  )
}
