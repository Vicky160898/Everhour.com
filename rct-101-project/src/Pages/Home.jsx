import {
  Center,
  Stack,
  Input,
  Button,
  Flex,
  Heading,
  Text,
  Spacer,
  Box,
  Grid,
  GridItem,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Image,
} from "@chakra-ui/react";
import { BsFillStarFill } from "react-icons/bs";
import { BsStarHalf } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { GiTimeBomb } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { MdTask } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { SiVisualstudiocode } from "react-icons/si";
import { FaFileInvoice } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MarkGithubIcon } from "@primer/octicons-react";
import Bottom from "./Bottom";
import Footer from "./Footer";
import { useState } from "react";
export default function Home() {
  const [pic, setPic] = useState(
    "https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
  );
  return (
    <>
      <Center mt="10vh">
        <Flex direction="row" gap={1} alignItems="center">
          <BsFillStarFill color="#EFBC45" size={21} />
          <BsFillStarFill color="#EFBC45" size={21} />
          <BsFillStarFill color="#EFBC45" size={21} />
          <BsFillStarFill color="#EFBC45" size={21} />
          <BsStarHalf color="#EFBC45" size={21} />
          <Text fontSize="1.3rem" ml="1vw">
            4.5 (500+ reviews)
          </Text>
        </Flex>
      </Center>
      <Center mt="4vh">
        <Heading
          w="65vw"
          color="#333333"
          as="h1"
          size="2xl"
          noOfLines={2}
          fontWeight="semibold"
        >
          Powerful time tracking software with hassle-free integrations
        </Heading>
      </Center>
      <Center mt="4vh">
        <Heading
          w="60vw"
          color="#767676"
          fontSize={24}
          noOfLines={2}
          fontWeight="none"
          lineHeight={9}
        >
          Accurate time tracker for budgeting, client invoicing and painless
          payroll. Works with the apps your team already use
        </Heading>
      </Center>
      <Center mt="8vh">
        <Stack direction="row" spacing={5} align="center">
          <Input
            colorScheme="teal"
            variant="outline"
            placeholder=" Work Email..."
            w="30vw"
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
      </Center>
      <Center mt="2vh">
        <Flex w="19.5vw">
          <FcGoogle size={23} />
          <Spacer />
          <Text color="#767676">Or sign up with Google Account</Text>
        </Flex>
      </Center>
      <Box mt="20vh">
        <Grid templateColumns="repeat(2,25vw 55vw)" gap={20} w="82vw" m="auto">
          <GridItem colSpan={1}>
            <Accordion>
              <AccordionItem border="none">
                <h2>
                  <AccordionButton>
                    <GiTimeBomb size={30} color="#B6DDF4" />
                    <Box flex="1" textAlign="left">
                      <Text
                        ml="1vw"
                        fontWeight="semibold"
                        fontSize={22}
                        onClick={() =>
                          setPic(
                            "https://blog-cdn.everhour.com/assets/images/new-design/screens/team-timesheet-v2.webp"
                          )
                        }
                      >
                        Time tracking
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="#F0FAF5">
                  Easy-to-use time tracker. Know the time spent on tasks, hours
                  of work, and breaks for each employee
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none" mt="3vh">
                <h2>
                  <AccordionButton>
                    <RiMoneyDollarBoxFill size={30} color="#F9E6BB" />
                    <Box flex="1" textAlign="left">
                      <Text
                        ml="1vw"
                        fontWeight="semibold"
                        fontSize={22}
                        onClick={() =>
                          setPic(
                            "https://blog-cdn.everhour.com/assets/images/new-design/screens/new-tour/invoices-preview-v3.webp"
                          )
                        }
                      >
                        Billing budgeting
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="#F0FAF5">
                  Simple and flexible projects billing. Set budgets to track
                  progress in real time. Receive timely notifications
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border="none" mt="3vh">
                <h2>
                  <AccordionButton>
                    <MdTask size={30} color="#F9E6BB" />
                    <Box flex="1" textAlign="left">
                      <Text
                        ml="1vw"
                        fontWeight="semibold"
                        fontSize={22}
                        onClick={() =>
                          setPic(
                            "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/monday-primary.webp"
                          )
                        }
                      >
                        Task management
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="#F0FAF5">
                  Create tasks, organize them in sections, add time estimates to
                  keep everyone in the loop and on track
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none" mt="3vh">
                <h2>
                  <AccordionButton>
                    <SiVisualstudiocode size={30} color="#B6DDF4" />
                    <Box flex="1" textAlign="left">
                      <Text
                        ml="1vw"
                        fontWeight="semibold"
                        fontSize={22}
                        onClick={() =>
                          setPic(
                            "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.webp"
                          )
                        }
                      >
                        Visual planning
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="#F0FAF5">
                  View your team's schedule, know how busy or available someone
                  is, compare plan to the actual time spent
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none" mt="3vh">
                <h2>
                  <AccordionButton>
                    <FcMoneyTransfer size={30} color="#B6DDF4" />
                    <Box flex="1" textAlign="left">
                      <Text
                        ml="1vw"
                        fontWeight="semibold"
                        fontSize={22}
                        onClick={() =>
                          setPic(
                            "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp"
                          )
                        }
                      >
                        Expenses
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="#F0FAF5">
                  Track work-related expenses. Reimburse employees, use costs in
                  project budgets, add to client invoices
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none" mt="3vh">
                <h2>
                  <AccordionButton>
                    <FaFileInvoice size={30} color="#B6DDF4" />
                    <Box flex="1" textAlign="left">
                      <Text
                        ml="1vw"
                        fontWeight="semibold"
                        fontSize={22}
                        onClick={() =>
                          setPic(
                            "https://blog-cdn.everhour.com/assets/images/new-design/screens/projects-dashboard-v2.webp"
                          )
                        }
                      >
                        Invoicing
                      </Text>
                    </Box>
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4} bg="#F0FAF5">
                  Easily create an invoice based on tracked time and expenses.
                  Connect with QuickBooks, Xero or FreshBooks
                </AccordionPanel>
              </AccordionItem>
              <Box textAlign="left" ml="1vw" mt="3vh" color="blue">
                <Link>
                  <Text as="u">All Everhour features --</Text>
                </Link>
              </Box>
            </Accordion>
          </GridItem>
          <GridItem colSpan={1}>
            <Image src={pic} w="60vw" alt="time" />
          </GridItem>
        </Grid>
      </Box>
      <Center mt="22vh">
        <Heading
          w="65vw"
          color="#333333"
          as="h1"
          size="2xl"
          noOfLines={2}
          fontWeight="semibold"
        >
          Track time and watch progress inside two dozen popular apps
        </Heading>
      </Center>
      <Center w="80vw" m="auto" mt="15vh">
        <Flex direction="row" gap="3vw">
          <Flex direction="row" gap="0.3vw">
            <Image
              src="https://assets.materialup.com/uploads/e70f602b-912c-4c4c-b498-9038227eb063/0x0ss-85.jpg"
              w="3vw"
              alt="notion"
            />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Asana
            </Text>
          </Flex>
          <Flex direction="row" gap="0.3vw">
            <Image
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8xeboNbbX4+/0ud7lGhsEmdbji7PUgcrevxuAbcLbI2uskdLjx9fo2fLzN3Oxml8i/0+fr8viZudmMsNWTs9a90udek8e0y+PW4/Dd6PO2zOOowd5+p9E+gL11oc1VjsTvgvkQAAADx0lEQVR4nO3d63aaQBRAYS8jGQiMeEGNsbTv/5TV2qxcqnAOIp5J9/6fWXwLBDIoMxoREREREREREREZbGqh+9CKRVWGbGIjH8pqU/TKey19lidjOyW592XaF7JYBW9J91biQ9WLcTfOH225Wu7Sm33LbfZoRlMu2y5vA86DxePzY0mY3wJc5O7RgtZcvrkBOLEPPBInnYnzCPbgKec7HqjLEAfwSAzdTjdb6yeZ95JtF2Bq+jLxpazDdbFwsRyjp5zT392s7N7JXCpfqXdhePQ2Kwvanbjzj95kZX6nFJbxnEjPJaUOWMS2C487UXeYbmK6VJzLFiphFdeZ9FReqYTRfQzVH8TYrhWnapUwvhPN8VSjEk4evbkdmmiA0yiFmqlihCZDiNB+CBHaDyHCi7ncNyd4cJy0jiGc1ryD0PnZ+pA2dvhR+6YNdL7+0TbEetY4xB2FyUw0b5A27AOXi+aqFzPJP+S9C91MOPXz0iB8kQ1RSIi9CzPx857FtWkt+eTRUjAz1rdQM41+ZdZHM7MieMjQtzB7kg+3uTwp4hXPbp/ad2LfwqAYb395B+R7xRa1z431LHQzxXhPV45SxWEwnbVeMRAiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBFGLlR9g7Zu2yKLQq94C4Lgq+wGhclP+RCH9t/PGxSOc+HPLY4bJPjZjEWhq6W/2ZC8lcuicJyEZ8nf77eSF5GYFB7PNr8Oi+fm0lL2clGjwtMP/LLGvPTlqVaF/YUQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIcIHCce1Yrx9lEKvGG8+yFILvQsVX/dZD7LiSd9CJ18wYznM8l+9v7/Ui9d1GWhJl/7fsuvXorGKcqBVee7wpuS8TvctoxYvlRtqUZ67vO3at67ynA23DiZvLEdoP4QI7YcQof0QIrQfQoT2Q4jQfirh919L9j9YD/j7r+n8/dfl/v5rq19dSMxu8iXO/lTEd6rxwoXu3orug6j8GI5Gu9h2ot8phUVs14ugPEhFy/FZSrNY4d+mwzy47SnnVDel59KYLhiZaD3Tr0ne1GCkZNsFOFqGWI5TF8Rron5uPtzz25ty+bwb8HjvNomB6Ca6+7XPxAj2otN8d+nf5sH66SYJnQ/Rc8ut6YuGy7YdTzIf2o3t3qLmrtN18GvFKmQWj9XEh1WHO5nLxtfSZ4Kl7ocryTNf7tQ3243IRVXWvu0bUAPl67La9Mp7b2qh+9CIiIiIiIiIiIhu6zfd65A3jp2YwQAAAABJRU5ErkJggg=="
              w="3vw"
              alt="notion"
            />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Trello
            </Text>
          </Flex>
          <Flex direction="row" gap="0.3vw">
            <Image
              src="https://cdn.iconscout.com/icon/free/png-256/basecamp-226536.png"
              w="3vw"
              alt="notion"
            />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Basecamp
            </Text>
          </Flex>
          <Flex direction="row" gap="0.3vw">
            <Image
              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
              w="3vw"
              alt="notion"
            />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Jira
            </Text>
          </Flex>
          <Flex direction="row" gap="0.3vw">
            <MarkGithubIcon size={30} />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Github
            </Text>
          </Flex>
          <Flex direction="row" gap="0.3vw">
            <Image
              src="https://cdn.theorg.com/7e38c149-9323-4382-a0ad-ce3d55f1f86f_thumb.png"
              w="3vw"
              alt="notion"
            />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Clickup
            </Text>
          </Flex>
          <Flex direction="row" gap="0.3vw">
            <Image
              src="data:image/png;base64,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"
              w="3vw"
              alt="notion"
            />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Monday
            </Text>
          </Flex>
          <Flex direction="row" gap="0.3vw">
            <Image
              src="data:image/png;base64,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"
              w="3vw"
              alt="notion"
            />
            <Text fontSize="1.5rem" fontWeight="semibold">
              Notion
            </Text>
          </Flex>
        </Flex>
      </Center>
      <Bottom />
      <Footer />
    </>
  );
}
