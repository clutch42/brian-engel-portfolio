import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    title: "My Portfolio Site",
    shortDescription: "A little bit about how i created this site.",
    techStack: ["Vite", "React", "TypeScript", "Node.js", "NPM", "GitHub Actions", "AWS S3", "CloudFront", "Route 53"], // Technologies used
    fullDescription: [
        'I built my portfolio site with cost in mind, so I decided to host it on an Amazon S3 bucket. To make updates easy, I set up \
        GitHub Actions to automatically deploy the site whenever I push changes from VS Code to GitHub.',
        { type: 'image', src: '/images/github_workflow.png' },
        'At first, the site was only available over HTTP, but I wanted to challenge myself to get HTTPS working too. I used AWS \
        Certificate Manager along with CloudFront to secure the site with HTTPS.',
        'Once that was working, I didn\'t want to stick with a random default domain, so I bought a custom one and connected it using Route 53 for DNS.',
        { type: 'image', src: '/images/s3.png' },
        { type: 'image', src: '/images/cloudfront.png' },
        { type: 'image', src: '/images/route53.png' },
        'For the actual site, I used Vite with React and TypeScript, and I added client-side routing to make navigation smooth.',
        { type: 'image', src: '/images/react_routing.png' },
      ],
    githubLink: "https://github.com/clutch42/brian-engel-portfolio/tree/main", // Optional GitHub link
    whatILearned: 'This project was a great learning experience. I got hands-on with AWS, automation tools, and front-end development all in one go. \
    Figuring out each piece, from setting up HTTPS to connecting a custom domain, taught me a lot about how modern web hosting works. I had set a budget \
    of up to $15 per month, but the final cost came out to just about $1 per month for the first year and $1.50 per month after that, including the \
    domain name. Most of all, I had a lot of fun building it.',
  },
  {
    id: 6,
    title: "Resume Generator",
    shortDescription: "A Python app that uses OpenAI and automation to generate tailored resumes and cover letters from job descriptions.",
    techStack: ["Python", "Tkinter", "OpenAI API", "ReportLab", "dotenv", "Regex", "JSON"], // Technologies used
    fullDescription: [
        'This app was built to help users manage, edit, and generate polished resumes from structured data. It features a multi-tab interface for organizing \
        key categories like personal info, skills, education, and experience. Once populated, the tool can generate resumes and cover letters automatically in \
        PDF format using pre-defined templates.',
        { type: 'image', src: '/images/resume_builder_home_screen.png' },
        'The app uses tkinter to create a dynamic, scrollable GUI where each tab is modular and managed by its own class (e.g., SkillsTab, ExperienceTab, etc.). \
        Each tab reads from and writes to its corresponding JSON file, allowing users to save and reload structured resume data. This modular architecture made \
        the app easy to scale as new sections—like summaries or project details—were added.',
        { type: 'image', src: '/images/skills_tab.png' },
        { type: 'image', src: '/images/education_tab.png' },
        { type: 'image', src: '/images/certifications_tab.png' },
        'One of the more unique components is the Summaries tab. Unlike the other tabs that store straightforward data, this one lets the user input a job title, \
        then associate both a resume summary and a cover letter with it. When a job description is analyzed, OpenAI is used to extract all relevant job titles, \
        which are then presented to the user to choose from. The selected job title determines which summary and cover letter are applied. The cover letter can \
        include a {company} token, which gets automatically replaced with the company name—also extracted by OpenAI and confirmed by the user. This allows for \
        quick tailoring of application materials to different roles with minimal manual effort.',
        { type: 'image', src: '/images/summary_tab.png' },
        'The PDF Generator tab is where everything comes together. At the top, users can choose an output directory for saving their resume and cover letter PDFs. \
        A checkbox allows toggling the OpenAI API integration—useful for users without an API key. There\'s a text box to paste in a job description, and clicking \
        "Analyze" kicks off a hybrid process using both regular expressions and the OpenAI API to extract key details like required skills, company name, and job \
        title. Once analyzed, the user can compare extracted skills against their own (inputted via the app), then generate a custom resume and cover letter. Both \
        documents are created using ReportLab, and smart features like {company} tags in the cover letter allow automatic insertion of the company name. There\'s \
        also a handy section for quick-copying links (e.g., GitHub, LinkedIn), which are often needed when applying for jobs.',
        { type: 'image', src: '/images/pdfgen1.png' },
        { type: 'image', src: '/images/pdfgen2.png' },
        { type: 'image', src: '/images/pdfgen3.png' },
        { type: 'image', src: '/images/pdfgen4.png' },
        { type: 'image', src: '/images/pdfgen5.png' },
        'This project started as a personal tool—I initially built it to streamline my own resume workflows and never intended to share it publicly. But as it grew \
        in functionality and polish, I realized it could be useful to others and decided to publish it on GitHub. That said, it’s not completely plug-and-play. \
        Anyone who wants to use it will need to configure a few things: set up environment variables, add their OpenAI API key, and possibly customize prompt \
        behavior and output formats in the OpenAI-driven sections. Despite that, the core design—modular tabs, automated PDF generation, and hybrid data extraction—proved \
        flexible and powerful. The project was a great exercise in combining user-friendly design with intelligent automation.'
      ],
    githubLink: "https://github.com/clutch42/Resume_Automation", // Optional GitHub link
    whatILearned: 'This project helped solidify my understanding of building modular desktop applications using Python and Tkinter. I learned how to organize a \
    complex multi-tab layout where each section reads from and writes to its own JSON file, making the app both scalable and easy to maintain. Integrating the \
    OpenAI API introduced new challenges around balancing automation with user control, and it gave me practical experience designing hybrid workflows that combine \
    AI-driven insight with traditional regex-based parsing. I also got hands-on with ReportLab for PDF generation, which required careful layout management and \
    templating. Overall, this project pushed me to combine GUI design, data structuring, and intelligent automation into a cohesive, user-friendly tool.',
  },
  {
    id: 2,
    title: "Full-Stack Site Conversion (MEAN Stack)",
    shortDescription: "Final Project for CS-465 Full Stack Development",
    fullDescription: [
      { type: 'image', src: '/images/travlr_home_page.png' },
      "This project was part of my work in SNHU\'s CS-465 Full Stack Development course. The goal was to take a static website and rebuild it using the MEAN \
      stack. We started by setting up a MongoDB database to hold the site\'s content. From there, we built a Node.js and Express backend, connected it to the \
      database using Mongoose, and created API routes to serve the data.",
      { type: 'image', src: '/images/component_diagram.png' },
      { type: 'image', src: '/images/sequence_diagram.png' },
      { type: 'image', src: '/images/class_diagram.png' },
      "For the client-facing side, we used Handlebars to build out the frontend that users would see. To manage the content more easily, we also created a \
      separate admin interface using Angular, which allowed us to update the site and modify the database through a browser. All the graphics and design \
      elements were provided, so our main focus was building out the structure and functionality.",
      { type: 'image', src: '/images/travlr_admin_page.png' },
    ],
    techStack: ["MongoDB", "Express", "Angular", "Node.js", "Mongoose", "Handlebars", "HTML/CSS"], // Technologies used
    githubLink: "https://github.com/clutch42/SNHU-CS-465-Full-Stack-Development-I/tree/main",
    whatILearned: 'This project gave me a solid introduction to full-stack development using the MEAN stack. I learned how the different pieces work together, \
    from setting up an API with Node and Express to managing data with MongoDB and building out dynamic interfaces with Handlebars and Angular. The entire \
    project was run locally for development purposes, so there\'s no live production site to link to. Still, it was a great hands-on experience and helped me \
    understand how modern web apps are structured and deployed.',
  },
  {
    id: 3,
    title: "OpenGL 3D Scene",
    shortDescription: "This project was part of my work in SNHU\'s CS-330 Computational Graphics and Visualisation course. It incorperated C++ and the OpenGL \
    library to recreate a 3D scene of our choosing.",
    techStack: ["C++", "OpenGL", "GLFW", "GLEW"], // Technologies used
    fullDescription: [
        'This project was part of my work in SNHU\'s CS-330 Computational Graphics and Visualization course. I used C++ and OpenGL to recreate a custom 3D scene, \
        focusing on creating geometry, applying textures, and implementing lighting effects. The project aimed to showcase my understanding of core graphics \
        concepts, including object transformations, camera control, and the graphics pipeline.',
        { type: 'image', src: '/images/3Dpic1.jpg' },
        { type: 'image', src: '/images/3Dapp1.png' },
        'Instead of using pre-made assets, I developed custom functions to generate the vertices, indices, normals, and texture coordinates for each shape. I put \
        these functions into header files, making the code modular and reusable. This allowed me to build various shapes like prisms, assigning each unique colors \
        and texture coordinates, and managing how each shape interacts with lighting in the scene. I also wrote multipurpose GLSL shaders that could handle \
        different lighting types and material properties, giving the scene flexibility and depth.',
        { type: 'image', src: '/images/3Dpic2.jpg' },
        { type: 'image', src: '/images/3Dapp2.png' },
        'The project was built using GLFW and GLEW to manage the window and OpenGL contexts, and everything was rendered using OpenGL\'s programmable pipeline, \
        giving me full control over the rendering process.',
        { type: 'image', src: '/images/3Dpic3.jpg' },
        { type: 'image', src: '/images/3Dapp3.png' },
        'I\'ve included a link to a Windows installer for this project if you\'d like to try it out. It only works on Windows, and since it\'s not digitally signed, \
        your system will likely show a warning. Totally understandable if you\'d rather not install it.',
      ],
    githubLink: "https://github.com/clutch42/SNHU-CS-330-Computational-Graphics-and-Visualization/tree/master/CS-330-Project-Enhanced", // Optional GitHub link
    whatILearned: 'This project was a significant learning experience where I poured a lot of time and effort into mastering the intricacies of 3D graphics. \
    By building custom functions for vertex generation, textures, and multipurpose shaders, I gained a deep understanding of the graphics pipeline. The final \
    result is a polished 3D scene that I\'m proud of, and I\'m confident it reflects the hard work and skills I developed throughout the process.',
    downloadLink: "https://brian-engel-portfolio.s3.us-east-2.amazonaws.com/MyOpenGLAppInstaller.exe",
  },
  {
    id: 4,
    title: "Computer Science Capstone Project",
    shortDescription: "This portfolio highlights key projects from my Computer Science coursework at Southern New Hampshire University, where I improved existing \
    code and showcased it on a website, focusing on areas like software design, data structures, algorithms, and database management.",
    techStack: ["C++", "OpenGL", "SQL", "SQLite", "JavaScript", "HTML", "CSS"], // Technologies used
    fullDescription: [
        'The CS-499 Capstone Project brings together improvements to code from software design, algorithms and data structures, and databases. It shows how \
        I\'ve applied key concepts like OOP, optimizing algorithms, and securing database applications.',
        { type: 'image', src: '/images/ads.png' },
        'For the algorithms and data structures section, I revisited a Binary Search Tree project and upgraded it with an AVL tree. The main goal was to make \
        insertions, deletions, and lookups consistently fast by keeping the tree balanced automatically.',
        { type: 'image', src: '/images/sde.png' },
        'In the software design section, I refactored a 3D graphics app built with OpenGL to make the code more modular and reusable. I already had a solid \
        handle on the graphics pipeline, so this round was more about improving structure and maintainability without changing the core functionality.',
        { type: 'image', src: '/images/db.png' },
        'The database project was all about locking down a C++ app that used SQLite. The original version tried to catch SQL injections with keyword filtering, \
        but I overhauled it to use parameterized queries instead, a much safer approach. I also added a logging system to keep track of sketchy inputs and \
        monitor potential threats in real time.',
        'Check out the live demo to see code reviews for each improved project, along with GitHub links showing the before-and-after versions of the code.',
      ],
    githubLink: "https://github.com/clutch42/clutch42.github.io", // Optional GitHub link
    liveDemoLink: 'https://clutch42.github.io/legacy',
    whatILearned: 'This capstone pulled everything together. It gave me a chance to revisit past projects, clean them up, and apply what I\'ve learned, \
    from writing modular, secure code to documenting it like a pro. It was a solid reminder of how much I\'ve grown and how important it is to build things the right way.',
  },
  {
    id: 5,
    title: "Simplifying a Radical",
    shortDescription: "A lightweight app that walks users through how to simplify square roots, built to help a student visualize and check their work step by step.",
    techStack: ["C++", "JavaScript", "HTML", "CSS", "Emscripten", "WebAssembly", "Node.js", "Render"], // Technologies used
    fullDescription: [
        'I made this tool while helping a friend\'s kid with trigonometry. He was struggling to understand how to simplify radicals, so I built a simple app \
        that walks through the process one step at a time.',
        { type: 'image', src: '/images/factorialblank.png' },
        'The frontend is super simple, just an input field styled with some basic HTML and CSS. When you enter a number, it passes it to a C++ function that \
        does the math and returns the answer as a string.',
        'I used Emscripten to compile the C++ code into WebAssembly so it could run in the browser. That gave me the flexibility of C++ logic with the \
        convenience of a web interface, and it worked great for making the logic easy to test and share.',
        { type: 'image', src: '/images/factorialnumber.png' },
        'Click \'View Live Demo\' to try it out. I\'s hosted on a free Render instance, so it might take up to a minute to wake up. Just a heads-up—it was \
        built quickly, so it doesn\'t handle every edge case (like negative numbers or values over 2,147,483,647).'
      ],
    githubLink: "https://github.com/clutch42/Factorial_Interface", // Optional GitHub link
    liveDemoLink: 'https://factorial-interface.onrender.com',
    whatILearned: 'I\'d never used Emscripten before this, so figuring out how to compile a C++ function and hook it up to a simple web UI was a great \
    learning experience. It was cool seeing native code run in the browser, and it gave me a better understanding of how WebAssembly and JavaScript can work together.',
  },
];
