import { Topic } from './Topic';

export type LearningSource = {
  id: string;
  name: string;
  description: string;
  image: string;
  topics: Topic[];
};
