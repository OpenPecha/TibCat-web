import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export const ALLOWED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/plain",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];
export const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const socialMedia = [
  {
    id: 1,
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://linkedin.com",
  },
  {
    id: 3,
    name: "Instagram",
    icon: FaInstagram,
    link: "https://instagram.com",
  },
];


export const MonlamProduct=[
  {
    name:"Monlam Melong",
    link:'#'
  },
  {
    name:"Monlam Translate",
    link:'#'
  },
  {
    name:"Monlam Extension",  
    link:'#'
  }
]

export const ITEM_PER_PAGES = 7;

export const MODAL_LIST=[
  {
    id: "1",
    name: "Melong",
    description: "Recommended for Regular literature",
  },
  {
    id: "2",
    name: "Mitra",
    description: "Recommended for Buddhist literature",
  },
]