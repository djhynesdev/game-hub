import { HStack, Image, Text } from "@chakra-ui/react"
import logo from "../assets/logo-1.svg"

const Navbar = () => {
  return (
      <HStack>
        <Image src={logo} boxSize={'60px'} padding={'10px'} alt="logo" />
        <Text>Navbar</Text>
      </HStack>
  )
}

export default Navbar