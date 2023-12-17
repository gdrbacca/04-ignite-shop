import {
  LoadingContainer,
  LoadingProduct,
  LoadingProductDesc,
  LoadingProductPrice,
} from '../styles/pages/loading'

export default function Loading() {
  return (
    <LoadingContainer>
      <LoadingProduct />
      <footer>
        <LoadingProductDesc />
        <LoadingProductPrice />
      </footer>
    </LoadingContainer>
  )
}
