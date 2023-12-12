import { Container, Heading, Text } from '@chakra-ui/react';
import { useAddress } from '@thirdweb-dev/react';

export default function Info() {
  const address = useAddress();

  return (
    <Container maxW={'1200px'} p={5} bg="red.100">
      <Heading> Infomation </Heading>
      <Text>
        Developed by Byoungcheon lee. <br />
        deployed by using 0x7A2905923B571437c78D1Dd09D3fBF8ee00F8842 (Account 4){' '}
        <br />
        Technology : Thirdweb, Ethers, Next.js, ChakraUI, Typescript
        <br />
      </Text>
      <br />
      <Heading> Contract Addresses </Heading>
      <Text>
        - MARKETPLACE_ADDRESS : 0x241E0aF640F18fA561F3C4cD5373628B3aa40CdE{' '}
        <br />
        - NFT_COLLECTION_ADDRESS : 0xaa1EaeBa7ba17AA3656e6f61e015B3Adc789f4E2
        <br />
        - TOKEN_DROP_ADDRESS : 0x3DbED524df8Fbe25D117907B05F05AE5C9a7b68a <br />
      </Text>
      <br />
      <Heading> Current Wallet </Heading>
      <Text>{address}</Text>
    </Container>
  );
}
