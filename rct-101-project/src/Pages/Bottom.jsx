import {
  GridItem,
  Grid,
  List,
  ListItem,
  ListIcon,
  Center,
  Heading,
  Stack,
  Input,
  Button,
  Text,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { MdCircle } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Mid from "../component/Mid";
export default function Bottom() {
  return (
    <>
    <Mid/>
      <Center w="85vw" m="auto" mt="20vh">
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem textAlign="left">
            <Heading
              color="#333333"
              as="h1"
              size="xl"
              noOfLines={1}
              fontWeight="semibold"
              mb="2vh"
            >
              Take control of your time with Everhour
            </Heading>
            <Heading w="60vw" color="#767676" fontSize={20} fontWeight="none" mb="6vh">
              Beautiful integrations. Intuitive interface. No unexpected fees
            </Heading>
            <Stack direction="row" spacing={5} align="center">
              <Input
                colorScheme="teal"
                variant="outline"
                placeholder=" Work Email..."
                w="25vw"
                h="8vh"
                border="1px"
                borderColor="black"
               
              />

              <Button
                colorScheme="whatsapp"
                variant="solid"
                bg="#57BB71"
                h="8vh"
                w="12vw"
              >
                Try free
              </Button>
            </Stack>
            <Flex w="19.5vw"  mt="1.5vh">
              <FcGoogle size={23} />
              <Spacer />
              <Text color="#767676">Or sign up with Google Account</Text>
            </Flex>
          </GridItem>
          <GridItem textAlign="left" fontWeight="semibold">
            <List spacing={3}>
              <ListItem>
                <ListIcon as={MdCircle} color="#57BB71" />
                Track time from the apps you already use
              </ListItem>
              <ListItem>
                <ListIcon as={MdCircle} color="#57BB71" />
                Know where your team’s time is going
              </ListItem>
              <ListItem>
                <ListIcon as={MdCircle} color="#57BB71" />
                Keep projects on budget
              </ListItem>
              <ListItem>
                <ListIcon as={MdCircle} color="#57BB71" />
                Increase transparency
              </ListItem>
              <ListItem>
                <ListIcon as={MdCircle} color="#57BB71" />
                Make your workflow more efficient
              </ListItem>
              <ListItem>
                <ListIcon as={MdCircle} color="#57BB71" />
                Spot burnout before it happens
              </ListItem>
            </List>
          </GridItem>
        </Grid>
      </Center>
    </>
  );
}
