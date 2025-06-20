import { marked } from 'marked';
import { readFileSync } from 'fs';

// export const fetchMarkdown = (fileName: string): Promise<string> => {
//   return new Promise((resolve, reject) => {
//     try {
//       const filePath = `./src/markdowns/${fileName}`;
//       const content = readFileSync(filePath, 'utf8');
//       resolve(marked(content));
//     } catch (error) {
//       reject(error);
//     }
//   });
// };


export const fetchMarkdown = async (fileName: string): Promise<string> => {
  const res = await fetch(`/markdowns/${fileName}`);
  if (!res.ok) {
    throw new Error(`Failed to load ${fileName}`);
  }
  const text = await res.text();
  return text;
};