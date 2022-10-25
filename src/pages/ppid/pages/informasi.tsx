import { Accordion, AccordionButton, AccordionIcon, Table, Tbody, Tfoot, Thead, Th, Td, Tr, Button, Icon, Spinner, Link } from '@chakra-ui/react'
import { AccordionItem, AccordionPanel, VStack } from '@chakra-ui/react'
import DefaultLayout from '../layouts/Default.tsx'
import React, { Fragment, useEffect } from 'react'
import { DateTime } from 'luxon'
import { Box, Flex, Grid, Heading, HStack, Text, Container } from '@chakra-ui/layout'
import { RiFileDownloadLine, RiFileForbidLine, RiFileForbidFill, RiFolderForbidFill } from 'react-icons/ri'
import { useCategories, useFiles } from '../hooks/useAPI.tsx'
import type { Category, FetchController, File } from '../types.ts'
import { Helmet } from 'react-helmet'

function FilesTable({ fetch }: { fetch: FetchController<File> }) {
  const { start, data, isLoading } = fetch
  useEffect(() => {
    start()
  }, [])

  return (
    <Fragment>
      <Table
        display={isLoading || data.length === 0 ? 'none' : 'grid'}
        gridTemplateColumns={[
          "1fr",
          "max-content auto max-content",
          "max-content auto max-content max-content",
        ]}
        sx={{
          '& tr, & thead, & tbody': { display: 'contents' },
          '& td': {
            alignItems: 'center'
          },
          '& td, & th': {
            px: [3, 3, 6]
          }
        }}
      >
        <Thead>
          <Tr>
            <Th display={['none', 'initial']}>No</Th>
            <Th>Judul</Th>
            <Th display={['none', 'none', 'initial']}>Tanggal</Th>
            <Th color="transparent" userSelect="none" display={['none', 'initial']}>Aksi</Th>
          </Tr>
        </Thead>
        <Tbody>{ data.map((file, index) => {
          const formattedDate = DateTime.fromSQL(file.uat).toLocaleString(DateTime.DATETIME_MED)
          return (
            <Tr key={index} sx={{
              '&:last-of-type td': {
                'borderBottom': 'none'
              }
            }}>
              <Td display={['none', 'flex']}>{index + 1}</Td>
              <Td display="flex">
                <HStack display={['flex', 'none']} width="full" as={Link} href={file.url}>
                  <Icon 
                    as={RiFileDownloadLine} 
                    boxSize={6} alignSelf="center" mr={3} 
                  />
                  <VStack 
                    alignItems="flex-start"
                    fontWeight="bold" spacing={0}
                  >
                    <Text>{file.name}</Text>
                    <Text fontSize="sm" display={['inline', 'inline', 'none']}>{formattedDate}</Text>
                  </VStack>
                </HStack>
                <Link href={file.url} fontWeight="bold" display={['none', 'initial']}>{file.name}</Link>
              </Td>
              <Td display={['none', 'none', 'flex']}>{formattedDate}</Td>
              <Td display={['none', 'flex']}>
                <Button 
                  as="a" variant="filled"
                  p={[0, 0, 2]} rounded={['full', 'full', 'lg']}
                  boxSize={[12, 12, 'initial']}
                  href={file.url}
                  leftIcon={
                    <Icon as={RiFileDownloadLine} boxSize={[6, 6, 5]}/>
                  }
                  sx={{
                    '& .chakra-button__icon': {
                      mr: [0, 0, 1.5]
                    }
                  }}
                >
                  <Text display={['none', 'none', 'inline']}>Download</Text>
                </Button>
              </Td>
            </Tr>
          )
        })}
        </Tbody>
        <Tfoot>
          
        </Tfoot>
      </Table>
      <Spinner
        display={isLoading ? 'inline-block' : 'none'}
        alignSelf="center"
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="gray.700"
        boxSize={16}
      />
      <HStack 
        display={data.length === 0 && isLoading === false ? "initial" : "none"}
        py={3}
      >
        <Icon as={RiFileForbidFill} boxSize={6}/>
        <Heading 
          as="span" 
          fontSize={["md", "md", "lg"]}
        >
          Belum ada file
        </Heading>
      </HStack>
    </Fragment>
  )
}

function CategoryItem({ category }: { category: Category }) {
  const { name, id } = category
  const fetch = useFiles({ category_id: id, __loadAll: true })

  return (
    <AccordionItem 
      // borderStyle="solid" borderColor="gray.300" borderWidth="1px"
      layerStyle="filled-white"
      rounded="lg"
    >
      <h2>
        <AccordionButton
          rounded="lg" px={8} py={3}
          _expanded={{
            borderBottomRadius: 'none'
          }}
          fontWeight="extrabold"
          fontSize="lg" fontFamily="heading"
        >
          <Box as="span" flex="1" textAlign="left">
            { name }
          </Box>
          <AccordionIcon ml={10}/>
        </AccordionButton>
      </h2>
      <AccordionPanel 
        pb={4} px={0} mx={8} 
        // borderTop="1px solid" borderColor="gray.200"
        display="flex" justifyContent="center"
      >
        <FilesTable fetch={fetch}/>
      </AccordionPanel>
    </AccordionItem>
    
  )
}

export default function InformationPage({ title, subtitle, id }: {
  title: string
  subtitle: string
  id: string
}) {
  const { start, data, isLoading } = useCategories({ parent_id: id })

  useEffect(() => {
    start()
  }, [])

  const { deskel } = window.app.APP_INFO
  return (
    <DefaultLayout>
      <Helmet>
        <title>{title} | Website PPID Desa {deskel}</title>
      </Helmet>
      <Flex
        as="section"
        py={16}
        minH="80vh"
      >
        <Container
          as={VStack}
          maxW="container.lg"
          justifyContent="center"
          spacing={10}
          px={10}
        >
          <VStack>
            <Heading variant="hero-title" as="h1">{title}</Heading>
            <Heading variant="hero-subtitle" as="h2">{subtitle}</Heading>
          </VStack>
          <VStack 
            as="main" alignSelf="stretch" alignItems="stretch"
            // p={2.5} layerStyle="filled-white"
            // minH="xs" 
          >
            <Accordion
              as={VStack}
              display={isLoading || data.length === 0 ? 'none' : 'initial'}
              defaultIndex={[0]} allowMultiple allowToggle
              alignItems="stretch" spacing={3}
            >
              { data.map((category, index) => <CategoryItem category={category} key={index}/>) }
            </Accordion>
            <Heading 
              as="span" 
              display={data.length === 0 && isLoading === false ? "initial" : "none"}
              fontSize={["md", "lg", "xl"]} py={3} alignSelf="center"
              bgColor="red.500" color="white" px={5} rounded="lg"
            >
              <Icon as={RiFolderForbidFill} boxSize={[5, 5, 6]} mr={3}/>
              Belum ada subkategori
            </Heading>
            <Spinner
              display={isLoading ? 'inline-block' : 'none'}
              alignSelf="center"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="gray.700"
              boxSize={16}
            />
          </VStack>
        </Container>
      </Flex>
    </DefaultLayout>
  )
}