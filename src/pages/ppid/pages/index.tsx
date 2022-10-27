import React, { useEffect } from 'react'
import DefaultLayout from '../layouts/Default.tsx'
import { Flex, Grid, Heading, HStack, Text, VStack, Box, Badge, Container, Image, Icon, Link, Spinner } from '@chakra-ui/react'
import { Button } from '@chakra-ui/button'
import { Link as RouterLink } from 'react-router-dom'
import publicPath from '../public.ts'
import { RiTimeFill, RiNewspaperFill, RiFileDownloadLine, RiFileForbidFill, RiEyeLine } from 'react-icons/ri'
import { useFiles, useCategories } from '../hooks/useAPI.tsx'
import { Helmet } from 'react-helmet'
import { DateTime } from 'luxon'

function Card(props: Parameters<typeof VStack>[0] & Parameters<typeof RouterLink>[0] & {
  title: string,
  desc: string,
  mediaSrc: string
}) {
  const { title, desc, mediaSrc, ...rest } = props
  const interactStyle = {
    transform: ['scale(1.05)', 'scale(1.05)', 'scale(1.05)', 'scale(1.1)'],
    bgColor: "gray.700",
  }
  return (
    <VStack
      as={RouterLink}
      // display="flex" flexDirection="column"
      // height="max-content" width="100%"
      bgColor="gray.50" shadow="lg"
      zIndex={1} rounded="lg" px={8} py={8}
      cursor="pointer"

      role="group"
      transitionTimingFunction="ease-out"
      transitionDuration="faster"
      _hover={interactStyle}
      _pressed={interactStyle}
      _active={interactStyle}
      {...rest}
    >
      <Flex mb={5}>
        <Image _groupHover={{ filter: 'invert(1)' }} src={mediaSrc} boxSize={32} />
      </Flex>
      <VStack justifyContent="stretch" alignItems="stretch">
        <Heading
          variant="card-title"
          textAlign="center"
          rounded="lg" py={1}
          width="full"
          bgColor="gray.700" color="white"
          px={3} shadow="base"

          _groupHover={{
            color: "white",
            shadow: 'none'
          }}
          children={title}
        />
        {/* <Text variant="card-desc" fontWei>{desc}</Text> */}
      </VStack>
    </VStack>
  )
}

function FeedItem(props: Parameters<typeof HStack>[0] & {
  title: string,
  date: string,
  type?: string,
  category: string,
  downloadLink?: string,
  fileId: string,
  href: string
}) {
  const { title, date, type, category, href, fileId, ...rest } = props
  return (
    <Grid
      px={3.5} py={3}
      spacing={5}
      alignSelf="stretch" alignItems="center"
      templateColumns="auto max-content"
      layerStyle="filled-white"
    >
      <VStack spacing={0} alignItems="flex-start" flexGrow={1}>
        <Heading variant="card-title">{title}</Heading>
        <Text
          as={RouterLink}
          to={`viewer/${fileId}`}
          fontFamily="heading"
          fontSize={['sm', 'sm', 'md']}
          color="blackAlpha.800"
        >
          <Icon as={RiNewspaperFill} mr={1} />
          {/* <Badge 
            bgColor="blackAlpha.500" 
            color="white" rounded="base"
            px={2} mr={2}
            children={type}
          /> */}
          {category}
        </Text>
        <Text
          as="span" fontSize="sm"
          color="blackAlpha.800"
        >
          <Icon as={RiTimeFill} mr={1} /> {DateTime.fromSQL(date).toLocaleString(DateTime.DATETIME_MED)}
        </Text>
      </VStack>
      <VStack spacing={2} alignItems="flex-start" flexGrow={1}>
        <Button
          as={RouterLink}
          to={`viewer/${fileId}`}
          variant="filled"
          p={[0, 0, 3]} rounded={['full', 'full', 'lg']}
          boxSize={[12, 12, 'initial']}
          leftIcon={
            <Icon as={RiEyeLine} boxSize={[6, 6, 5]} />
          }
          _hover={{
            color: 'white'
          }}
          sx={{
            '& .chakra-button__icon': {
              mr: [0, 0, 1.5]
            }
          }}
        >
          <Text display={['none', 'none', 'inline']}>View</Text>
        </Button>
        <Button
          as="a"
          href={href} variant="filled"
          p={[0, 0, 3]} rounded={['full', 'full', 'lg']}
          boxSize={[12, 12, 'initial']}
          leftIcon={
            <Icon as={RiFileDownloadLine} boxSize={[6, 6, 5]} />
          }
          _hover={{
            color: 'white'
          }}
          sx={{
            '& .chakra-button__icon': {
              mr: [0, 0, 1.5]
            }
          }}
        >
          <Text display={['none', 'none', 'inline']}>Download</Text>
        </Button>
      </VStack>
    </Grid>
  )
}

