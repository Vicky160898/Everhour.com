import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  SimpleGrid,
} from "@chakra-ui/react";
import { MarkGithubIcon } from "@primer/octicons-react";
import {
  Flex,
  Spacer,
  Button,
  ButtonGroup,
  Heading,
  Box,
  Image,
} from "@chakra-ui/react";
import { useBoolean } from "@chakra-ui/react";
import { Link,Navigate } from "react-router-dom";
import { useState } from "react";
export default function Navbar() {
  const [flag, setFlag] = useBoolean();
  const [state, setState] = useState(false);
  const [log, setLog] = useState(false);
const handleChange =() => {
  setState(!state)
}
  const handleClick = () => {
    setLog(!log)
    
  }
  if(state){
    return <Navigate to="/signup" />
  }
  if(log){
    return <Navigate to="/login" />
  }
  return (
    <>
    {/* <Box position="fixed" mt="0px" p="0px"> */}
      <Box bg="#FFFFFF" pl="2vw" pr="5vw" p="2vh" >
        <Flex minWidth="max-content" alignItems="center" gap="2">
          <Box p="2">
            <Flex minWidth="max-content" alignItems="center" gap="10">
              <Link to="/"> 
              <Image
                src="https://elearningindustry.com/wp-content/uploads/2021/03/37af1f218319cf521d01ac44ad330a6f.png"
                w="10vw"
                alt="icon_pic"
              />
              </Link>
              <Box>
                <div onMouseEnter={setFlag.on} onMouseLeave={setFlag.off}>
                  {flag ? (
                    <Menu>
                      <MenuButton >
                        <Heading size="s">
                          Integrations
                          <Button bg="#57BB71" color="black" w="1vw" h="3vh" ml="8px">
                            New
                          </Button>
                        </Heading>
                      </MenuButton>
                      <MenuList pl="10px" pr="10px" pb="10px">
                        <SimpleGrid columns={[6, null, 2]} spacing="15px">
                          <MenuItem minH="48px" color="#767676">
                            <MarkGithubIcon size={20} />
                            <Spacer />
                            <span  >Github</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="data:image/png;base64,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"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Notion</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="data:image/png;base64,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"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Todoist</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/144_Gitlab_logo_logos-512.png"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>GitLab</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="data:image/png;base64,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"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Monday</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/en/archive/9/9f/20171204173437%21Xero_software_logo.svg"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Xero</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="https://cdn.theorg.com/7e38c149-9323-4382-a0ad-ce3d55f1f86f_thumb.png"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>ClickUp</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="https://cdn.icon-icons.com/icons2/2699/PNG/512/atlassian_jira_logo_icon_170511.png"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Jira</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="https://cdn.iconscout.com/icon/free/png-256/basecamp-226536.png"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>BaseCamp</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="https://assets.materialup.com/uploads/e70f602b-912c-4c4c-b498-9038227eb063/0x0ss-85.jpg"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Asana</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8xeboNbbX4+/0ud7lGhsEmdbji7PUgcrevxuAbcLbI2uskdLjx9fo2fLzN3Oxml8i/0+fr8viZudmMsNWTs9a90udek8e0y+PW4/Dd6PO2zOOowd5+p9E+gL11oc1VjsTvgvkQAAADx0lEQVR4nO3d63aaQBRAYS8jGQiMeEGNsbTv/5TV2qxcqnAOIp5J9/6fWXwLBDIoMxoREREREREREREZbGqh+9CKRVWGbGIjH8pqU/TKey19lidjOyW592XaF7JYBW9J91biQ9WLcTfOH225Wu7Sm33LbfZoRlMu2y5vA86DxePzY0mY3wJc5O7RgtZcvrkBOLEPPBInnYnzCPbgKec7HqjLEAfwSAzdTjdb6yeZ95JtF2Bq+jLxpazDdbFwsRyjp5zT392s7N7JXCpfqXdhePQ2Kwvanbjzj95kZX6nFJbxnEjPJaUOWMS2C487UXeYbmK6VJzLFiphFdeZ9FReqYTRfQzVH8TYrhWnapUwvhPN8VSjEk4evbkdmmiA0yiFmqlihCZDiNB+CBHaDyHCi7ncNyd4cJy0jiGc1ryD0PnZ+pA2dvhR+6YNdL7+0TbEetY4xB2FyUw0b5A27AOXi+aqFzPJP+S9C91MOPXz0iB8kQ1RSIi9CzPx857FtWkt+eTRUjAz1rdQM41+ZdZHM7MieMjQtzB7kg+3uTwp4hXPbp/ad2LfwqAYb395B+R7xRa1z431LHQzxXhPV45SxWEwnbVeMRAiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIUKECBFGLlR9g7Zu2yKLQq94C4Lgq+wGhclP+RCH9t/PGxSOc+HPLY4bJPjZjEWhq6W/2ZC8lcuicJyEZ8nf77eSF5GYFB7PNr8Oi+fm0lL2clGjwtMP/LLGvPTlqVaF/YUQIUKECBEiRIgQIUKECBEiRIgQIUKECBEiRIgQIcIHCce1Yrx9lEKvGG8+yFILvQsVX/dZD7LiSd9CJ18wYznM8l+9v7/Ui9d1GWhJl/7fsuvXorGKcqBVee7wpuS8TvctoxYvlRtqUZ67vO3at67ynA23DiZvLEdoP4QI7YcQof0QIrQfQoT2Q4jQfirh919L9j9YD/j7r+n8/dfl/v5rq19dSMxu8iXO/lTEd6rxwoXu3orug6j8GI5Gu9h2ot8phUVs14ugPEhFy/FZSrNY4d+mwzy47SnnVDel59KYLhiZaD3Tr0ne1GCkZNsFOFqGWI5TF8Rron5uPtzz25ty+bwb8HjvNomB6Ca6+7XPxAj2otN8d+nf5sH66SYJnQ/Rc8ut6YuGy7YdTzIf2o3t3qLmrtN18GvFKmQWj9XEh1WHO5nLxtfSZ4Kl7ocryTNf7tQ3243IRVXWvu0bUAPl67La9Mp7b2qh+9CIiIiIiIiIiIhu6zfd65A3jp2YwQAAAABJRU5ErkJggg=="
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Trello</span>
                          </MenuItem>
                          <MenuItem minH="40px" color="#767676">
                            <Image
                              src="data:image/png;base64,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"
                              w="2vw"
                              alt="notion"
                            />
                            <Spacer />
                            <span>Quick Books</span>
                          </MenuItem>
                        </SimpleGrid>

                        <Divider orientation="horizontal" mb="10px" />
                        <Spacer />
                        <Link to="/integration">
                          See all Integrations
                        </Link>
                      </MenuList>
                    </Menu>
                  ) : (
                    <Heading size="s" color="#767676" fontWeight="none">
                      Integrations
                      <Button bg="#57BB71" color="white" w="1vw" h="3vh" ml="8px">
                        New
                      </Button>
                    </Heading>
                  )}
                </div>
              </Box>
              <Heading size="s" color="#767676" fontWeight="none">Pricing</Heading>
              <Heading size="s" color="#767676" fontWeight="none">Demo</Heading>
            </Flex>
          </Box>
          <Spacer />
          <ButtonGroup gap="2">
            <Button color="#767676" fontWeight="none" bg="none" colorScheme="none" onClick={handleClick}>Log in</Button>
            <Button colorScheme="whatsapp" variant="solid" bg="#57BB71" color="white" onClick={handleChange}>
              Sign Up
            </Button>
          </ButtonGroup>
        </Flex>
      </Box>
      {/* </Box> */}
    </>
  );
}
