'use client';
import CommentSection from "@/component/CommentSection";
const blogData = [
//   {
//     id: "1",
//     title: "Introduction to Web Development",
//     image: "/image/Intro+to+Web+Dev-29.png",
//     content: `### Introduction:
// Web development is the backbone of the digital world, responsible for creating and maintaining websites. If you’re looking to start a career in web development or just want to understand how websites are built, you’re in the right place! In this guide, we will explore the basics of web development, the skills you need to get started, and the different areas you can focus on as you advance.

// ### What is Web Development?
// Web development is the process of building websites and web applications. It involves creating everything from simple static pages to complex dynamic websites. There are two main types of web development: front-end (what users see) and back-end (the server side).

// ### Front-End Development:
// This is all about creating the user interface (UI) and user experience (UX) of a website. Front-end developers use HTML, CSS, and JavaScript to build the visual components that users interact with.

// ### Back-End Development:
// Back-end developers work on the server-side logic, databases, and application functionality. They use languages like Python, Ruby, and PHP to ensure that everything on the website works as it should behind the scenes.

// ### Full-Stack Development:
// Full-stack developers are skilled in both front-end and back-end development. They can build an entire website or web application from start to finish.

// ### Skills Needed to Get Started in Web Development

// ### HTML:
// HTML (Hypertext Markup Language) is the foundation of all websites. It is used to structure the content and layout of a webpage, including headings, paragraphs, images, and links.

// ### CSS:
// CSS (Cascading Style Sheets) controls the visual appearance of a webpage. With CSS, you can adjust the colors, fonts, and layout of a page to make it look appealing and user-friendly.

// ### JavaScript:
// JavaScript is a programming language used to make web pages interactive. Whether it’s handling form submissions, creating animations, or making API calls, JavaScript is essential for dynamic websites.

// ### Version Control:
// Version control tools like Git help you keep track of changes to your code and collaborate with other developers. GitHub is a popular platform for sharing code and working on projects with other developers.

// ### Conclusion:
// Starting a career in web development can seem overwhelming at first, but with the right tools and knowledge, you’ll be building amazing websites in no time! Focus on learning HTML, CSS, and JavaScript to build a strong foundation. From there, you can dive deeper into front-end, back-end, or full-stack development based on your interests.
// `
//   },
// {
//   id: "2",
//   title: "Understanding Front-End Development",
//   image: "/image/what-is-front-end-development.webp",
//   content: `### Introduction:
// Front-end development is a critical part of the web development process. It focuses on creating the user-facing part of websites and web applications. As a front-end developer, your job is to ensure that users have a smooth and intuitive experience when interacting with the website. In this blog, we’ll break down the essential skills needed to become a front-end developer and explain the technologies involved in the process.

// ### What is Front-End Development?
// Front-end development involves everything that users interact with directly in their web browsers. This includes the structure, design, behavior, and content of everything users see on a website. The goal is to ensure that the website is visually appealing, functional, and responsive.

// ### Core Technologies for Front-End Development:

// ### HTML (Hypertext Markup Language):
// HTML is the backbone of any web page. It defines the structure of the content and ensures that text, images, and other elements appear correctly on the page. HTML is essential for creating headings, paragraphs, images, forms, and links that allow users to navigate the site.

// ### CSS (Cascading Style Sheets):
// CSS adds style to the structure created by HTML. It controls the layout, fonts, colors, spacing, and positioning of elements on a page. CSS allows developers to create responsive designs that adapt to different screen sizes, such as mobile phones, tablets, and desktops.

// ### JavaScript:
// JavaScript is used to add interactivity to a website. It enables developers to create dynamic elements such as dropdown menus, image sliders, pop-up forms, and interactive maps. JavaScript can also be used to fetch data from a server, making the website more dynamic.

// ### Advanced Front-End Concepts:

// ### Responsive Design:
// Responsive design ensures that websites work on all screen sizes and devices. Developers use media queries in CSS to adjust layouts, fonts, and images for different devices, ensuring the site looks great whether on a phone, tablet, or desktop.

// ### Frameworks and Libraries:
// To make development more efficient, front-end developers often use frameworks and libraries like React, Angular, and Vue.js. These provide reusable components and tools that streamline the process of building interactive web applications.

// ### Skills Needed to Become a Front-End Developer:
// 1. Proficiency in HTML, CSS, and JavaScript.
// 2. Knowledge of front-end frameworks like React or Angular.
// 3. Understanding of responsive design and mobile-first principles.
// 4. Familiarity with version control tools like Git.
// 5. Experience with browser developer tools for debugging.

// ### Conclusion:
// Front-end development is a rewarding and creative field. It allows developers to directly impact how users experience a website. By mastering HTML, CSS, and JavaScript, and learning front-end frameworks, you can create beautiful, interactive websites that engage users and provide them with a seamless browsing experience.
// `
// },

// {
//   id: "3",
//   title: "Back-End Development: The Server Side",
//   image: "/image/backend.png" ,
//   content: `### Introduction:
// Back-end development is the part of web development that happens behind the scenes. It is responsible for creating the logic, database management, and application functionality that make a website or web application work. If you’re interested in building systems that process data, manage user accounts, or handle transactions, back-end development might be the right field for you. In this blog, we’ll dive into the core components of back-end development.

// ### What is Back-End Development?
// Back-end development is the process of creating the server-side logic that powers a website or web application. It involves working with servers, databases, and application programming interfaces (APIs) to handle requests from users and provide them with the necessary information or services.

// ### Key Components of Back-End Development:

// ### Servers:
// A server is a powerful computer that stores and manages all the data required by a website or web application. When users access a site, the server processes their requests and sends the necessary files and data back to the client (the browser). Understanding how to configure and work with servers is a key part of back-end development.

// ### Databases:
// Databases store all the information that a website needs to function, such as user data, blog posts, product information, and more. Back-end developers use databases like MySQL, PostgreSQL, and MongoDB to store and retrieve data efficiently.

// ### APIs (Application Programming Interfaces):
// APIs allow different software systems to communicate with each other. They act as a bridge between the back-end and the front-end, enabling developers to fetch data from the server or send requests to external services. For example, you might use an API to fetch weather data or integrate payment systems.

// ### Back-End Programming Languages:
// 1. ##Python:
//  Known for its simplicity and versatility, Python is a popular choice for back-end development. It’s used in web frameworks like Django and Flask.
// 2. ##Node.js (JavaScript): 
// While JavaScript is typically used for front-end development, Node.js allows developers to use JavaScript on the back-end as well.
// 3. ##Ruby:
//  Ruby, along with the Ruby on Rails framework, is known for its developer-friendly syntax and is commonly used for back-end development.

// ### Security Considerations in Back-End Development:
// Back-end developers must also be aware of security practices to protect user data and prevent unauthorized access. This includes using secure authentication mechanisms, encrypting sensitive data, and preventing SQL injection attacks.

// ### Skills Needed for Back-End Development:
// 1. Proficiency in server-side programming languages like Python, Ruby, and JavaScript (Node.js).
// 2. Experience working with databases and writing SQL queries.
// 3. Knowledge of web frameworks like Django, Flask, and Express.js.
// 4. Familiarity with version control systems like Git.
// 5. Understanding of security best practices, such as data encryption and authentication.

// ### Conclusion:
// Back-end development is a critical part of creating a functional website or web application. It powers the data processing, database management, and server-side logic that users rely on. By mastering back-end programming languages and frameworks, you can build powerful and scalable web applications that handle complex tasks and provide an exceptional user experience.
// `
// },

// {
//   id: "4",
//   title: "Full-Stack Development: Combining Front-End and Back-End",
//   image: "/image/Full-Stack-Developer.jpg",
//   content: `### Introduction:
// Full-stack development is the practice of working with both front-end and back-end technologies to build complete web applications. Full-stack developers have the ability to work on all aspects of a website, from designing the user interface to managing the server-side logic. In this blog, we’ll explore what full-stack development is, the skills needed to become a full-stack developer, and the tools you should learn to excel in this field.

// ### What is Full-Stack Development?
// Full-stack development refers to the ability to work on both the front-end and back-end of a web application. A full-stack developer is comfortable using technologies from both sides, which allows them to build an entire web application on their own. Full-stack developers are in high demand because they can handle all aspects of development, making them a valuable asset to any development team.

// ### Key Skills for Full-Stack Development:

// ### Front-End Skills:
// As a full-stack developer, you need to be proficient in front-end technologies such as HTML, CSS, and JavaScript. You should also be familiar with front-end frameworks like React, Angular, or Vue.js to build responsive and interactive user interfaces.

// ### Back-End Skills:
// Full-stack developers must also be skilled in back-end development, including working with server-side programming languages like Python, Java, and Ruby. You should also be comfortable with databases, APIs, and server management.

// ### Version Control:
// Proficiency with version control tools like Git is essential for full-stack developers. Git allows you to track changes in your code, collaborate with other developers, and deploy your code to production.

// ### DevOps:
// DevOps is the practice of automating and streamlining the process of building, testing, and deploying applications. As a full-stack developer, you should be familiar with DevOps tools and practices to ensure smooth development workflows.

// ### Tools and Technologies for Full-Stack Development:
// 1. ##Front-End Frameworks: 
// React, Angular, and Vue.js.
// 2. ##Back-End Frameworks:
//  Node.js, Django, and Ruby on Rails.
// 3. ##Databases:
//  MySQL, MongoDB, and PostgreSQL.
// 4. ##Version Control:
//  Git and GitHub.
// 5. ##Deployment Tools: 
// Docker, Kubernetes, and cloud services like AWS.

// ### Challenges in Full-Stack Development:
// Full-stack development can be challenging because it requires developers to be proficient in both front-end and back-end technologies. You may need to learn new frameworks, handle complex systems, and ensure the different parts of your application work seamlessly together.

// ### Conclusion:
// Becoming a full-stack developer requires mastering both front-end and back-end technologies. Full-stack developers are highly versatile and can work on all aspects of a web application, making them invaluable members of development teams. By learning the necessary skills and tools, you can embark on a rewarding career as a full-stack developer and build complete, dynamic web applications from start to finish.
// `
// },
{
   id: "1",
   title: "Introduction to Web Development",
   image: "/image/Intro+to+Web+Dev-29.png",
   content: "### Introduction:\nWeb development is the backbone of the digital world, responsible for creating and maintaining websites. If you&apos;re looking to start a career in web development or just want to understand how websites are built, you&apos;re in the right place! In this guide, we will explore the basics of web development, the skills you need to get started, and the different areas you can focus on as you advance.\n\n### What is Web Development?\nWeb development is the process of building websites and web applications. It involves creating everything from simple static pages to complex dynamic websites. There are two main types of web development: front-end (what users see) and back-end (the server side).\n\n### Front-End Development:\nThis is all about creating the user interface (UI) and user experience (UX) of a website. Front-end developers use HTML, CSS, and JavaScript to build the visual components that users interact with.\n\n### Back-End Development:\nBack-end developers work on the server-side logic, databases, and application functionality. They use languages like Python, Ruby, and PHP to ensure that everything on the website works as it should behind the scenes.\n\n### Full-Stack Development:\nFull-stack developers are skilled in both front-end and back-end development. They can build an entire website or web application from start to finish.\n\n### Skills Needed to Get Started in Web Development\n\n### HTML:\nHTML (Hypertext Markup Language) is the foundation of all websites. It is used to structure the content and layout of a webpage, including headings, paragraphs, images, and links.\n\n### CSS:\nCSS (Cascading Style Sheets) controls the visual appearance of a webpage. With CSS, you can adjust the colors, fonts, and layout of a page to make it look appealing and user-friendly.\n\n### JavaScript:\nJavaScript is a programming language used to make web pages interactive. Whether it&apos;s handling form submissions, creating animations, or making API calls, JavaScript is essential for dynamic websites.\n\n### Version Control:\nVersion control tools like Git help you keep track of changes to your code and collaborate with other developers. GitHub is a popular platform for sharing code and working on projects with other developers.\n\n### Conclusion:\nStarting a career in web development can seem overwhelming at first, but with the right tools and knowledge, you&apos;ll be building amazing websites in no time! Focus on learning HTML, CSS, and JavaScript to build a strong foundation. From there, you can dive deeper into front-end, back-end, or full-stack development based on your interests."
 },
 {
   id: "2",
   title: "Understanding Front-End Development",
   image: "/image/what-is-front-end-development.webp",
   content: "### Introduction:\nFront-end development is a critical part of the web development process. It focuses on creating the user-facing part of websites and web applications. As a front-end developer, your job is to ensure that users have a smooth and intuitive experience when interacting with the website. In this blog, we&apos;ll break down the essential skills needed to become a front-end developer and explain the technologies involved in the process.\n\n### What is Front-End Development?\nFront-end development involves everything that users interact with directly in their web browsers. This includes the structure, design, behavior, and content of everything users see on a website. The goal is to ensure that the website is visually appealing, functional, and responsive.\n\n### Core Technologies for Front-End Development:\n\n### HTML (Hypertext Markup Language):\nHTML is the backbone of any web page. It defines the structure of the content and ensures that text, images, and other elements appear correctly on the page. HTML is essential for creating headings, paragraphs, images, forms, and links that allow users to navigate the site.\n\n### CSS (Cascading Style Sheets):\nCSS adds style to the structure created by HTML. It controls the layout, fonts, colors, spacing, and positioning of elements on a page. CSS allows developers to create responsive designs that adapt to different screen sizes, such as mobile phones, tablets, and desktops.\n\n### JavaScript:\nJavaScript is used to add interactivity to a website. It enables developers to create dynamic elements such as dropdown menus, image sliders, pop-up forms, and interactive maps. JavaScript can also be used to fetch data from a server, making the website more dynamic.\n\n### Advanced Front-End Concepts:\n\n### Responsive Design:\nResponsive design ensures that websites work on all screen sizes and devices. Developers use media queries in CSS to adjust layouts, fonts, and images for different devices, ensuring the site looks great whether on a phone, tablet, or desktop.\n\n### Frameworks and Libraries:\nTo make development more efficient, front-end developers often use frameworks and libraries like React, Angular, and Vue.js. These provide reusable components and tools that streamline the process of building interactive web applications.\n\n### Skills Needed to Become a Front-End Developer:\n1. Proficiency in HTML, CSS, and JavaScript.\n2. Knowledge of front-end frameworks like React or Angular.\n3. Understanding of responsive design and mobile-first principles.\n4. Familiarity with version control tools like Git.\n5. Experience with browser developer tools for debugging.\n\n### Conclusion:\nFront-end development is a rewarding and creative field. It allows developers to directly impact how users experience a website. By mastering HTML, CSS, and JavaScript, and learning front-end frameworks, you can create beautiful, interactive websites that engage users and provide them with a seamless browsing experience."
 },
 {
   id: "3",
   title: "Back-End Development: The Server Side",
   image: "/image/backend.png",
   content: "### Introduction:\nBack-end development is the part of web development that happens behind the scenes. It is responsible for creating the logic, database management, and application functionality that make a website or web application work. If you&apos;re interested in building systems that process data, manage user accounts, or handle transactions, back-end development might be the right field for you. In this blog, we&apos;ll dive into the core components of back-end development.\n\n### What is Back-End Development?\nBack-end development is the process of creating the server-side logic that powers a website or web application. It involves working with servers, databases, and application programming interfaces (APIs) to handle requests from users and provide them with the necessary information or services.\n\n### Key Components of Back-End Development:\n\n### Servers:\nA server is a powerful computer that stores and manages all the data required by a website or web application. When users access a site, the server processes their requests and sends the necessary files and data back to the client (the browser). Understanding how to configure and work with servers is a key part of back-end development.\n\n### Databases:\nDatabases store all the information that a website needs to function, such as user data, blog posts, product information, and more. Back-end developers use databases like MySQL, PostgreSQL, and MongoDB to store and retrieve data efficiently.\n\n### APIs (Application Programming Interfaces):\nAPIs allow different software systems to communicate with each other. They act as a bridge between the back-end and the front-end, enabling developers to fetch data from the server or send requests to external services. For example, you might use an API to fetch weather data or integrate payment systems.\n\n### Back-End Programming Languages:\n1. ##Python:\nKnown for its simplicity and versatility, Python is a popular choice for back-end development. It&apos;s used in web frameworks like Django and Flask.\n2. ##Node.js (JavaScript):\nWhile JavaScript is typically used for front-end development, Node.js allows developers to use JavaScript on the back-end as well.\n3. ##Ruby:\nRuby, along with the Ruby on Rails framework, is known for its developer-friendly syntax and is commonly used for back-end development.\n\n### Security Considerations in Back-End Development:\nBack-end developers must also be aware of security practices to protect user data and prevent unauthorized access. This includes using secure authentication mechanisms, encrypting sensitive data, and preventing SQL injection attacks.\n\n### Skills Needed for Back-End Development:\n1. Proficiency in server-side programming languages like Python, Ruby, and JavaScript (Node.js).\n2. Experience working with databases and writing SQL queries.\n3. Knowledge of web frameworks like Django, Flask, and Express.js.\n4. Familiarity with version control systems like Git.\n5. Understanding of security best practices, such as data encryption and authentication.\n\n### Conclusion:\nBack-end development is a critical part of creating a functional website or web application. It powers the data processing, database management, and server-side logic that users rely on. By mastering back-end programming languages and frameworks, you can build powerful and scalable web applications that handle complex tasks and provide an exceptional user experience."
 },
 {
   id: "4",
   title: "Full-Stack Development: Combining Front-End and Back-End",
   image: "/image/Full-Stack-Developer.jpg",
   content: "### Introduction:\nFull-stack development is the practice of working with both the front-end and back-end of a web application. As a full-stack developer, you&apos;ll be able to build both the user-facing and server-side components of a website. This allows you to create fully functional, end-to-end web applications. In this blog, we&apos;ll explore what it means to be a full-stack developer, the skills needed, and the tools and technologies involved.\n\n### What is Full-Stack Development?\nFull-stack development refers to the practice of working with both the client-side (front-end) and server-side (back-end) components of a web application. Full-stack developers have expertise in a variety of technologies and frameworks, which allows them to build web applications from start to finish.\n\n### Core Technologies for Full-Stack Development:\n1. ##HTML, CSS, and JavaScript:\nAs with front-end development, full-stack developers must be proficient in HTML, CSS, and JavaScript. These technologies are used to build the user interface and handle interactions between the user and the website.\n2. ##Back-End Technologies (Node.js, Python, Ruby, etc.):\nFull-stack developers must also be skilled in back-end programming languages and frameworks like Node.js, Python, or Ruby. These technologies handle data processing, server management, and APIs.\n3. ##Databases (SQL and NoSQL):\nFull-stack developers must have experience working with both SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB) databases to store and retrieve data.\n4. ##Version Control (Git):\nFull-stack developers use version control tools like Git to manage and track changes in their codebase.\n\n### The Full-Stack Development Workflow:\nFull-stack developers work across the entire development stack, from designing the user interface to implementing server-side functionality. This requires a strong understanding of both front-end and back-end technologies. Developers often use frameworks like React or Angular for the front-end and Express.js or Django for the back-end.\n\n### Skills Needed to Become a Full-Stack Developer:\n1. Proficiency in front-end technologies (HTML, CSS, JavaScript).\n2. Experience with back-end programming languages and frameworks.\n3. Knowledge of database management (SQL and NoSQL).\n4. Familiarity with version control tools like Git.\n5. Strong problem-solving and debugging skills.\n\n### Conclusion:\nFull-stack development offers the opportunity to work on both the front-end and back-end of a web application. By learning the necessary skills and tools, you&apos;ll be able to build complete web applications from scratch. Full-stack developers are in high demand, and mastering full-stack development opens up a wide range of job opportunities."
 },
 {
   "id": "5",
   "title": "Becoming a Web Developer: The Roadmap",
   "image": "/image/roadmap.jpg",
   "content": "### Introduction:\nIf you&apos;re interested in becoming a web developer, you might be wondering where to start and what skills you need to learn. Web development is a constantly evolving field, and there are a wide variety of tools and technologies available to help you build amazing websites and web applications. In this blog, we&apos;ll provide a roadmap for becoming a web developer, outlining the steps you can take to start your career in web development.\n\n### Step 1: Learn the Basics of HTML, CSS, and JavaScript\nBefore diving into more advanced topics, it&apos;s crucial to learn the basics of web development. HTML, CSS, and JavaScript are the building blocks of web development, and every web developer needs to master them.\n\n### HTML:\nHTML (Hypertext Markup Language) is the structure of web pages. It defines the content and layout of a page and helps browsers display the content.\n\n### CSS:\nCSS (Cascading Style Sheets) is responsible for the appearance of a webpage. It controls the layout, colors, fonts, and more.\n\n### JavaScript:\nJavaScript is a programming language used to create interactive elements on websites, such as forms, buttons, and animations.\n\n### Step 2: Learn Front-End Development Frameworks\nOnce you have a solid understanding of HTML, CSS, and JavaScript, it&apos;s time to learn front-end frameworks. These tools allow you to build dynamic, responsive user interfaces faster and more efficiently.\n\n### Popular Front-End Frameworks:\n1. ##React: \nA JavaScript library for building user interfaces.\n2. ##Vue.js: \nA progressive JavaScript framework.\n3. ##Angular: \nA TypeScript-based framework for building large-scale web applications.\n\n### Step 3: Learn Back-End Development\nBack-end development involves working with servers, databases, and APIs to process data and manage user requests. Understanding how to handle data, process user requests, and work with APIs is essential for building full-fledged web applications.\n\n### Key Back-End Technologies:\n1. ##Node.js: \nA JavaScript runtime used for building server-side applications.\n2. ##Python: \nA versatile language used with frameworks like Django and Flask.\n3. ==Ruby: \nOften used with the Ruby on Rails framework.\n\n### Step 4: Learn Version Control and Git\nVersion control is a critical part of modern web development. Git allows you to keep track of changes to your code and collaborate with other developers. Learn how to use Git to manage your code, track changes, and share your work on platforms like GitHub.\n\n### Step 5: Explore Full-Stack Development\nOnce you have a strong understanding of front-end and back-end development, it&apos;s time to explore full-stack development. Learn how to combine both front-end and back-end technologies to build complete web applications. Full-stack development is highly sought after, as it allows you to build entire applications from start to finish.\n\n### Step 6: Build Projects and Practice\nThe best way to learn web development is by building projects. Start small with simple websites and work your way up to more complex applications. Build a portfolio of your work to showcase your skills to potential employers.\n\n### Step 7: Stay Up to Date with New Technologies\nWeb development is constantly evolving, and new tools and frameworks are released regularly. Stay up to date with the latest trends in web development by following blogs, attending meetups, and participating in online communities.\n\n### Conclusion:\nBecoming a web developer is an exciting journey, but it requires dedication and practice. By following this roadmap, you can learn the essential skills needed to become a successful web developer and start building amazing websites and applications. Whether you choose to specialize in front-end, back-end, or full-stack development, there are endless opportunities for growth in the world of web development."
 },
 {
   "id": "6",
   "title": "Build Projects and Practice",
   "image": "/image/practice.webp",
   "content": "## Build Projects and Practice\n\n## Why Projects Are Important:\nProjects are the bridge between learning and applying knowledge. They allow you to:\n- ## Solidify Your Learning:\n By working on real-world scenarios, you strengthen your understanding of concepts.\n- ## Showcase Your Skills: \nEmployers look for practical proof of your capabilities, and projects serve as a portfolio.\n- ## Boost Your Confidence:\n Tackling challenges in projects builds problem-solving skills and self-assurance.\n\n## Project Ideas to Get Started:\n1. ## Personal Portfolio Website:\n   - Create a professional portfolio to showcase your skills, projects, and education.\n   - Use responsive design techniques with CSS Grid or Flexbox to make it mobile-friendly.\n\n2. ## To-Do List App:\n   - Add features like sorting, deadlines, and task categories for better usability.\n   - Store tasks using localStorage or indexedDB for persistence.\n\n3. ## E-Commerce Website:\n   - Build a product catalog with filtering and sorting options.\n   - Implement a shopping cart with add/remove items functionality.\n   - Connect to a payment gateway or simulate payments for practice.\n\n4. ## Blog Application:\n   - Add a rich text editor for users to format their posts.\n   - Implement comment sections to enhance interactivity.\n   - Use a database like MongoDB or Firebase for storing posts.\n\n5. ## Weather Application:\n   - Allow users to search for weather updates by city or location.\n   - Display real-time weather, weekly forecasts, and alerts.\n\n## Additional Tips:\n- Focus on creating small, manageable features instead of overwhelming yourself with large projects.\n- Gradually enhance projects as you learn more advanced concepts."
 },
 {
   "id": "7",
   "title": "Learn Deployment and Hosting",
   "image": "/image/Web-App-Deployment.jpg",
   "content": "## Learn Deployment and Hosting\n\n## Why Deployment Matters:\nDeployment is a critical step in software development, allowing you to:\n- ## Showcase Your Work: Share live projects with employers, clients, or peers.\n- ## Gain Experience with Production Environments: Understand how applications behave in real-world settings.\n- ## Practice CI/CD Pipelines: Automate the deployment process for faster and error-free updates.\n\n## Popular Platforms for Deployment:\n1. ## Vercel:\n   - Ideal for front-end frameworks like Next.js, React, and Vue.js.\n   - Provides custom domains, serverless functions, and analytics.\n\n2. ## Netlify:\n   - Best for static websites and JAMstack applications.\n   - Offers automated builds, form handling, and global content delivery.\n\n3. ## GitHub Pages:\n   - Perfect for hosting small projects directly from your GitHub repositories.\n   - Free and requires minimal configuration.\n\n4. ## Heroku:\n   - Great for deploying full-stack applications with integrated databases.\n   - Supports a wide range of languages, including Node.js, Python, and Ruby.\n\n## Steps to Deploy:\n1. Set up version control with Git.\n2. Push your code to a remote repository (e.g., GitHub).\n3. Connect your repository to the deployment platform.\n4. Configure environment variables if needed.\n5. Monitor and update your deployed project as required.\n\n## Additional Resources:\n- Learn how to troubleshoot deployment errors by checking logs.\n- Optimize your application for better performance and reduced load times."
 },
 {
   "id": "8",
   "title": "Learn Testing and Debugging",
   "image": "/image/testing-debugging.avif",
   "content": "## Learn Testing and Debugging\n\n## Why Testing and Debugging Are Crucial:\nTesting and debugging are essential for delivering reliable and high-quality applications:\n- ## Catch Bugs Early: Prevent issues from escalating into larger problems.\n- ## Maintain Code Quality: Keep your codebase clean, efficient, and maintainable.\n- ## Enhance User Satisfaction: Deliver a smooth, error-free user experience.\n\n## Types of Testing:\n1. ## Unit Testing:\n   - Focuses on testing individual components or functions.\n   - Example: Testing the output of a JavaScript function for edge cases.\n\n2. ## Integration Testing:\n   - Verifies that different parts of the application work together as expected.\n   - Example: Checking if the back-end API correctly provides data to the front-end.\n\n3. ## End-to-End Testing:\n   - Tests the entire application workflow from a user&apos;s perspective.\n   - Example: Simulating a user logging in, adding items to a cart, and checking out.\n\n## Tools for Testing:\n- ## Jest: \nA versatile JavaScript testing framework for unit and integration tests.\n- ## Cypress:\n Perfect for automating end-to-end tests in web applications.\n- ## Mocha and Chai: \nUseful for writing flexible and powerful test scripts.\n\n## Debugging Tips:\n- Use browser developer tools (e.g., Chrome DevTools) to inspect elements, monitor network requests, and debug JavaScript errors.\n- Add breakpoints in your code to pause execution and examine variable values.\n- Write logs using console.log() for quick debugging insights.\n\n## Conclusion:\nTesting and debugging help ensure the reliability and functionality of your code. Master these skills to write better code and create flawless web applications."
 },
 
 
 {
   "id": "9",
   "title": "Build Your Resume and Network",
   "image": "/image/resume-image.jpg",
   "content": "## Build Your Resume and Network\n\n## How to Build an Impressive Resume:\n1. ## Focus on Relevant Skills:\n   - Highlight your expertise in technologies like HTML, CSS, JavaScript, and frameworks like React or Next.js.\n\n2. ## Include Impactful Projects:\n   - Add links to live projects or GitHub repositories.\n   - Write brief descriptions of each project, explaining the tools and techniques used.\n\n3. ## List Certifications and Courses:\n   - Mention relevant certifications, such as freeCodeCamp, Udemy, or Coursera courses.\n\n## Networking Strategies:\n- ## Leverage LinkedIn:\n   - Optimize your profile with a professional photo, a compelling summary, and a detailed experience section.\n   - Connect with peers, mentors, and professionals in the tech industry.\n\n- ## Participate in Online Communities:\n   - Contribute to discussions on platforms like Stack Overflow, Reddit, and Discord.\n   - Collaborate on open-source projects to enhance your visibility.\n\n- ## Attend Hackathons and Meetups:\n   - Network with developers and gain hands-on experience by working on group projects.\n   - Learn from workshops and keynote speakers at tech events.\n\n## Showcase Your Portfolio:\n- Your portfolio website should be a reflection of your creativity and technical expertise.\n- Include sections like:\n   - ## About Me: A brief introduction to your journey and goals.\n   - ## Projects: Links to live projects with detailed descriptions.\n   - ## Skills: A clear display of your technical competencies.\n   - ## Contact: Social media links and a contact form.\n\n## Pro Tip: Stay consistent in updating your resume, portfolio, and LinkedIn profile as you complete new projects and gain experience."
 }
 
];

export default function PostPage({ params }: { params: { id: string } }) {
  const { id } = params;

  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    return <p>Blog not found!</p>;
  }
  const paragraphs = blog.content.split("\n").map((para, index) => {
    const isSubheading = /^###|##|==/.test(para); 
    if (isSubheading) {
      return (
        <p key={index} className="mb-4 font-bold text-lg">
          <span style={{ display: 'none' }}>{para}</span> 
          {para.replace(/^###|##|==/, '')} 
        </p>
      );
    }
    return (
      <p key={index} className="mb-4">{para}</p>
    );
  });

  return (
    <div className="px-4">
    <div className="p-4 bg-gray-50 text-black">
       <div className="flex justify-center items-center mb-4">
        <img src={blog.image} alt={blog.title} className="w-[600px] h-80  text-3xl font-bold text-[#324c70] object-cover rounded-lg" />
      </div>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {paragraphs} 
      <CommentSection/>
    </div>
    </div>
  );
}
