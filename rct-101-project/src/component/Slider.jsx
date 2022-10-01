import { useEffect } from "react";
import { useState } from "react";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Flex, Container } from "@chakra-ui/react";
const data = [
  {
    id: 0,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/trello-primary.webp",
  },
  {
    id: 1,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/basecamp-primary.webp",
  },
  {
    id: 2,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/jira-primary.webp",
  },
  {
    id: 3,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/github-primary.webp",
  },
  {
    id: 4,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/clickup-primary.webp",
  },
  {
    id: 5,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/monday-primary.webp",
  },
  {
    id: 6,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/notion-primary.webp",
  },
  {
    id: 7,
    src: "https://blog-cdn.everhour.com/assets/images/new-design/screens/integrations/asana-primary.webp",
  },
];
export default function Slider() {
  const [Data] = useState(data);
  const [index, setIndex] = useState(0);
  const length = Data.length;
  const nextSlide = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };
  const preSlide = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };
  if (!Array.isArray(Data) || Data.length <= 0) {
    return null;
  }
  return (
    <div
      style={{  width: "100%", margin: "auto", marginTop:"10vh" }}
    >
      <Flex
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FaArrowAltCircleLeft onClick={preSlide} fontSize={45} mr="3vw"/>

        <div width="100%">
          {Data.map((el, i) => {
            return (
              <div>
                {i === index && <img src={el.src} alt="img" width="100%" />}
              </div>
            );
          })}
        </div>
        <FaArrowAltCircleRight onClick={nextSlide} fontSize={45} />
      </Flex>
    </div>
  );
}
