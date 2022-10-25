import React from 'react'
import { Button } from '@chakra-ui/react'

export default function Burger(props: Parameters<typeof Button>[0] & {
  isOpen: boolean
}) {
  const { isOpen, ...rest } = props
  return (
    <Button 
      fontFamily="Anicons Regular"
      bg="none" color="white" borderWidth="1px" rounded="full" 
      borderColor={ isOpen ? 'white' : 'transparent'}
      fontSize="3xl"
      px={0} m={0} boxSize={12} 
      children={isOpen ? 'A' : 'C'}

      transitionProperty="all"
      transitionDuration="slower"
      transitionTimingFunction="ease-out"

      _hover={{
        fontVariationSettings: '"TIME" 100',
        bg: 'none', rounded: 'full', borderColor: 'white',
        transform: isOpen ? 'none' : 'rotate(270deg)'
      }}
      
      _active={{
        bg: 'blackAlpha.400'
      }}

      sx={{
        '&': {
          fontVariationSettings: isOpen ? '"TIME" 100' : '"TIME" 1',
        }
      }}
      {...rest}
    />
  )
}