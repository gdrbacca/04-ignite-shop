import { styled } from '..'

export const SuccessContainer = styled('main', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 auto',
  height: 656,

  h1: {
    color: '$gray100',
    fontSize: '$2xl',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 500,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
  },

  a: {
    fontSize: '$lg',
    textDecoration: 'none',
    color: '$green500',
    marginTop: '5rem',
    fontWeight: 'bold',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const SuccessImage = styled('div', {
  width: 145,
  maxWidth: 145,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: '50%',
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const SuccessImageContainer = styled('div', {
  display: 'flex',

  'div + div': {
    boxShadow:
      'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px',
    marginLeft: '-4rem',
  },
})
