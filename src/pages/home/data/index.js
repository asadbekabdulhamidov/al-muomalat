import capital from "../../../assets/images/png/capital.png";
import Education from "../../../assets/images/png/Education.png";
import forislamic from "../../../assets/images/png/forislamic.png";
import International from "../../../assets/images/png/International.png";
import Islamic from "../../../assets/images/png/Islamic.png";
import shariah from "../../../assets/images/png/shariah.png";

//media
import mediaCart1 from "../../../assets/images/png/mediaCart1.png";
import mediaCart2 from "../../../assets/images/png/mediaCart2.png";
import mediaCart3 from "../../../assets/images/png/mediaCart3.png";

//expertimg
import expertimg from "../../../assets/images/png/expertimg.png";

import { v4 as uuidv4 } from "uuid";
import { ImGift } from "react-icons/im";

export const servicesData = [
  {
    id: 1,
    titleKey: "card_1_title",
    descKey: "card_1_desc",
    bgColor: "bg-blue-100",
    icon: Islamic,
  },
  {
    id: 2,
    titleKey: "card_2_title",
    descKey: "card_2_desc",
    bgColor: "bg-green-100",
    icon: International,
  },
  {
    id: 3,
    titleKey: "card_3_title",
    descKey: "card_3_desc",
    bgColor: "bg-pink-100",
    icon: Education,
  },
  {
    id: 4,
    titleKey: "card_4_title",
    descKey: "card_4_desc",
    bgColor: "bg-purple-100",
    icon: forislamic,
  },
  {
    id: 5,
    titleKey: "card_5_title",
    descKey: "card_5_desc",
    bgColor: "bg-gray-100",
    icon: capital,
  },
  {
    id: 6,
    titleKey: "card_6_title",
    descKey: "card_6_desc",
    bgColor: "bg-yellow-100",
    icon: shariah,
  },
];

export const expertData = [
  {
    id: 7,
    name: "expert_name_1",
    description: "expert_description_1",
    image: expertimg,
  },
  {
    id: 8,
    name: "expert_name_2",
    description: "expert_description_2",
    image: expertimg,
  },
  {
    id: 9,
    name: "expert_name_3",
    description: "expert_description_3",
    image: expertimg,
  },
];

export const mediaCartsData = [
  {
    id: uuidv4(),
    text: "why_islamic_finance",
    bg: mediaCart1,
  },
  {
    id: uuidv4(),
    text: "what_makes_islamic_finance_unique",
    bg: mediaCart2,
  },
  {
    id: uuidv4(),
    text: "how_is_risk_managed",
    bg: mediaCart3,
  },
];

export const faqs = [
  {
    id: uuidv4(),
    questions: "faq.q1.question",
    answer: "faq.q1.answer",
  },
  {
    id: uuidv4(),
    questions: "faq.q2.question",
    answer: "faq.q2.answer",
  },
  {
    id: uuidv4(),
    questions: "faq.q3.question",
    answer: "faq.q3.answer",
  },
  {
    id: uuidv4(),
    questions: "faq.q1.question",
    answer: "faq.q1.answer",
  },
  {
    id: uuidv4(),
    questions: "faq.q4.question",
    answer: "faq.q4.answer",
  },
];
