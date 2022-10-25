import React, { Fragment, useEffect, useRef } from 'react'
import { Box, Flex, VStack } from "@chakra-ui/layout";
import Header from '../components/Header.tsx';
import { useBreakpointValue } from '@chakra-ui/media-query';
import { useToken } from '@chakra-ui/system';
import Footer from '../components/Footer.tsx';

export default function DefaultLayout(props: Parameters<typeof VStack>[0]) {
  const [sm]  = useToken('space', ['32'])
  const container = useBreakpointValue({ 
    '2xl': 'container.lg',
    xl: 'container.lg',
    lg: 'container.md',
    md: 'container.sm',
    sm: 'container.sm',
  })

  const test = useBreakpointValue({
    '2xl': '2xl', xl: 'xl', lg: 'lg', md: 'md'
  })

  return (
    <VStack
      minW='100%' minH='100vh'
      bgColor='gray.100'
      spacing={0}
    >
      {/* <Header/> */}
      <VStack
        as="main"
        spacing={0} width="full"
        // pt={20}
        alignItems="stretch"
        py={10}
        {...props}
      />
      <Footer/>
    </VStack>
  )
}