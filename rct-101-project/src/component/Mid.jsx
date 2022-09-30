import {
  Grid,
  GridItem,
  Box,
  Text,
  Highlight,
  Heading,
  Flex,
  Image,
} from "@chakra-ui/react";

export default function Mid() {
  return (
    <>
      <Box w="75vw" m="auto">
        <Grid templateColumns="repeat(3, 1fr)" gap={10}>
          <GridItem w="100%" h="10" textAlign="left" color="#767676">
            <Highlight
              query="1"
              styles={{
                px: "4",
                py: "2",
                rounded: "full",
                bg: "#F2FBF9",
                color: "green",
                fontSize: "2rem",
              }}
            >
              1
            </Highlight>
            <Text fontWeight="semibold" mb="1.5vh" mt="1vh">
              Quick setup
            </Text>
            Connect Everhour with your tool and start tracking time right away.
            No manual project setup required.
          </GridItem>
          <GridItem w="100%" h="10" textAlign="left" color="#767676">
            <Highlight
              query="2"
              styles={{
                px: "4",
                py: "2",
                rounded: "full",
                bg: "#F2FBF9",
                color: "green",
                fontSize: "2rem",
              }}
            >
              2
            </Highlight>
            <Text fontWeight="semibold" mb="1.5vh" mt="1vh">
              Native integration
            </Text>
            Time tracking controls natively appears inside your project
            management tool, making it easy to track time.
          </GridItem>
          <GridItem w="100%" h="10" textAlign="left" color="#767676">
            <Highlight
              query="3"
              styles={{
                px: "4",
                py: "2",
                rounded: "full",
                bg: "#F2FBF9",
                color: "green",
                fontSize: "2rem",
              }}
            >
              3
            </Highlight>
            <Text fontWeight="semibold" mb="1.5vh" mt="1vh">
              Automatic updates
            </Text>
            Everhour syncs changes automatically. That means your reports will
            always show the freshest data.
          </GridItem>
        </Grid>
      </Box>
      <Box mt="40vh">
        <Heading
          w="52vw"
          color="#333333"
          as="h1"
          size="2xl"
          noOfLines={4}
          fontWeight="semibold"
          textAlign="left"
          ml="5vw"
        >
          Everhour has helped 240,000+ people complete over 135 million tasks in
          3 million projects
        </Heading>
      </Box>
      <Flex direction="row" w="80vw" m="auto" gap="12vw">
        <Box w="35vw" textAlign="left" mt="10vh" lineHeight={8} fontSize="1.2rem">
          Everhour helps us track our engineering hours which is a requirement
          for several Government grants we have received. Without Everhour, we
          would be unable to accurately track the hours associated with each
          individual project we are working on as a company. The reports are
          easily customizable which allows me to extract the data I need.
          Everhour is a great tool for our time tracking needs!
          <Text mt="3vh" fontWeight="semibold">Kelly Bonneau, CPA</Text>
          <Text>Accounting Manager at <b>7shifts</b></Text>
        </Box>
        <Box>
            <Image src="https://blog-cdn.everhour.com/assets/images/new-design/illustrations/customers/customer-kelly.webp" alt="img" w="35vw"/>
        </Box>
      </Flex>
    </>
  );
}
