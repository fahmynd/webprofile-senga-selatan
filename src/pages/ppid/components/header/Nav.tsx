import React, { Fragment, MutableRefObject, RefObject } from 'react'
import { Flex, HStack, Link, VStack } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { Accordion, Button } from '@chakra-ui/react'
import Burger from './Burger'
import { createPortal } from 'react-dom'
import NavContent from './Content'

export function NavBar(props: Parameters<typeof HStack>[0]) {
  return (
    <HStack 
      as='nav'
      alignSelf="stretch" alignItems="center"
      {...props}
    >
      <NavContent type="bar"/>
    </HStack>
  )
}

export function NavDown(props: Parameters<typeof Accordion>[0] & Parameters<typeof VStack>[0]) {
  return (
    <Accordion as={VStack}
      allowMultiple allowToggle
      width="full" spacing={2}
      alignItems="flex-start"
      fontWeight="bold" fontSize="lg"
      {...props}
    >
      <NavContent type="down"/>
    </Accordion>
  )
}