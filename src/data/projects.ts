import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    id: 1,
    title: "My Portfolio Site",
    shortDescription: "A little bit about how i created this site.",
    techStack: ["Vite", "React", "TypeScript", "Node.js", "NPM", "GitHub Actions", "AWS S3", "CloudFront", "Route 53"], // Technologies used
    fullDescription: [
        'This project serves as a central place for my professional work and experiments.',
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/alligators.webp'},
        'It includes a dynamic education page, interactive project cards, and themed styling.',
        'Testing testing testing',
        { type: 'image', src: '/images/cooking.webp' }
      ],
    githubLink: "https://github.com/clutch42/brian-engel-portfolio/tree/main", // Optional GitHub link
    liveDemoLink: 'https://thebrianengel.com',
    whatILearned: 'I had a blast doing this site.',
  },
  {
    id: 2,
    title: "Project Two",
    shortDescription: "Another project description.",
    fullDescription: ["Another project description. Another project description. Another project description. Another \
    project description. Another project description. Another project description. Another project description."],
    techStack: ["HTML", "CSS", "JavaScript"], // Technologies used
    liveDemoLink: "https://yourwebsite.com/project-two", // Optional live demo link
  },
  {
    id: 3,
    title: "another project",
    shortDescription: "this is a short description of the project that is a little longer than it should be to make sure that everything wraps correctly but it is hard to write a sentence this long without making it a run on sentence.",
    techStack: ["Vite", "React", "TypeScript", "Node.js", "NPM", "GitHub Actions", "AWS S3", "CloudFront", "Route 53"], // Technologies used
    fullDescription: [
        'this is testing sentence picture',
        { type: 'image', src: '/images/bartending.webp' },
        'this is testing two sentence one picture',
        'this is testing two sentence one picture',
        { type: 'image', src: '/images/bartending.webp' },
        'this is testing sentence and 2 picture',
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        'this is testing two sentence two pictures',
        'this is testing two sentence two pictures',
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        'this is testing sentence and a bunch of pictures',
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
        { type: 'image', src: '/images/bartending.webp' },
      ],
    githubLink: "https://github.com/clutch42/brian-engel-portfolio/tree/main", // Optional GitHub link
    liveDemoLink: 'https://thebrianengel.com',
    whatILearned: 'I had a blast doing this site.',
  },
];
