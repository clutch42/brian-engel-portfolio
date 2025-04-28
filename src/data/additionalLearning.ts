import { LearningSource } from '../types/LearningSource';

export const additionalLearning: LearningSource[] = [
    {
      id: "codecademy",
      name: "Codecademy",
      description: "A platform for interactive coding tutorials across various programming languages and frameworks.",
      topics: [
        {
          id: "learn-javascript",
          name: "JavaScript",
          shortDescription: "An introduction to JavaScript programming language.",
        },
        {
          id: "learn-python",
          name: "Python",
          shortDescription: "Learn Python basics and common libraries.",
        },
        {
          id: "learn-other stuff",
          name: "Python",
          shortDescription: "Learn Python basics and common libraries.",
        },
        {
          id: "learn-python",
          name: "Python",
          shortDescription: "Learn Python basics and common libraries.",
        },
        {
          id: "learn-python",
          name: "Python",
          shortDescription: "Learn Python basics and common libraries.",
        },
        {
          id: "learn-python",
          name: "Python",
          shortDescription: "Learn Python basics and common libraries.",
        },
      ]
    },
    {
      id: "youtube",
      name: "YouTube",
      description: "Various tutorials and project-based learning content across multiple fields.",
      topics: [
        {
          id: "react-projects",
          name: "React Projects",
          shortDescription: "Hands-on React projects to enhance frontend skills.",
        },
        {
          id: "nodejs-server",
          name: "Node.js Server",
          shortDescription: "Building REST APIs with Node.js and Express.",
        },
        // more topics...
      ]
    },
    // more sources...
  ];

  export default additionalLearning;