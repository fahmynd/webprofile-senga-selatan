import { Image } from '@chakra-ui/image'
import { Box, Flex, Grid, Heading, HStack, Link, Spacer, Text, VStack } from '@chakra-ui/layout'
import { Link as RouterLink } from 'react-router-dom'
import React, { Fragment } from 'react'
import { Button, Container, Icon } from '@chakra-ui/react'
import { InstanceLogo } from './header/Logo'
import publicPath from '../public.ts'
import navLinks, { NavItemLink } from './header/Links.ts'
import path from 'path-browserify'

import { RiMailFill, RiPhoneFill, RiWhatsappFill } from 'react-icons/ri'

function linksToElement(matchFn: (links: NavItemLink) => boolean) {
  const parentLink = navLinks.filter(matchFn)[0]
  if(parentLink == null) return

  return parentLink.children?.map((child, index) => (
    <Button 
      as={RouterLink} key={index}
      to={path.join(parentLink.path ?? '', child.path ?? '')}
      py={1} height="max-content"
      rounded="base"
      children={child.display}
    />
  ))
}

function StackingSpan(props: Parameters<typeof VStack>[0] & {
  title: string
}) {
  const { children, title, ...rest } = props
  return (
    <VStack alignItems={["center", "flex-start"]} px={10} pt={[10, 0]} {...rest}>
      <Heading as="h4" variant="list-title" mb={3}>{ title }</Heading>
      { children }
    </VStack>
  )
}

export default function Footer() {
  const { deskel, kecamatan, kabkota, province, zipcode, phone, email, home_url } = window.app.APP_INFO
  return (
    <Fragment>
      <Flex
        as="section" id="permohonan" rounded="lg"
        position="relative" shadow="lg"
        sx={{ 
          '&#permohonan': { mb: 3 },
          '&::before': {
            content: '""',
            bgColor: 'white',
            boxSize: 8,
            position: 'absolute',
            transform: 'translate(-50%, -50%) rotate(45deg)',
            top: '100%',
            left: '50%',
            shadow: 'lg',
            zIndex: 0
          }
        }}
      >
        <Container
          as={VStack}
          maxW="container.lg"
          px={10} spacing={3} pt={7} pb={7} bgColor="white"
          rounded={["none", "lg"]} 
          zIndex="1"
        >
          <Heading size="md" textAlign="center">Ingin mengajukan permohonan informasi?</Heading>
          <Button 
            as="a" 
            href={phone ? `https://wa.me/${phone.replace(/^0/, '62')}?text=Halo%2C%20saya%20ingin%20mengajukan%20permohonan%20informasi` : undefined} 
            variant="outline" size="lg"
            children="Ajukan Permohonan Informasi"
          />
        </Container>
      {/* </Flex>
      <Flex 
        bgColor='white' as="footer" py={10} width="100%"
      >
        <Container
          as={Grid}
          maxW="container.xl"
          gridTemplateColumns={[
            '1fr',
            'repeat(2, 1fr)',
            'repeat(2, 1fr)',
            'repeat(2, max-content) auto repeat(2, max-content)',
          ]}
          alignItems="stretch"
        >
          <VStack alignSelf="stretch">
            <InstanceLogo transformOrigin="left" py={2} src="https://online.digitaldesa.id/uploads/73.17.07.2014/common/300_luwu.png" name="Nama Desa"/>
            <a href="https://digitaldesa.id" target="_blank">
              <Image src={publicPath('/assets/media/digides.svg')} filter="blur(0.5px)"/>
            </a>
          </VStack>
          <StackingSpan title={`Desa ${deskel}`}>
            <Text as="span">Kecamatan {kecamatan}</Text>
            <Text as="span">Kabupaten {kabkota}</Text>
            <Text as="span">Provinsi {province}, {zipcode}</Text>
          </StackingSpan>
          <Spacer display={['none', 'none', 'none', 'flex']}/>
          <StackingSpan 
            as="nav" 
            title="Informasi Publik" 
            borderLeft="3px solid" 
            borderColor="gray.700"
            display={['none', 'none', 'none', 'flex']}
          >
            { linksToElement(links => links.path === '/informasi') }
          </StackingSpan>
          <StackingSpan 
            as="nav" 
            title="Tentang" 
            borderLeft="3px solid" 
            borderColor="gray.700"
            display={['none', 'none', 'none', 'flex']}
          >
            { linksToElement(links => links.display === 'Tentang') }
          </StackingSpan>
        </Container>
      </Flex>
      <Flex 
        bgColor="gray.700" color="white"
        py={2} width="100%"
      >
        <Container
          as={Grid}
          maxW="container.lg" gap={1}
          templateColumns={
            ["1fr", "1fr", "repeat(3, 1fr)"]
          }
          textAlign="center"
          fontFamily="mono"
        >
          <Link href={phone ? `tel:${phone.replace(/^0/, '+62')}` : undefined}><Icon as={RiPhoneFill}/> {phone ?? 'Tidak tersedia'}</Link>
          <Link href={phone ? `https://wa.me/${phone.replace(/^0/, '62')}` : undefined}><Icon as={RiWhatsappFill}/> {phone ? 'Whatsapp' : 'Tidak tersedia'}</Link>
          <Link href={email ? `mailto:${email}` : undefined}><Icon as={RiMailFill}/> { email ?? 'Tidak tersedia'}</Link>
        </Container> */}
      </Flex>
    </Fragment>
  )
}