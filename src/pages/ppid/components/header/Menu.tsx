import React, { useEffect } from 'react'
import type { NavItemLink } from './Links'
import { VStack, Button } from '@chakra-ui/react'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react"
import { Link as RouterLink } from 'react-router-dom'

import pathBrowserify from 'path-browserify'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react"
import { omit } from 'lodash-es'

export function MenuPopup({ button, parentLink }: {
  button: JSX.Element,
  parentLink: NavItemLink
}) {
  const { display, children, path } = parentLink
  if(children == null) return button
  // useEffect(() => {
  //   window.addEventListener('scroll', () => {
      
  //   })
  // })
  return (
    <Menu>
      { button }
      <MenuList 
        as="nav"
        bgColor="gray.600" border="none"
        px={2} mt={3} shadow="lg"
        sx={{
          '& > a:not(:first-of-type)': { mt: 1 }
        }}
      >{ children.map((child, index) => {
        if(child.path == null) throw 'Child link should contain href!'
        const childPath = child.absolute ? child.path : pathBrowserify.join(path ?? '', child.path)
        const dest = child.absolute ? { href: childPath } : { to: childPath }
        return (
          <MenuItem 
            as={child.absolute ? 'a' : RouterLink} key={index}
            rounded="md"
            {...dest}
            children={child.display}

            _hover={{ bgColor: 'blackAlpha.300' }}
            _focus={{ bgColor: 'blackAlpha.300' }}
            _pressed={{ bgColor: 'blackAlpha.400' }}
            _active={{ bgColor: 'blackAlpha.400' }}
          />
        )
      })}
      </MenuList>
    </Menu>
  )
}

export function MenuDown({ button, parentLink }: {
  button: JSX.Element,
  parentLink: NavItemLink
}) {
  const { display, children, path } = parentLink
  if(children == null) return button
  
  return (
    <AccordionItem
      border="none" width="full"
    >
      { button }
      <AccordionPanel 
        as={VStack}
        pb={0}
      >{ children.map((child, index) => {
        if(child.path == null) throw 'Child link should contain href!'
        const childPath = child.absolute ? child.path : pathBrowserify.join(path ?? '', child.path)
        const dest = child.absolute ? { href: childPath } : { to: childPath }

        return (
          <Button 
            as={child.absolute ? 'a' : RouterLink} key={index}
            {...dest}
            children={child.display}
            width="full" bgColor="blackAlpha.300" shadow="inner"
            justifyContent="flex-start"
            _hover={{ bgColor: 'blackAlpha.500' }}
            _active={{ bgColor: 'blackAlpha.700' }}
          />
        )
      })}
      </AccordionPanel>
    </AccordionItem>
  )
  
}