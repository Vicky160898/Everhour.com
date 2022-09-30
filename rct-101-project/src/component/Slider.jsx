import { useEffect } from "react";
import { useState } from "react";
import "./Style.css";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import {Flex,Container} from "@chakra-ui/react"
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
    <div className="slider" >
    <Flex width="80%" >
    <FaArrowAltCircleLeft onClick={preSlide} />
      
      <div width="80%">
        {Data.map((el, i) => {
          return (
            <div
               className={i === index ? "slide active" : "slide"}
              key={i}
            >
              {i === index && <img src={el.src} alt="img" width="100%"/>}
            </div>
          );
        })}
      </div>
      <FaArrowAltCircleRight onClick={nextSlide} />
    </Flex>
     </div>
  );
}
