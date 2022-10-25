import React from 'react'
import { Box, useStyleConfig } from '@chakra-ui/react'

function Card(props: Parameters<typeof Box>[0]) {
  const { variant, children, ...rest } = props
  const styles = useStyleConfig("Card", { variant })
  return <Box _css={styles} {...rest}/>
}