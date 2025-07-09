import Prabha from "./profile3.jpg"
import frontend from "./blue-frontend.jpg"
import javaJs from "./java-js.png"
import Laptop from "./frontend.jpg"
import html from "./html.jpg"
import css from "./csss.jpg"
import js from "./js.jpg"
import react from "./react-icon-on-white-square-button-free-png.webp"
import tailwind from "./tailwindcss.jpg"
import mongodb from "./mongodb-Photoroom.png"
import express from "./express-Photoroom.png"
import nodejs from "./nodejs.png"
import landingPage from "./landingpage.png"
import login from "./login.png"
import home from "./home.png"
import menu from "./menu.png"
import dishes from "./dishes.png"
import java from "./java-Photoroom.png"
import lead1 from "./unnamed.png"
import lead2 from "./leads.png"


export const assets =  {
    Prabha,
    Laptop,
} 
export const images = {
    landingPage,
    login,
    home,
    menu,
    dishes,
    lead1,
    lead2
}
export const services = [{
    image: frontend,
    name: "Frontend",
    description:"Handles the user interface and experience through visual design and interactivity",
    logos: [html,css,js,react,tailwind]
},
    {
        
        name: "Backend",
        description:"Manages server-side logic, databases, and application functionality behind the scenes",
        logos:[nodejs,express,mongodb]
    },
    {
        image:javaJs,
        name:"Programming languages",
        description:"A set of instructions used to communicate with computers and build software, websites, apps, and more.",
        logos:[js,java,],
    }

]


