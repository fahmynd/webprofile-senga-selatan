import { VStack, Image, Flex, HStack, Heading } from '@chakra-ui/react'
import React from 'react'

export function InstanceLogo(props: Parameters<typeof HStack>[0]) {
  const { src, name, ...rest } = props
  return (
    <HStack 
      id="logo" filter="blur(0.5px)"
      {...rest}
    >
      <Flex>
        <Image src={window.app.APP_INFO.logo} boxSize={14}/>
      </Flex>
      <VStack spacing={0} alignItems="flex-start">
        <Heading fontWeight="black" fontSize="5xl" lineHeight="0.8em">PPID</Heading>
        <Heading size="sm">{ window.app.APP_INFO.deskel }</Heading>
      </VStack>
    </HStack>
  )
}