// types/Project.ts
export interface Project {
    id: number;
    title: string;
    shortDescription: string;
    techStack: string[]; // Array of technologies used
    fullDescription: (string | { type: 'image'; src: string })[];
    githubLink?: string; // Optional GitHub link
    liveDemoLink?: string; // Optional live demo link
    whatILearned?: string;
  }
  