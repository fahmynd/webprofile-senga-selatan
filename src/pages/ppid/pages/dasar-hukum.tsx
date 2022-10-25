import React, { useEffect, useState } from 'react'
import { Box, Container, Flex, Heading, Link, ListItem, OrderedList, Text, UnorderedList, VStack, Spinner } from '@chakra-ui/react'
import DefaultLayout from '../layouts/Default.tsx'
import marked from 'marked'
import parse from 'html-react-parser'
import { Replacer } from 'react-element-replace'
import publicPath from '../public.ts'
import { Helmet } from 'react-helmet'

function replaceFn(e: React.ReactNode) {
  if(React.isValidElement(e))
    switch(e.type) {
      case 'p': return <Text {...e.props}/>
      case 'h2': return (
        <Heading 
          as="h2" size="md" fontWeight="extrabold" 
          mb={3} textDecoration="underline"
          sx={{ '&:not(:first-of-type)': { mt: 10 } }}
          {...e.props}
        />
      )
      case 'ul': return <UnorderedList {...e.props}/>
      case 'li': return <ListItem {...e.props}/>
      case 'ol': return <OrderedList {...e.props}/>
      case 'a': return (
        <Link 
          bgColor="gray.700" color="white"
          px={2}
          {...e.props}
        />
      )
    }
  return e
}

export default function DasarHukumPage() {
  const [html, setHtml] = useState('')
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    fetch(publicPath('/dasar-hukum.md'))
      .then(res => res.text())
      .then(res => {
        setHtml(res)
        setLoading(false)
      })
  }, [])

  const { deskel } = window.app.APP_INFO
  return (
    <DefaultLayout>
      <Helmet>
        <title>Dasar Hukum | Website PPID Desa {deskel}</title>
      </Helmet>
      <Flex
        as="main"
        py={16}
        minH="80vh"
      >
        <Container as={VStack} minH="50vh" spacing={10} maxW="container.lg">
          <VStack>
            <Heading variant="hero-title">Dasar Hukum</Heading>
            <Heading variant="hero-subtitle" fontSize="xl" as="h2">Yang mendasari pembentukan PPID</Heading>
          </VStack>
          <Replacer
            match={e => true}
            replace={replaceFn}
          >
            {/* opinionated theme... */}
            <Box
              bgColor="white" p={10} rounded="lg" shadow="base"
              display={isLoading ? 'none' : 'revert'}
              children={parse(marked(html))}
            />
          </Replacer>
          <Spinner
            display={isLoading ? 'inline-block' : 'none'}
            alignSelf="center"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="gray.700"
            boxSize={16}
          />
        </Container>
      </Flex>
    </DefaultLayout>
  )
}
