import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    position: 'relative',
    padding: '0.5rem',
    borderRadius: 6,
    border: 0,
    backgroundColor: '$gray800',
    color: '$gray100',
    cursor: 'pointer',

    '&:disabled': {
      color: '$gray300',
    },

    span: {
      position: 'absolute',
      top: -10,
      right: -10,
      width: 20,
      height: 20,
      backgroundColor: '$green300',
      color: '$white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
    },
  },
})
