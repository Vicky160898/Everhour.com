import {
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Box,
  Stack,
  Spacer,
  Button
} from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import { GrYoutube } from "react-icons/gr";
export default function Footer() {
  return (
    <>
      <Box bg="#151616" w="100%" h="100vh" p="60px" mt="20vh">
        <Grid w="100%" templateColumns="repeat(13, 1fr)" gap={4} m="auto">
          <GridItem colSpan={1}>
            <Image
              src="https://i.pinimg.com/550x/5f/35/da/5f35dacf95fb235f068545c959898333.jpg"
              width="5vw"
              alt="icon"
            />
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection="column" gap="5" textAlign="left">
              <Text color="#A1A2A2">Company</Text>
              <Text color="white">About us</Text>
              <Text color="white">Contact</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex flexDirection="column" gap="5" float="left" textAlign="left">
              <Text color="#A1A2A2">Product</Text>
              <Text color="white">Tour</Text>
              <Text color="white">Pricing</Text>
              <Text color="white">Request a Demo</Text>
              <Text color="white">Customers</Text>
              <Text color="white">API & Docs</Text>
              <Text color="white">Status</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={3}>
            <Flex flexDirection="column" gap="5" textAlign="left">
              <Text color="#A1A2A2">Solutions</Text>
              <Text color="white">Time tracking</Text>
              <Text color="white">Project budgeting</Text>
              <Text color="white">Visual planning</Text>
              <Text color="white">Expenses</Text>
              <Text color="white">Reporting</Text>
              <Text color="white">Invoicing</Text>
              <Text color="white">Time card calculator</Text>
              <Text color="white">Weekly timesheet template</Text>
              <Text color="white">Invoice generator</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={1}>
            <Flex flexDirection="column" gap="5" textAlign="left">
              <Text color="#A1A2A2">Integrations</Text>
              <Text color="white">Asana</Text>
              <Text color="white">Basecamp</Text>
              <Text color="white">Trello</Text>
              <Text color="white">Jira</Text>
              <Text color="white">Github</Text>
              <Text color="white">ClickUp</Text>
              <Text color="white">Monday</Text>
              <Text color="white">Notion</Text>
              <Text color="white">Todoist</Text>
              <Text color="white">GitLab</Text>
              <Text color="white">All</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={2}>
            <Flex flexDirection="column" gap="5" textAlign="left">
              <Text color="#A1A2A2">Learn</Text>
              <Text color="white">Resources</Text>
              <Text color="white">Help center</Text>
              <Text color="white">Blog</Text>
              <Text color="white">Product updates</Text>
              <Text color="white">Timesheet app</Text>
              <Text color="white">Time clock app</Text>
              <Text color="white">Attendance tracker</Text>
              <Text color="white">Work hours tracker</Text>
              <Text color="white">Employee time tracking</Text>
            </Flex>
          </GridItem>
          <GridItem colSpan={3}>
            <Flex flexDirection="column" gap="5" textAlign="left">
              <Text color="#A1A2A2">Download</Text>
              <Text color="white">Browser extension</Text>
              <Text color="white">Chrome time tracking extension</Text>
              <Text color="white">Time tracking with screenshots</Text>
              <Text color="white">IPhone app<Button bg="#D0D0D0" color="black" size="sm" w="4vw" ml="8px">Beta</Button></Text>
            </Flex>
          </GridItem>
        </Grid>
        <Stack direction="row" mt="40px">
          <Flex gap={2} float="right">
            <Text color="white">Terms |</Text>
            <Text color="white">Privacy |</Text>
            <Text color="white">Cookies |</Text>
            <Text color="white">Sitemap</Text>
          </Flex>
          <Spacer />
          <Flex gap={2} float="right">
            <FaFacebookSquare color="white" size={25} />
            <AiFillTwitterCircle color="white" size={25} />
            <RiLinkedinFill color="white" size={25} />
            <GrYoutube color="white" size={25} />
          </Flex>
        </Stack>
      </Box>
    </>
  );
}
