
import data from './placeholder-images.json';

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  imageHint: string;
}

export const Projects: Project[] = data.placeholderImages;
