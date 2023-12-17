import { styled } from '..'
import { keyframes } from '@stitches/react'

const fadeIn = keyframes({
  '0%': { opacity: '0', transform: 'translateX(110%)' },
  '100%': { opacity: '1', transform: 'translateX(0%)' },
})

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#171923',
  padding: '0 2rem 0',
  position: 'fixed',
  zIndex: 999,
  height: '100%',
  top: '0px',
  width: 480,
  right: 0,
  // transition: '850ms',
  animation: `${fadeIn} 300ms`,

  svg: {
    position: 'fixed',
    right: 50,
    color: '$white',
    width: 30,
    height: 30,
    marginTop: 32,
    marginLeft: 32,
    cursor: 'pointer',
  },
})

export const ProductsContainerCart = styled('div', {
  marginTop: '6rem',
  padding: '2rem',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  h1: {
    lineHeight: 1.6,
    fontSize: '$xl',
  },
})

export const ProductsList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '0.5rem',
})

export const ProductsCart = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1rem',
  marginTop: '2rem',
})

export const ImageContainerCart = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 100,

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ProductsDetailsCart = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  lineHeight: 1.4,
  button: {
    padding: 0,
    color: '$green500',
    background: 'transparent',
    fontSize: '$md',
    marginTop: 'auto',
    textAlign: 'left',
  },
})

export const ProductNameCart = styled('span', {
  fontSize: '$lg',
  color: '$gray300',
})

export const ProductPriceCart = styled('span', {
  fontSize: '$lg',
  color: '$white',
})

export const CartFooter = styled('footer', {
  marginTop: 'auto',

  table: {
    width: '100%',

    td: {
      width: '50%',
    },

    strong: {
      lineHeight: 1.6,
      fontSize: '$lg',
    },
  },

  button: {
    marginTop: '2rem',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    width: '100%',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
