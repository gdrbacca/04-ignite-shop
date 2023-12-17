import { usePathname } from 'next/navigation'
import { useState } from 'react'
import logoImg from '../assets/logo.svg'
import { HeaderContainer } from '../styles/pages/app'
import Image from 'next/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { SidebarCart } from './sidebarCart'
import { useShoppingCart } from 'use-shopping-cart'

export function Header() {
  const pathname = usePathname()
  const [sideBar, setSidebar] = useState(false)
  const { cartCount } = useShoppingCart()
  const showSidebar = () => setSidebar(!sideBar)

  function handleSetSidebar(param: boolean) {
    setSidebar(param)
  }

  /* function handleSetCount(param: number) {
    setCount(param)
  } */
  return (
    <HeaderContainer>
      <Link href={'/'}>
        <Image src={logoImg} alt="" />
      </Link>
      {pathname !== '/success' && (
        <button onClick={showSidebar}>
          <Handbag size={24} />
          {cartCount > 0 && <span>{cartCount}</span>}
        </button>
      )}
      {sideBar && (
        <SidebarCart
          active={handleSetSidebar} /* counter={handleSetCount}  */
        />
      )}
    </HeaderContainer>
  )
}
