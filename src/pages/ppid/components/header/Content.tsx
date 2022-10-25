import React, { Fragment } from 'react'
import { Flex, Button, Link, Text, Spacer, MenuButton, AccordionButton, Accordion } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
// import { Link } from '@chakra-ui/layout'
import navLinks from './Links'
import { DropdownArrow } from '../Icon'
import { MenuDown, MenuPopup } from './Menu'

function LinkButton(props: Parameters<typeof Button>[0] & {
  exact?: boolean
}) {
  const { exact, ...rest } = props
  return (
    <Button
      display="flex"
      px={3.5} alignItems="center" py={6}

      bgColor="transparent"
      rounded="lg"
      cursor="pointer"

      fontSize="md" fontWeight="medium"
      fontFamily="heading"
      textTransform="uppercase"

      _hover={{ bgColor: 'blackAlpha.300' }}
      _pressed={{ bgColor: 'blackAlpha.400' }}
      _active={{ bgColor: 'blackAlpha.400' }}

      
      sx={{
        '&[data-type=down]': {
          width: 'full',
          py: 4,
          justifyContent: 'flex-start'
        },
        
        '&[data-type=down]:not(:first-of-type)': {
          borderTop: '1px solid',
          borderTopColor: 'whiteAlpha.400'
        },

        '&[data-type=down] .chakra-button__icon': {
          marginInlineStart: 'auto'
        }
      }}
      {...rest}
    />
  )
}

export default function NavContent({ type }: { type: 'bar' | 'down' }) {
  return (<Fragment>{ navLinks.map((link, index) => {
    const { display, children, path } = link
    const as = type === 'bar' ? MenuButton : AccordionButton
    const button = (
      <LinkButton
        as={children ? as : RouterLink} key={index}
        to={children ? null : path} 
        children={display}
        role={children ? 'group' : ''}
        rightIcon={children ? <DropdownArrow/> : undefined}
        data-type={type}
      />
    )

    if(children == null || children.length === 0)
      return button

    // TODO: should implement custom menu that didnt break aria.
    if(type === 'bar')
      return <MenuPopup button={button} parentLink={link} key={index}/>

    if(type === 'down')
      return <MenuDown button={button} parentLink={link} key={index}/>
    
  })}
  </Fragment>)
}