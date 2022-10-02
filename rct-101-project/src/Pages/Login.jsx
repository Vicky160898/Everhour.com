import {
  Box,
  Text,
  Center,
  Divider,
  Heading,
  Input,
  Grid,
  GridItem,
  Stack,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../component/Navbar";
import Footer from "./Footer";
import axios from "axios";
export default function Login() {
  const [email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [isAuth,setAuth] = useState(false)

  function handleSubmit() {
    let user = { email, Password };
    axios
      .post("https://reqres.in/api/login", user)
      .then((res) => {
        console.log(res);
        setAuth(true)
      })
      .catch((err) => {
        console.log(err);
      });
    // url: "https://reqres.in/api/login",
  };
  if(isAuth){
    return <Navigate to="/" />
  }
  return (
    <>
      <Box>
        <Heading
          size="lg"
          fontSize={45}
          noOfLines={1}
          mt="10vh"
          fontWeight="semibold"
        >
          Log in to Everhour
        </Heading>
      </Box>

      <Grid
        templateColumns="repeat(5, 1fr)"
        gap={0}
        w="76vw"
        m="auto"
        mt="5vh"
        p="60px"
        bg="#FFFFFF"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <GridItem colSpan={2} h="60vh">
          <Stack>
            <Button
              leftIcon={<FcGoogle size={30} />}
              h="8vh"
              colorScheme="teal"
              variant="outline"
            >
              Log in with Google
            </Button>
            <Text>or</Text>
          </Stack>
          <Flex direction="column" gap="3vh" mt="2vh">
            <Input
              placeholder="Enter your email.."
              h="8vh"
              border="1px"
              borderColor="black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder="Password..."
              h="8vh"
              border="1px"
              borderColor="black"
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Center>
              <Button
                colorScheme="whatsapp"
                w="14vw"
                h="9vh"
                bg="#57BB71"
                onClick={handleSubmit}
              >
                Log in
              </Button>
            </Center>
          </Flex>
          <Center mt="3vh">
            <Flex directions="row" gap="2vw">
              <Link>Login with SSO</Link>
              <Link>More Login Options</Link>
            </Flex>
          </Center>
          <Center mt="3vh">Reset Password</Center>
        </GridItem>
        <Center height="50vh" mt="5vh">
          <Divider orientation="vertical" />
        </Center>
        <GridItem colStart={4} colEnd={6} h="60vh" textAlign="left">
          <Text color="#EF3E38">NEWS</Text>
          <Text fontWeight="semibold" fontSize={18} mt="2vh">
            New Timeline
          </Text>
          <Text>
            Sync assignments from your connected integrations automatically once
            you add a task assignee and a due date th...<Link>Learn More</Link>
          </Text>
          <Heading fontSize={18} noOfLines={1} fontWeight="semibold" mt="3vh">
            Updates to Tracking Time Without a Task
          </Heading>
          <Text>
            Now you can track time without a task and it will show up on team
            timesheets immediately.<Link>Learn more</Link>
          </Text>
          <Heading fontSize={18} noOfLines={1} fontWeight="semibold" mt="3vh">
            Integration with Todoist
          </Heading>
          <Text>
            Everhour now integrates with Todoist!<Link>Learn more</Link>
          </Text>
        </GridItem>
      </Grid>
      <Center mt="20vh">
        <Heading
          w="65vw"
          color="#333333"
          size="xl"
          noOfLines={2}
          fontWeight="semibold"
        >
          New to Everhour?
        </Heading>
      </Center>
      <Center mt="2vh">
        <Heading
          w="60vw"
          color="#767676"
          fontSize={24}
          noOfLines={2}
          fontWeight="none"
          lineHeight={9}
        >
          Try Everhour for free and see if it works for your business
        </Heading>
      </Center>
      <Center mt="5vh">
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
            Try it free
          </Button>
        </Stack>
      </Center>
      <Center mt="2vh">
        <Flex w="19.5vw">
          <FcGoogle size={23} />
          <Spacer />
          <Text color="#767676">Or sign up with Google Account</Text>
        </Flex>
      </Center>
      <Footer />
    </>
  );
}
