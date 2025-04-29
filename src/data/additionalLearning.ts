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
          skills: ["interfaces", "functions"],
          link: "https://www.google.com",
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
          id: "git&github",
          name: "Learn Git & GitHub",
          shortDescription: "In this course, we will cover the basic functions of Git & GitHub. \
          Through lessons, projects, articles, and tutorials, you\'ll practice using basic Git commands in the terminal to add \
          version control to your project. This means you can switch between different versions of your progress, and branch off \
          to create new features while preserving a main working copy. \
          We will go over how to integrate Git with GitHub, one of the most-used web applications by developers across the world to \
          collaborate in teams and share code.",
          skills: ["Git", "GitHub", "Markdown", "Branching", "GitHub Actions", "GitHub Codespaces"],
          link: "https://www.codecademy.com/profiles/clutch_42/certificates/a8ab218d5950c29861635cc0bf12fd13",
        },
      ]
    },
  ];

  export default additionalLearning;