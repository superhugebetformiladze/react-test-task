import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '@components-common/Styled/Flex'
import Text from '@components-common/Styled/Text'
import { Link } from 'react-router-dom'
import useWindowSize from '@/hooks/useWindowSize'
import { Hamburger } from '@components/BurgerMenu/Hamburger'

interface StylesProps {
  height?: string
  width?: string
}

const StyledHeader = styled.div<StylesProps>`
  height: ${(props) => props.height || 'auto'};
  width: ${(props) => props.width || '100%'};
  background-color: ${(props) => props.color || props.theme.colors.header};
  border-radius: 24px;
`

const Header = (props: any) => {
  const { width } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
  const isTablet = width && width <= 768

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    if (menuOpen) {
      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        const header = document.getElementById('header')

        if (header && !header.contains(target)) {
          closeMenu()
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [menuOpen])

  return (
    <StyledHeader {...props} id="header">
      <Flex
        flexdirection="row"
        alignitems="center"
        justifycontent="space-between"
        padding="1rem 2rem"
      >
        <Link to="/" onClick={closeMenu}>
          <Text fontWeight="600" cursor="pointer" fontSize="2rem">
            Logo
          </Text>
        </Link>
        {isTablet ? (
          <Hamburger onClick={toggleMenu} isInitiallyOpen={menuOpen} />
        ) : (
          <Flex flexdirection="row" alignitems="center">
            <Link to="/" onClick={closeMenu}>
              <Text cursor="pointer" margin="0 1rem 0 0">
                Главная
              </Text>
            </Link>
            <Link to="/catalog" onClick={closeMenu}>
              <Text cursor="pointer">Каталог</Text>
            </Link>
          </Flex>
        )}
      </Flex>
      {isTablet && menuOpen && (
        <Flex flexdirection="column" alignitems="center">
          <Link to="/" onClick={closeMenu}>
            <Text cursor="pointer" margin="1rem 0">
              Главная
            </Text>
          </Link>
          <Link to="/catalog" onClick={closeMenu}>
            <Text cursor="pointer" margin="1rem 0">
              Каталог
            </Text>
          </Link>
        </Flex>
      )}
    </StyledHeader>
  )
}

export default Header
