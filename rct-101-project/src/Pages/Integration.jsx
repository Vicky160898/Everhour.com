import {
  Center,
  Heading,
  Box,
  Grid,
  GridItem,
  Stack,
  Button,
  Input,
  Text,
  Flex,
  Spacer,
  Image,
} from "@chakra-ui/react";
import Footer from "./Footer";
import { FcGoogle } from "react-icons/fc";
import { ChevronRightIcon } from "@chakra-ui/icons";
import "./Motion.css"
export default function Integration() {
  const style={border:"1px solid red"}
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
      <Box w="82vw" m="auto" mt="9vh">
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://assets.materialup.com/uploads/e70f602b-912c-4c4c-b498-9038227eb063/0x0ss-85.jpg"
                  w="8vw"
                  mt="4vh"
                  alt="asana"
                />
              </Box>
              <Box  borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Asana
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn.iconscout.com/icon/free/png-256/basecamp-226536.png"
                  w="7vw"
                  mt="4vh"
                  alt="asana"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      BaseCamp
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/6125/6125001.png"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      BitBucket
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Git Repository Service
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn.theorg.com/7e38c149-9323-4382-a0ad-ce3d55f1f86f_thumb.png"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      ClickUp
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/jpeg;base64,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"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      FreshBooks
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Accounting
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,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"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      GitHub
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Git Repository Service
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      GitLab
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://seeklogo.com/images/I/insightly-logo-B6904D9534-seeklogo.com.png"
                  w="10vw"
                  mt="8vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Insightly
                    </Text>
                    <Text ml="1vw" color="#767676">
                      CRM
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Jira
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,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"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Monday
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAC6CAMAAAAu0KfDAAAAZlBMVEX///8AAADj4+OTk5NaWlqdnZ16enqsrKx3d3fx8fH6+vr29vbc3Nzn5+c9PT3s7Oy1tbW/v79RUVEoKCjV1dWBgYEuLi7Nzc1lZWU0NDQYGBjFxcUhISGIiIhHR0dfX18ODg5vb2+KmrwoAAAIrklEQVR4nO2d59aDKBCG7b33Hr3/m1zw281aGJWIhpzj+zvGJwR0eBkGQXj06NGjR48e/Zos2zZdVxrlmta3cXZl+q6T5GEQ6KrcpkPkZXFVVXE3yIHzbba1LMt3kjrErAi2UCIv7kWCojb/NiqWhVo3xy2bItSo80rUuCTcubLUvh0UyUY910E9QdVeXdnsYwIKb6BFzepKqNvmtS632uAdaNRDMqQLaG08xPI6RC2rqrKGOy0r3qkiZg2PhhjqtGiEacNQvDovbq7gnaqRWfT4oBhHWEN8Ilwn5exz0lIvZ+yrpokzwh+pn2p4t7gINy67SCkGTUtlPQjzBD30A3no5p8qTjS8/2JI22ReNBhpK6s6pnUc11z+xY4eza4pg49Dg9O9pS8jZdBUhFonieNIvmlvw0h6Obs+9T8jtz/k9QrctLnrIlLbRq8qmptK84ZvPgsM5F3IqolLz+s65TWgTlvnzoeNNL/t/D3cfjJaPSJu7HlohBma1uJOWye4bRkAT1TPG16hb3hrAd2NrGOvdf1LQ2upnd24VGm/wJ2Tq+59IZ0dzu9dUHZEaXZ1de8Uxp0/47OA6uo5+h2h6FSWOh+tVNHkAv3ki5lei9Ha1cf/9yV637J49FFISuf3lw/ff4mOwugrpgAbsvX5/Q9Hk2t0UawvRV3LmXca8eBjkoQuqjd3eKudj9bXoYYnoouGezXtQsEsIBO9I9EkGV2M7nZKFh2+MvZHK4AuNnSvh09l+66UY9NpNWkodxsPQkfBHMs362jgmFgS9sd0eVC8vZmwugMAo5+aeo32jSQ5SZLnY6um2hBllJN2YznDOowudhRhgW36vpSM5o2uqjI2m15R533ujmENH6OLzearzcRWbj0auakxFC8l6sqsqVj6IfrH6GiwtNPHpIU6KmrUdlA6z/PKMosv9pmqE+hYnYJ08q//VFvvlwPo39RWPPWgX6UHnbn6vmmyskPC1qSBnck6NLLpR/hBb0psRRWGlr5tyURy/dmCZD11hr6JHnvR2KBqEARhWOdJ4ki+vWnzTU3QO9GrpuyKfz0zBwm1qW/u+adzOZPY/RL0vu8rpMbrlEFrZb3+a08KREjWxJ1hgV7FuJtG0asoCqP9c6Sli+aBCjv0Qlb/ViWkldHPOXpwszPDDp3agT0tVug3O6hYrNCL30VnOrs+Jlbo8m3Ebz3oDzqVHvTr0c3VoiGv6JZluaObI2tFVyLF8dKZ5Q9dUhVyItbS47oZfbRHnaSGLdYwg25xP7pljwbpnz2aGsNL6co+gvyqBLxDvHRlL0V31RSRKmNK5sIlT4EbwQlDrzuH6Wb2D3k1IinJn+7FYTXXuhC93b6CGK/VhAGaFWlIYrsOPQca8D8Ru4yEnoXRwi6GhtF16Ht5SzFxyXhMs87Dac4aNP+6DN0f9i55bbjitvZFdFfZu2RrOmsaX0Q31QI/FTfT1OE1z6+iI/kSTmCP4Is80Fz6Nvqf0k+u4gNd27gKTLrkH11UAIvvB9Ahrl9Az8hd5hfQRYUYy/wEOpnsN9BFkrn9I+ikLvMj6D2B7UfQRS/5WXRCChR/6AoQR67SiPhDD4BYrF/6Mhyim0CzK9yj60IIXL/oMjyi28Co9eZdhkd0wSFuExIXFhGX6IJOznDsZx40n+g2YBWU0/vziS44wFdM81s5RQd9sYkLzSs6eUOfKFb/xwPcotdALnL6Dn+5RbeALlO9nzLcoi/3wL713uzEL7oQALHMf12GY3Qwiq/5R3eBkVra3KMLAfBFKf/oFrDMWNXcowsSsDci8rlHX25K+/+rLO7RoVIWTc09ulADXaazuUcH12pS/tEFKIHEsblHr4FvU9xvLvkeQodSIPqWf3TIH6hi7tHBeGAiXtGtfSOYV3TBicHv5B0djAd+AF3Ya3aO0V3wS7lH36vLxTO6v13HjWd0Idzs7lyjCwb4vdyj20A8wAJ97ylwEh0MIRmgL0uWsUbf6jIn0YWdLNfT6A6Ytn4afSe3+DT6Rgh5Fh1aRWGGboIh5Fl0ayPTkgk6mLp+Gh1cZmaGDsYDp9F33tYM0CF/4DS6EG6WeDmGrm6WVQfee+fRrc2HzNFUnpccJmAxSPIS03l0wd16W1OkI1dRq4bEPeRkF5IBupDTo5u1TP7B5AJ5CenDLNC3tl8Q89f1woPCWWA7GGlAMUG3Bhr0rbEBbsVeTbIbsAgfFfqyiugm+tZMf4Dvpc/+J0+DSy/SoQs5FCWt92oMIHipblWMqt8XZoa+zoD8GB185a3QCQvSjfcytFStne2N+34SpBr6XO5sl96gRReAlyoJvSk7pWhxUZ1E8nHNvcNFqa0jn6NGB17X/O6tnog8KfgJdHJqwhfQI3p0YjbL/ej2wYJCM5HWyO9Hn4ZUx2sG++tQ4370ab4kRbnjdSB2O/osyqSp1Lx6M92N7s6MGxr0VVbxreh+3c6DKar62O5iqGpXVOWxRpljRdlAbbWhAI6Foivtvdj13Z1GxwV6fV9yECc+cUtXcfFTb1l/gCzKquQLu4q2Wi8uJuyP7Vnjk8FwRVkNHwVEW6V3FG2JtPlUYrllgQCLT4PCu9VxCYpWMwz0/+PCDuSTwWjUU5IL5jysHQg/3ZSSHPVSGbdn1I2lb3GJXtZnFkW06CuLQNHzJKkDXEy4uOTAKkgfnNoApRHdrPiTR4R683FVZH1USH3DIrhPe1XMIfZvc3/Y5lhfLeDbZ96Z2npQOvdVqqqs7HCB0cFo1XNHHWwbwCzUj8ee4Uq4Kq4wikvhOq7J4mAmc78kCbVGx6aV1SDPx5K94/lcFwR45t7C5K76pvSiIh2rtjr4DDH7kBHDQHtLZBPEOMtKr4ui6DXgms1BiE+5uv0k0IlsFbJRUXtGYxHstm3HWrioo0p8HXbr6Gk3RtZ9k3VRof2BjmMK91TWh52xle1KY3FpaSwvbV8xqB49evTo0aNHd+kfvF6gUcx3JYUAAAAASUVORK5CYII="
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Notion
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,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"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Pivotal Tracker
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,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"
                  w="6vw"
                  mt="5vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Quick Books
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Accounting
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://a.slack-edge.com/80588/img/services/api_200.png"
                  w="6vw"
                  mt="5vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Slack
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Team Communication
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Teamwork-icon.jpg/1200px-Teamwork-icon.jpg"
                  w="6vw"
                  mt="5vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      TeamWork Projects
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,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"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Todoist
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8xeboNbbX4+/0ud7lGhsEmdbji7PUgcrevxuAbcLbI2uskdLjx9fo2fLzN3Oxml8i/0+fr8viZudmMsNWTs9a90udek8e0y+PW4/Dd6PO2zOOowd5+p9E+gL11oc1VjsTvgvkQAAADx0lEQVR4nO3d63aaQBRAYS8jGQiMeEGNsbTv/5TV2qxcqnAOIp5J9/6fWXwLBDIoMxoREREREREREREZbGqh+9CKRVWGbGIjH8pqU/TKey19lidjOyW592XaF7JYBW9J91biQ9WLcTfOH225Wu7Sm33LbfZoRlMu2y5vA86DxePzY0mY3wJc5O7RgtZcvrkBOLEPPBInnYnzCPbgKec7HqjLEAfwSAzdTjdb6yeZ95JtF2Bq+jLxpazDdbFwsRyjp5zT392s7N7JXCpfqXdhePQ2Kwvanbjzj95kZX6nFJbxnEjPJaUOWMS2C487UXeYbmK6VJzLFiphFdeZ9FReqYTRfQzVH8TYrhWnapUwvhPN8VSjEk4evbkdmmiA0yiFmqlihCZDiNB+CBHaDyHCi7ncNyd4cJy0jiGc1ryD0PnZ+pA2dvhR+6YNdL7+0TbEetY4xB2FyUw0b5A27AOXi+aqFzPJP+S9C91MOPXz0iB8kQ1RSIi9CzPx857FtWkt+eTRUjAz1rdQM41+ZdZHM7MieMjQtzB7kg+3uTwp4hXPbp/ad2LfwqAYb395B+R7xRa1z431LHQzxXhPV45SxWEwnbVeMRAiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBFGLlR9g7Zu2yKLQq94C4Lgq+wGhclP+RCH9t/PGxSOc+HPLY4bJPjZjEWhq6W/2ZC8lcuicJyEZ8nf77eSF5GYFB7PNr8Oi+fm0lL2clGjwtMP/LLGvPTlqVaF/YUQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIcIHCce1Yrx9lEKvGG8+yFILvQsVX/dZD7LiSd9CJ18wYznM8l+9v7/Ui9d1GWhJl/7fsuvXorGKcqBVee7wpuS8TvctoxYvlRtqUZ67vO3at67ynA23DiZvLEdoP4QI7YcQof0QIrQfQoT2Q4jQfirh919L9j9YD/j7r+n8/dfl/v5rq19dSMxu8iXO/lTEd6rxwoXu3orug6j8GI5Gu9h2ot8phUVs14ugPEhFy/FZSrNY4d+mwzy47SnnVDel59KYLhiZaD3Tr0ne1GCkZNsFOFqGWI5TF8Rron5uPtzz25ty+bwb8HjvNomB6Ca6+7XPxAj2otN8d+nf5sH66SYJnQ/Rc8ut6YuGy7YdTzIf2o3t3qLmrtN18GvFKmQWj9XEh1WHO5nLxtfSZ4Kl7ocryTNf7tQ3243IRVXWvu0bUAPl67La9Mp7b2qh+9CIiIiIiIiIiIhu6zfd65A3jp2YwQAAAABJRU5ErkJggg=="
                  w="7vw"
                  mt="5vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Trello
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Project Management
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/en/archive/9/9f/20171204173437%21Xero_software_logo.svg"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Xero
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Accounting
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://wpforms.com/wp-content/uploads/2016/08/icon-provider-zapier.png"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Zapier
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Integrations Software
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Center mt="24vh">
        <Heading
          w="65vw"
          color="#333333"
          as="h1"
          fontSize={40}
          noOfLines={1}
          fontWeight="semibold"
        >
          Website integrations
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
          Use our browser extension to track time from inside interface of
          popular websites
        </Heading>
      </Center>
      <Box w="84vw" m="auto" mt="9vh">
        <Grid templateColumns="repeat(4, 1fr)" gap={8}>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://yt3.ggpht.com/tk47_rvk-fjQuEd9VHkEXPaiE-uHt3i514xS0aWNpTvac7YILyk1zFgEGB_TAJSZLvgsbB5VTA=s900-c-k-c0x00ffffff-no-rj"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      FreshDesk
                    </Text>
                    <Text ml="1vw" color="#767676">
                      HelpDesk
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/2560px-Gmail_icon_%282020%29.svg.png"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Gmail
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Google WorkSpace
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn.icon-icons.com/icons2/2631/PNG/512/google_calendar_new_logo_icon_159141.png"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Google Calender
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Google WorkSpace
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn.icon-icons.com/icons2/2642/PNG/512/google_drive_logo_icon_159334.png"
                  w="9vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Google Drive
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Google WorkSpace
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://style.helpscout.com/images/logo/help-scout-logo-square.svg"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Help Scout
                    </Text>
                    <Text ml="1vw" color="#767676">
                      Help Desk
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/168_Hubspot_logo_logos-512.png"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      HubSpot
                    </Text>
                    <Text ml="1vw" color="#767676">
                      CRM
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://cdn.worldvectorlogo.com/logos/intercom-2.svg"
                  w="7vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      InterCom
                    </Text>
                    <Text ml="1vw" color="#767676">
                      HelpDesk
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://elevate.so/images/pipedrive-icon.svg"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      PipeDrive
                    </Text>
                    <Text ml="1vw" color="#767676">
                      CRM
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="https://www.svgrepo.com/show/303235/salesforce-2-logo.svg"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      SalesForce
                    </Text>
                    <Text ml="1vw" color="#767676">
                      CRM
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            w="100%"
            h="37vh"
            bg="#FFFFFF"
            border="1px #E8E8E8 solid"
            className="motion"
          >
            <Flex direction="column">
              <Box h="24vh" m="auto">
                <Image
                  src="data:image/png;base64,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"
                  w="8vw"
                  mt="4vh"
                  alt="bitbucket"
                />
              </Box>
              <Box borderTop="1px #E8E8E8 solid" h="13vh" textAlign="left">
                <Flex>
                  <Box>
                    <Text fontWeight="bold" ml="1vw" mt="2vh">
                      Zendesk
                    </Text>
                    <Text ml="1vw" color="#767676">
                      HelpDesk
                    </Text>
                  </Box>
                  <Spacer />
                  <ChevronRightIcon h={6} w={6} mt={6} mr={2} />
                </Flex>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <Center mt="20vh">
        <Heading
          w="65vw"
          color="#333333"
          size="xl"
          noOfLines={2}
          fontWeight="semibold"
        >
          Make your team more productive with Everhour
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