export default function IndexPage() {
  // const { 
  //   start: getCategories, 
  //   data: categories, 
  //   isLoading: isLoadingCategories 
  // } = useRootCategories()

  const {
    start: getFiles,
    data: files,
    isLoading: isLoadingFiles
  } = useFiles({ perpage: 5 })

  useEffect(() => {
    // getCategories()
    getFiles()
  }, [])

  const { deskel, kabkota, home_url } = window.app.APP_INFO

  return (
    <DefaultLayout>
      <Helmet>
        <title>Website PPID Desa {deskel}</title>
      </Helmet>
      <Flex
        as="section" id="title"
        minH={[48, 48, 72]}
      >
        <Container
          as={VStack}
          maxW="container.lg"
          spacing={[3, 2]} px={10}
          justifyContent="center"
        >
          <Heading variant="hero-title" as="h1" order={1} filter="blur(0.4px)">Pejabat Pengelola Informasi dan Dokumentasi</Heading>
          <Heading
            variant="hero-subtitle" as="span"
            rounded="lg"
            // bgColor={['gray.700', 'transparent']} color={['white', 'gray.800']}
            px={3} py={1}
            order={2} filter="blur(0.4px)"
            display={['none', 'inline']}
          >
            Desa {deskel}<Text as="span" display={['none', 'inline']}>, Kabupaten {kabkota}</Text>
          </Heading>
        </Container>
      </Flex>
      <VStack
        as="section" id="options"
        justifyContent="center"
        position="relative"
        pb={5}
        sx={{
          '&::after': {
            content: '""',
            width: 'full',
            height: ['15%', '15%', '50%'],
            bgColor: 'white',
            position: 'absolute',
            // display: ['none', 'none', 'block'],
            bottom: 0,
            zIndex: 0
          }
        }}
      >
        <Container
          display="grid"
          maxW="container.lg"
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
          gridGap={[5, 5, 5, 10, 10]} px={10}
        >
          <Card
            title="Informasi Secara Berkala"
            desc="Informasi yang wajib disediakan dan diumumkan secara berkala."
            mediaSrc={publicPath('/assets/media/003-test.svg')}
            to="informasi/berkala"
          />
          <Card
            title="Informasi Serta Merta"
            desc="Informasi yang dapat mengancam hajat hidup orang banyak dan ketertiban umum."
            mediaSrc={publicPath('/assets/media/002-requirement.svg')}
            to="informasi/serta-merta"
          />
          <Card
            title="Informasi Setiap Saat"
            desc="Informasi yang wajib disediakan oleh Badan Publik."
            mediaSrc={publicPath('/assets/media/001-file.svg')}
            to="informasi/setiap-saat"
          />
        </Container>
      </VStack>
      <Flex
        as="nav" id="nav-button"
        bgColor="white"
        py={10}
      >
        <Container
          as={HStack}
          maxW="container.lg" justifyContent="center"
          px={10}
        >
          {/* <Button variant="outline">Ajukan Permintaan Informasi</Button> */}
          <Button as={RouterLink} variant="outline" to="dasar-hukum" size="lg">Dasar Hukum PPID</Button>
          {/* <Button as="a" variant="outline" href={home_url} size="lg">Profil Desa</Button> */}
          <Button as={RouterLink} variant="outline" to="/profil-ppid" size="lg">PPID Pelaksana</Button>
        </Container>
      </Flex>
      <Flex
        as="section" id="feed"
        py={10}
      >
        <Container
          as={VStack}
          maxW="container.lg"
          spacing={10} px={10}
        >
          <VStack spacing={0}>
            <Heading variant="section-title">Informasi Publik Terbaru</Heading>
            <Heading as="span" variant="section-subtitle">
              Terakhir di update: <strong>{files[0] ? DateTime.fromSQL(files[0].uat).toRelative() : '-'}</strong>.
            </Heading>
          </VStack>
          <VStack alignSelf="stretch" spacing={3}>
            {/* example: <FeedItem title="Mekanisme Pengajuan Keberatan Informasi" date="Sabtu, 27 September 2021" type="Berkala"/> */}
            {files.map((file, index) => (
              <FeedItem key={index} fileId={file.id} title={file.name} date={file.uat} category={file.category} href={file.url} />
            ))}
            <Spinner
              display={isLoadingFiles ? 'inline-block' : 'none'}
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="gray.700"
              boxSize={16}
            />
            <Heading
              as="span"
              display={files.length === 0 && isLoadingFiles === false ? "initial" : "none"}
              fontSize={["md", "lg", "xl"]} py={3} alignSelf="center"
              bgColor="red.500" color="white" px={5} rounded="lg"
            >
              <Icon as={RiFileForbidFill} boxSize={[5, 5, 6]} mr={3} />
              Belum ada file
            </Heading>
          </VStack>
        </Container>
      </Flex>
    </DefaultLayout>
  )
}