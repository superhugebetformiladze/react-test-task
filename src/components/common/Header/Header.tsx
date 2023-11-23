import React, { memo, useEffect, useState } from 'react'
import styled from 'styled-components'
import Flex from '@components-common/Styled/Flex'
import Text from '@components-common/Styled/Text'
import Image from '@components-common/Styled/Image'
import Button from '@components-common/Button/Button'
import { Link } from 'react-router-dom'
import useWindowSize from '@/hooks/useWindowSize'
import { Hamburger } from '@components/BurgerMenu/Hamburger'
import { useGoogleAuth } from '@hooks/Auth/useGoogleAuth'
import { theme } from '@/index'

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

const DropdownMenu = styled.div`
  position: absolute;
  top: 115%;
  right: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  z-index: 15;
`

const Header = memo((props: any) => {
  const { width } = useWindowSize()
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false)
  const isTablet = width && width <= 768

  const { profile, login, logOut } = useGoogleAuth({
    onLoginSuccess: (profile) => {
      closeMenu()
      closeDropdownMenu()
    },
    onLogoutSuccess: () => {
      closeMenu()
      closeDropdownMenu()
    },
  })

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const toggleDropdownMenu = () => {
    setDropdownMenuOpen(!dropdownMenuOpen)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const closeDropdownMenu = () => {
    setDropdownMenuOpen(false)
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
    if (dropdownMenuOpen) {
      const handleClickOutsideMenu = (event: MouseEvent) => {
        const target = event.target as HTMLElement
        const dropdownMenu = document.getElementById('dropdown-menu')

        if (dropdownMenu && !dropdownMenu.contains(target)) {
          closeDropdownMenu()
        }
      }

      document.addEventListener('mousedown', handleClickOutsideMenu)

      return () => {
        document.removeEventListener('mousedown', handleClickOutsideMenu)
      }
    }
  }, [menuOpen, dropdownMenuOpen])

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
          <>
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
            <Flex position="relative">
              {profile ? (
                <Flex flexdirection="row" alignitems="center" position="relative">
                  <Image
                    src={profile.picture}
                    alt="user"
                    borderradius="50%"
                    height="3rem"
                    width="3rem"
                    cursor="pointer"
                    onClick={toggleDropdownMenu}
                  />
                  {dropdownMenuOpen && (
                    <DropdownMenu id="dropdown-menu">
                      <Link to="/orders" onClick={closeDropdownMenu}>
                        <Text cursor="pointer" margin="0 0 1rem 0">
                          Заказы
                        </Text>
                      </Link>
                      <Button backgroundcolorhover="unset" onClick={logOut}>Выйти</Button>
                    </DropdownMenu>
                  )}
                </Flex>
              ) : (
                <Button
                  backgroundcolor={theme.colors.button}
                  color={theme.colors.white}
                  padding="0.5rem 1.5rem"
                  borderradius="24px"
                  backgroundcolorhover={theme.colors.buttonHover}
                  onClick={() => login()}
                >
                  Войти
                </Button>
              )}
            </Flex>
          </>
        )}
      </Flex>
      {isTablet && menuOpen && (
        <Flex flexdirection="column" alignitems="center">
          <Link to="/" onClick={closeMenu}>
            <Text cursor="pointer" margin="0.5rem 0">
              Главная
            </Text>
          </Link>
          <Link to="/catalog" onClick={closeMenu}>
            <Text cursor="pointer" margin="0.5rem 0">
              Каталог
            </Text>
          </Link>
          {profile ? (
          <>
            <Link to="/orders" onClick={closeDropdownMenu}>
              <Text cursor="pointer" margin="0.5rem 0">
                Заказы
              </Text>
            </Link>
            <Button margin="1rem 0" backgroundcolorhover="unset" onClick={logOut}>Выйти</Button>
          </>
          ) : (
            <Button
            backgroundcolor={theme.colors.button}
            color={theme.colors.white}
            padding="0.5rem 1.5rem"
            margin="1rem 0"
            borderradius="24px"
            backgroundcolorhover={theme.colors.buttonHover}
            onClick={() => login()}
          >
            Войти
          </Button>
        )}
        </Flex>
      )}
    </StyledHeader>
  )
})

export default Header
