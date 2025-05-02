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
        'Once that was working, I didn’t want to stick with a random default domain, so I bought a custom one and connected it using Route 53 for DNS.',
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
      ],
    githubLink: "https://github.com/clutch42/SNHU-CS-330-Computational-Graphics-and-Visualization/tree/master/CS-330-Project-Enhanced", // Optional GitHub link
    whatILearned: 'This project was a significant learning experience where I poured a lot of time and effort into mastering the intricacies of 3D graphics. \
    By building custom functions for vertex generation, textures, and multipurpose shaders, I gained a deep understanding of the graphics pipeline. The final \
    result is a polished 3D scene that I\'m proud of, and I\'m confident it reflects the hard work and skills I developed throughout the process.',
  },
  {
    id: 4,
    title: "Portfolio Project",
    shortDescription: "",
    techStack: ["Vite", "React", "TypeScript", "Node.js", "NPM", "GitHub Actions", "AWS S3", "CloudFront", "Route 53"], // Technologies used
    fullDescription: [
        'this is testing sentence picture',
        { type: 'image', src: '/images/bartending.webp' },
      ],
    githubLink: "https://github.com/clutch42/clutch42.github.io", // Optional GitHub link
    liveDemoLink: 'https://clutch42.github.io/',
    whatILearned: 'I had a blast doing this site.',
  },
  {
    id: 5,
    title: "Simplifying a Radical",
    shortDescription: "",
    techStack: ["Vite", "React", "TypeScript", "Node.js", "NPM", "GitHub Actions", "AWS S3", "CloudFront", "Route 53"], // Technologies used
    fullDescription: [
        'this is testing sentence picture',
        { type: 'image', src: '/images/bartending.webp' },
      ],
    githubLink: "https://github.com/clutch42/Factorial_Interface", // Optional GitHub link
    liveDemoLink: 'https://factorial-interface.onrender.com',
    whatILearned: 'I had a blast doing this site.',
  },
];
