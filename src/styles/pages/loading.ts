import { styled } from '..'

export const LoadingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: 656,
  minHeight: 656,
  gap: '1rem',
  footer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})

export const LoadingProductContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
})

export const LoadingProductsDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  footer: {
    marginTop: 'auto',
  },
})

export const LoadingProduct = styled('div', {
  width: 656,
  height: 636,
  backgroundColor: '$gray800',
  borderRadius: 8,
})

export const LoadingProductDesc = styled('p', {
  width: 200,
  height: 30,
  lineHeight: 1.6,
  left: 0,
  backgroundColor: '$gray800',
  borderRadius: 6,
})

export const LoadingProductPrice = styled('p', {
  width: 100,
  height: 30,
  backgroundColor: '$gray800',
  borderRadius: 6,
})
