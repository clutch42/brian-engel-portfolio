import { LearningSource } from '../types/LearningSource';

export const additionalLearning: LearningSource[] = [
    {
      id: "codecademy",
      name: "Codecademy.com",
      description: "A platform for interactive coding tutorials across various programming languages and frameworks.",
      image: '/images/codecademy.webp',
      topics: [
        {
          id: "learn_c",
          name: "Learn C",
          shortDescription: "The C programming language was first released in 1972, making it one of the oldest still used today. All modern operating \
          systems are implemented with C code, which means that the C language powers almost every technological experience we have. Python's interpreter \
          is also written in C. Get started learning C fundamentals to become a better programmer in any field of computer science.",
          skills: ["Variables", "Operators", "Conditionals", "Loops", "Arrays", "Strings", "Pointers", "Functions", "Structures"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/9dba9d9b6bf64cf58b2b416ef9cd0912",
        },
        {
          id: "learn_cpp",
          name: "Learn C++",
          shortDescription: "Learn C++ — a versatile programming language that’s important for developing software, games, databases, and more.",
          skills: ["Variables", "Conditions and Logic", "Loops", "Vectors", "Functions", "Classes and Objects", "References and Pointers"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/b74a2390dfc4127fa5d43fe147425ad0",
        },
        {
          id: "learn_cs",
          name: "Learn C#",
          shortDescription: "Learn Microsoft's popular C# programming language, used to make websites, mobile apps, video games, VR, and more.",
          skills: ["Data Types and Variables", "Numbers and Operators", "Strings", "Logic", "Conditionals", "Arrays", "Loops", "Lists", "Methods", "Classes"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/65f0ff88f4fc58e0536b3b51648dff24",
        },
        {
          id: "asp_net",
          name: "Learn ASP.NET",
          shortDescription: "Learn how to build fast, secure, and maintainable web apps with ASP.NET and the Razor Pages architecture.",
          skills: ["Razor Syntax", "Page Models", "Databases", "Middleware", "Dependency Injection"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/6a4c3e274d5e0465254f0a2cf6052e44",
        },
        {
          id: "learn_go",
          name: "Learn Go",
          shortDescription: "Learn how to use Go (Golang), an open-source programming language supported by Google!",
          skills: ["Variables", "fmt Package", "Conditionals", "Functions", "Interfaces"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/60773d2e920679c8e46ff634b9ed2e6e",
        },
        {
          id: "intermediate_go",
          name: "Learn Intermediate Go",
          shortDescription: "Learn to handle files and errors effectively and master web programming in Go in this intermediate course. Ideal for aspiring Go experts.",
          skills: ["Panic", "Recover", "Custom Errors", "Wrapping and Unwrapping", "File Handling", "net/http"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/42ee48b10e8644f0b3131a933c02cd00",
        },
        {
          id: "javascript",
          name: "Learn JavaScript",
          shortDescription: "Learn how to use JavaScript — a powerful and flexible programming language for adding website interactivity.",
          skills: ["Conditionals", "Functions", "Scope", "Arrays", "Loops", "Iterators", "Objects"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/705dcb15de0da4dd9d9fc4f3274b430e",
        },
        {
          id: "intermediate_javascript",
          name: "Learn Intermediate JavaScript",
          shortDescription: "Take your JavaScript knowledge to the next level by learning how to use advanced functions to create more efficient programs.",
          skills: ["Classes", "Modules", "Promises", "Async-Await", "Requests", "Errors and Error Handling", "Under the Hood", "Best Practices"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/512386fdc7f6c934f98b01e6afa8285a",
        },
        {
          id: "typeScript",
          name: "Learn Typescript",
          shortDescription: "Learn TypeScript, a superset of JavaScript that adds types to make the language scale!",
          skills: ["Types", "Functions", "Arrays", "Custom Types", "Union Types", "Type Narrowing", "Advanced Object Types"],
        },
        {
          id: "intermediate_typeScript",
          name: "Learn Intermediate Typescript",
          shortDescription: "Dive into intermediate TypeScript concepts including class types, type narrowing, and generics.",
          skills: ["Comfiguration", "Class Types", "Type Narrowing", "Generics"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/84f728978e434c02a78abaa0baca0d6c",
        },
        {
          id: "learn_python",
          name: "Learn Python 3",
          shortDescription: "Learn the basics of Python 3.12, one of the most powerful, versatile, and in-demand programming languages today.",
          skills: ["Control Flow", "Lists", "Loops", "Functions", "Strings", "Modules", "Dictionaries", "Files", "Classes"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/6c152bd262967f8c941c9707ed636bda",
        },
        {
          id: "intermediate_python",
          name: "Learn Intermediate Python 3",
          shortDescription: "In Learn Intermediate Python 3, we’ll teach you how to leverage Python’s unique features and techniques to build powerful, \
          sophisticated applications. You’ll also learn how to expedite your data processing and management, manage your resources, test your code using \
          the Unittest testing framework, and more.",
          skills: ["Function Arguments", "Namespace and Scope", "Functions Deep Dive", "Object Oriented Programming", "Unit Testing", "Iterators and Generators", "Specialized Collections", "Resource Management"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/18580789eaba28f09e116f4fc2acec44",
        },
        {
          id: "learn_swift",
          name: "Learn Swift",
          shortDescription: "A powerful programming language developed by Apple for iOS, macOS, and more.",
          skills: ["Variables", "Conditionals and Logic", "Loops", "Arrays and Sets", "Dictionaries", "Functions", "Structures", "Classes"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/18e90daa65479a37c8f909893ada3694",
        },
        {
          id: "intermediate_swift",
          name: "Learn Intermediate Swift",
          shortDescription: "Learn how to use enumerations, optionals, closures, and access control to build robust and powerful Swift programs.",
          skills: ["Enumerations", "Optionals", "Closures", "Properties and Access Control", "Protocols and Generics"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/7ea163c1176d53d69063f6e6386100f1",
        },
        {
          id: "learn_java",
          name: "Learn Java",
          shortDescription: "Learn to code in Java — a robust programming language used to create software, web and mobile apps, and more.",
          skills: ["Variables", "Object Oriented Java", "Conditionals and Control Flow", "Arrays and ArrayLists", "Loops", "String Methods", "Access, Encapsulation, and Static Methods", "Inheritence and Polymorphism", "Debugging", "Two-Dimensional Arrays"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/d3f89367b558583e361640f778191345",
        },
        {
          id: "learn_kotlin",
          name: "Learn Kotlin",
          shortDescription: "Learn Kotlin, the expressive, open-source programming language developed by JetBrains.",
          skills: ["Data Types and Variables", "Conditional Expressions", "Collections", "Loops", "Functions", "Classes"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/a549293c6e8d62a61ef1bec410b58162",
        },
        {
          id: "mongodb",
          name: "Learn MongoDB",
          shortDescription: "Learn how to work with NoSQL databases and run basic CRUD operations in this introduction to MongoDB.",
          skills: ["CRUD Operations", "Indexing", "Aggregation", "Atlas"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/808a989d563e4e85ba3495d4d14dce5d",
        },
        {
          id: "learn_sql",
          name: "Learn SQL",
          shortDescription: "In this SQL course, you'll learn how to manage large datasets and analyze real data using the standard data management language.",
          skills: ["Manipulation", "Queries", "Aggregate Functions", "Multiple Tables"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/042a4e5884e3eb6ea1f2a12be6abb851",
        },
        {
          id: "learn_html",
          name: "Learn HTML",
          shortDescription: "Start at the beginning by learning HTML basics — an important foundation for building and editing web pages.",
          skills: ["Elements and Structure", "Tables", "Forms", "Semantic HTML"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/9eb0741e5ebef1f9f58a53bfac67d3a7",
        },
        {
          id: "learn_css",
          name: "Learn CSS",
          shortDescription: "In this CSS tutorial, you’ll learn how to add CSS to visually transform HTML into eye-catching sites.",
          skills: ["Syntax and Selectors", "Visual Rules", "The Box Model", "Display and Positioning", "Colors", "Typography"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/9a5bb1fc45b4281af1fffec93b0aaf05",
        },
        {
          id: "intermediate_css",
          name: "Learn Intermediate CSS",
          shortDescription: "Expand your CSS knowledge by learning SCSS syntax, nesting, functions, and more in this course!",
          skills: ["Layout with Flexbox", "Grid", "CSS-Transitions", "Responsive Design", "Variables and Functions", "Accessibility", "Browser Compatibility"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/b3dec49423da50603c25618aee635027",
        },
        {
          id: "learn_sass",
          name: "Learn Sass",
          shortDescription: "Expand your CSS knowledge by learning SCSS syntax, nesting, functions, and more in this course!",
          skills: ["Create a Sass Stylesheet", "Mixins and the & Selector", "Functions and Operations", "Sustainable SCSS"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/eb1ffda40f347629dcef6de33d3f9741",
        },
        {
          id: "git&github",
          name: "Learn Git & GitHub",
          shortDescription: "Use our beginner friendly Git course to integrate Git and GitHub and manage versions of your projects using Git branches.",
          skills: ["Git", "GitHub", "Markdown", "Branching", "GitHub Actions", "GitHub Codespaces"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/a8ab218d5950c29861635cc0bf12fd13",
        },
        {
          id: "intro_to_linux",
          name: "Introduction to Linux",
          shortDescription: "In this introductory course, we'll be getting familiar with Linux and how to navigate within a Linux environment!",
          skills: ["Virtual Machine", "Duel Boot", "Ubuntu", "Bash Scripting", "Permissions", "Command Line"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/54de574543f242baaf263227f82073bf",
        },
        {
          id: "computer_architecture",
          name: "Computer Architecture",
          shortDescription: "Learn about the rules, organization of components, and processes that allow computers to process instructions.",
          skills: ["Instruction Set Architecture", "Assembly Language", "Cache", "Instruction Parallelism", "Data-Level Parallelism"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/dee8cc79cfe5e46834989e0d0ec1d2d5",
        },
      ]
    },
  ];

  export default additionalLearning;