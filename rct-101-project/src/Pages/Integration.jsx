import { Center, Heading,Box,Grid,GridItem } from "@chakra-ui/react";

export default function Integration() {
  return (
    <>
      <Center mt="10vh">
        <Heading
          w="65vw"
          color="#333333"
          as="h1"
          size="2xl"
          noOfLines={1}
          fontWeight="semibold"
        >
          Time tracking with popular apps
        </Heading>
      </Center>
      <Center mt="5vh">
        <Heading
          w="65vw"
          color="#767676"
          fontSize={24}
          noOfLines={2}
          fontWeight="none"
          lineHeight={9}
        >
          Everhour works with the most popular tools on the market so that your
          team can easily track time with your favorite apps.
        </Heading>
      </Center>
      <Center mt="24vh">
        <Heading
          w="65vw"
          color="#333333"
          as="h1"
          fontSize={40}
          noOfLines={1}
          fontWeight="semibold"
        >
          Native integrations
        </Heading>
      </Center>
      <Center mt="1vh">
        <Heading
          w="55vw"
          color="#767676"
          fontSize={19}
          noOfLines={1}
          fontWeight="none"
          lineHeight={9}
        >
          Advanced integration for selected tools with automatic data
          synchromization
        </Heading>
      </Center>
      <Box w="84vw" m="auto" mt="9vh">
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          <GridItem w="100%" h="40vh" bg="#FFFFFF" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
          <GridItem w="100%" h="40vh" bg="blue.500" />
        </Grid>
      </Box>
    </>
  );
}
