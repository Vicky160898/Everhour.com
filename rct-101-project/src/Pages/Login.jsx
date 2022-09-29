import {
  Box,
  Text,
  Container,
  Center,
  Divider,
  Heading,
  Input,
  Grid,
  GridItem,
  Stack,
  Button,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <Box>
        <Heading size="lg" fontSize={55} noOfLines={1} mt="10vh">
          Log in to Everhour
        </Heading>
      </Box>

      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={0}
        w="76vw"
        m="auto"
        mt="5vh"
        border="1px"
        borderColor="gray.200"
        p="30px"
        bg="#FFFFFF"
      >
        <GridItem colSpan={2} h="60vh">
          <Stack>
            <Button
              leftIcon={<FcGoogle size={30} />}
              h="8vh"
              colorScheme="teal"
              variant="outline"
            >
              <Spacer />
              Log in with Google
            </Button>
            <Text>or</Text>
          </Stack>
          <Input placeholder="email" />
          <Input placeholder="email" />
          <Button colorScheme="whatsapp" w="15vw" h="9vh">
            Login
          </Button>
        </GridItem>
        <Center height="50vh" mt="5vh">
          <Divider orientation="vertical" />
        </Center>
        <GridItem colStart={4} colEnd={6} h="60vh">
          <Text color="#EF3E38">NEWS</Text>
          <Text>New Timeline</Text>
          <Text>
            Sync assignments from your connected integrations automatically once
            you add a task assignee and a due date th...<Link>Learn More</Link>
          </Text>
          <Heading as="h4" size="md" noOfLines={1}>
            Updates to Tracking Time Without a Task
          </Heading>
          <Text>
            Now you can track time without a task and it will show up on team
            timesheets immediately.<Link>Learn more</Link>
          </Text>
          <Heading as="h4" size="md" noOfLines={1}>
            Integration with Todoist
          </Heading>
          <Text>
            Everhour now integrates with Todoist!<Link>Learn more</Link>
          </Text>
        </GridItem>
      </Grid>
      <Box>
        <Heading size="xl" as="h3" noOfLines={1} mt="10vh">
          New to Everhour?
        </Heading>
      </Box>
      <Text>Try Everhour for free and see if it works for your business</Text>
      <Center>
        <Stack direction="row" spacing={5} align="center">
          <Input
            colorScheme="teal"
            variant="outline"
            placeholder=" Work Email..."
            w="20vw"
          />

          <Button colorScheme="whatsapp" variant="solid">
            Try it free
          </Button>
        </Stack>
      </Center>
      <Center>
      <FcGoogle size={30}/>
      <span>Or signup with Google Account</span>
            </Center>
    </>
  );
}
