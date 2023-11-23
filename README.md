## Deployed:

https://chic-truffle-c789d4.netlify.app/

## Deployed:
This is a simple page "blog" made using Next.js, Typescript and Tailwind for styling.

Very simple design in Figma is available <a href="https://www.figma.com/file/uZHar7QfUZRfXHUNUGoVN4/Design-of-a-blog-page?type=design&node-id=0-1&mode=design&t=KOg7yclBYYSt3zAb-0" target="_blank">here</a>. It includes: state before log in/register, state when we are logged in on the main page of our blog and finally a single article page. 

I started by setting up a new Next.js project using npx. 
I'm building the page step by step by adding new components. As I am still new to Next.js I study simultaneusly vercel's documentation (about adding Links, Images, new pages).

On Tuesday, I created two new sections, Intro and Group components. I am styling it with CSS grid. In the Group component I have 4 articles and each articles' header and image naviagtes to a new page. I achieveed it by warpping it in Link componnet. I have each article Article a classname (so I can style each article differently). Href prop specifies the destination page for each article. 

I added npm package date-and-time (npm i date-and-time) for showing current date in the navbar.

I installed clsx library package to be able to use conditional class rendering.

##  info

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

