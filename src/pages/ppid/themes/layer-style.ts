import type { SystemStyleObjectRecord } from "@chakra-ui/react";

const layerStyles: SystemStyleObjectRecord = {}
layerStyles['filled-white'] = {
  bgColor: 'white',
  rounded: 'lg',
  border: 'none',
  shadow: 'base'
}

layerStyles['docked-bar'] = {
  width: 'full',
  zIndex: 'docked',
  position: 'fixed',
  shadow: 'lg'
}

export default layerStyles