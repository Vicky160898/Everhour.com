import {
  Center,
  Heading,
  Stack,
  Input,
  Button,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  Box,
  Highlight,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import Navbar from "../component/Navbar";
export default function Signup() {
  return (
    <>
      <Center mt="5vh">
        <Heading
          w="60vw"
          color="#333333"
          as="h1"
          size="2xl"
          noOfLines={2}
          fontWeight="semibold"
        >
          Make your team more productive with Everhour
        </Heading>
      </Center>
      <Center mt="4vh">
        <Heading
          w="70vw"
          color="#767676"
          fontSize={20}
          noOfLines={1}
          fontWeight="none"
          lineHeight={9}
        >
          Join 3,500+ customers who use Everhour to track time and plan their
          future projects more effectively
        </Heading>
      </Center>
      <Center w="30vw" m="auto" mt="8vh">
        <Flex direction="column">
          <Stack>
            <Button
              leftIcon={<FcGoogle size={26} />}
              h="7vh"
              colorScheme="teal"
              variant="outline"
              w="25vw"
            >
              Sing up with Google
            </Button>
            <Text>or</Text>
          </Stack>
          <Flex direction="column" gap="3vh" mt="2vh">
            <Input
              placeholder="Work email.."
              h="7vh"
              border="1px"
              borderColor="black"
              w="25vw"
            />
            <Center>
              <Button colorScheme="whatsapp" w="14vw" h="9vh" bg="#57BB71">
                Get Started
              </Button>
            </Center>
          </Flex>
        </Flex>
      </Center>
      <Center mt="5vh">
        <UnorderedList>
          <Flex direction="row" gap="2vw" color="#767676">
            <Text>Free to try</Text>
            <ListItem> No credit card required </ListItem>
            <ListItem> 1-minute signup</ListItem>
          </Flex>
        </UnorderedList>
      </Center>
      <Box w="88vw" m="auto" mt="20vh" bg="#F1FAF5">
        <Grid w="85vw" m="auto" templateColumns="repeat(3, 1fr)" gap={10}>
          <GridItem
            w="100%"
            h="45vh"
            bg="#FFFFFF"
            textAlign="left"
            lineHeight="4vh"
            border="0.1px solid green"
            p="8"
            color="#767676"
          >
            <Highlight
              query={["and I", "use Everhour for timekeeping of myself"]}
              styles={{ px: "2", py: "0", rounded: "full", bg: "#FCFAB5" }}
            >
              “I am the owner of the company, and I use Everhour for timekeeping
              of myself and my subcontractors. All team members use the system -
              from web developers to tech support to project management to
              design.”
            </Highlight>
            <Text mt="2vh">— Jennifer H. (Source: TrustRadius)</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="55vh"
            bg="#FFFFFF"
            textAlign="left"
            lineHeight="4vh"
            border="1px solid green"
            p="8"
            color="#767676"
          >
              <Highlight
              query={["and Everhour", "ended up being the best solution"]}
              styles={{ px: "2", py: "0", rounded: "full", bg: "#FCFAB5" }}
            >
            “Everhour is being used by my department now, but it’s planned to be
            used across the whole company. We were having problems tracking the
            times of every project and Everhour ended up being the best solution
            to the issue. We’re tracking our tasks involved in every project, in
            every level (software development, meetings, project management,
            etc.)”
            </Highlight>
            <Text mt="2vh">— Maria Lucia S. (Source: TrustRadius)</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="45vh"
            bg="#FFFFFF"
            textAlign="left"
            lineHeight="4vh"
            border="1px solid green"
            p="8"
            color="#767676"
          >
            <Highlight
              query={["Everhour helps me manage/plan my ", "weekly activities a lot"]}
              styles={{ px: "2", py: "0", rounded: "full", bg: "#FCFAB5" }}
            >
            “Everhour helps me manage/plan my weekly activities a lot more
            effectively, since I know how much time I have to work on things
            each day, and can quickly update estimated times to reallocate tasks
            as needed.”
            </Highlight>
            <Text mt="2vh">— Dan S. (Source: Capterra)</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="50vh"
            bg="#FFFFFF"
            textAlign="left"
            lineHeight="4vh"
            border="1px solid green"
            p="8"
            color="#767676"
          >
            <Highlight
              query={["“We are using Everhour as a core ", "business software"]}
              styles={{ px: "2", py: "0", rounded: "full", bg: "#FCFAB5" }}
            >
            “We are using Everhour as a core business software, because our
            business is to sell our time. When you use such software, what you
            care about the most is speed, flexibility, ability to integrate with
            all major project management software. And Everhour is exactly that
            kind of software”
            </Highlight>
            <Text mt="2vh">— Doug H. (Source: G2Crowd)</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="76vh"
            bg="#FFFFFF"
            textAlign="left"
            lineHeight="4vh"
            border="1px solid green"
            p="8"
            color="#767676"
          >
             <Highlight
              query={["We’ve been using Everhour for the ", "past year or so, and it"]}
              styles={{ px: "2", py: "0", rounded: "full", bg: "#FCFAB5" }}
            >
            “We are a 15 people team working remotely from different cities of
            Latin America and Europe, and time tracking for each client,
            project, and task has always been a major issue. We’ve been using
            Everhour for the past year or so, and it has become an essential
            tool for our team. It does not only give us the ability to track how
            much time we have dedicated to a project but also to estimate how
            much time a particular task will need in order to be completed next
            time and by who. Easily create and save reports with just a few
            clicks”
            </Highlight>
            <Text mt="2vh">— Daniel Y. (Source: TrustRadius)</Text>
          </GridItem>
          <GridItem
            w="100%"
            h="46vh"
            bg="#FFFFFF"
            textAlign="left"
            lineHeight="4vh"
            border="1px solid green"
            p="8"
            color="#767676"
          >
             <Highlight
              query={["we can track our ", "tasks in real-time without having to"]}
              styles={{ px: "2", py: "0", rounded: "full", bg: "#FCFAB5" }}
            >
            “The most important gain from using Everhour is that we can track
            our tasks in real-time without having to leave the browser. The
            Chrome add-on helps us initiate the time for a specific task. If we
            are already on Asana, a simple click does the job.”
            </Highlight>
            <Text mt="2vh">— Dimitris R. (Source: Capterra)</Text>
          </GridItem>
        </Grid>
      </Box>
      <Button
        colorScheme="whatsapp"
        variant="outline"
        w="13vw"
        h="8vh"
        mt="18vh"
        mb="15vh"
      >
        Read More
      </Button>
    </>
  );
}
