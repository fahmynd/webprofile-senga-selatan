import DefaultLayout from '#/layouts/Default'
import { VStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import { Helmet } from 'react-helmet'
import publicPath from '#/public'

export function E404Page() {
  const { deskel } = window.app.APP_INFO
  return (
    <DefaultLayout flexGrow={1} height="full" justifyContent="center">
      <Helmet>
        <title>Halaman Tidak Ditemukan | Website PPID Desa {deskel}</title>
      </Helmet>
      <VStack py={20} spacing={10}>
        <Image src={publicPath('assets/media/004-file-1.svg')} boxSize={72}/>
        <Heading 
          textAlign="center" fontWeight="bold"
          color="white" bgColor="gray.800" rounded="lg"
          px={5} py={2}
        >
          Halaman tidak Ditemukan.
        </Heading>
      </VStack>
    </DefaultLayout>
  )

}