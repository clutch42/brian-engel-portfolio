import { Topic } from './Topic';

export type LearningSource = {
  id: string;
  name: string;
  description: string;
  topics: Topic[];
};
