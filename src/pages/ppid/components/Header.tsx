import { Image } from '@chakra-ui/image'
import { Box, Container, Flex, Grid, HStack, Link, Spacer, Stack, VStack } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'
import React, { useState, useEffect, useRef } from 'react'
import { InstanceLogo } from './header/Logo'
import { useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import Burger from './header/Burger'
import { NavBar, NavDown } from './header/Nav'

export default function Header(props: Parameters<typeof HStack>[0]) {
  const SCROLL_THRESHOLD = 175

  const [isDense, setDense] = useState(false)
  const { onToggle, isOpen: isOpenDropdown } = useDisclosure()
  const portalNavbar = useRef<HTMLDivElement>(null)

  const isDropdown = useBreakpointValue([true, true, false])

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // if(window.scrollY >= SCROLL_THRESHOLD && isDense === false)
      //   setDense(true)

      // else if(window.scrollY < SCROLL_THRESHOLD && isDense)
      //   setDense(false)
      setDense(window.scrollY >= SCROLL_THRESHOLD)
    })
  })

  const transitionFunction = {
    transitionTimingFunction: 'ease-out',
    transitionDuration: 'faster'
  }


  // TODO: SIMPLIFY THIS UGLY MESS...
  return (
    <VStack
      as="header"
      layerStyle="docked-bar"
      data-dropdown={isDropdown}
      color="white" bgColor='gray.600'
      spacing={0}
      pointerEvents="none"
      sx={{
        '&[data-dropdown=true]': {
          bgColor: 'transparent',
          shadow: 'none'
        },
        '& > *': {
          pointerEvents: 'all'
        }
      }}
    >
      <Container
        as={HStack} 
        maxW="container.xl"
        alignItems="center"
        bgColor="gray.600"
        h={20}
        zIndex={1}

        transitionProperty="dimensions"
        {...transitionFunction}

        data-dense={isDense}
        sx={{
          // if isDropdown regardless of isDense
          '[data-dropdown=true] &[data-dense]': { 
            h: 'auto',
            shadow: 'lg' 
          },

          // if isDense
          '&[data-dense=true]': { height: 16 },

          // if isDropdown regardless of isDense
          '[data-dropdown=true] &[data-dense] #logo': { 
            transform: 'scale(0.8)', 
            h: 'auto'
          },

          // if isDense
          '&[data-dense=true] #logo': { 
            transform: 'scale(0.8)', 
            height: 16 
          },

          '& #logo': {
            transitionProperty: 'all',
            ...transitionFunction
          },
        }}
        {...props}
      >
        <InstanceLogo transformOrigin="left" py={2}/>
        <Spacer/>
        <NavBar display={isDropdown ? 'none' : 'flex'}/>
        <Burger 
          display={isDropdown ? 'flex' : 'none'} 
          onClick={onToggle}
          isOpen={isOpenDropdown}
        />
      </Container>
      <Container
        maxW="container.xl"
        display={isDropdown ? 'flex' : 'none'}

        py={3}
        shadow="lg" bgColor="gray.700"

        {...transitionFunction}
        transitionProperty="all"
        transitionDuration='normal'
        transform="translateY(-200%)"
        
        data-active={isDropdown && isOpenDropdown ? true : null}
        _active={{
          transform: 'translateY(0%)'
        }}
      >
        <NavDown/>
      </Container>
    </VStack>
  )
}