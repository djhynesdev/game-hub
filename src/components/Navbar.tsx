import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo-1.svg"
import ColorModeSwitch from "./ColorModeSwitch"


const Navbar = () => {
  return (
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} boxSize={'60px'} padding={'10px'} alt="logo" />
        <ColorModeSwitch/>
      </HStack>
  )
}

export default Navbar