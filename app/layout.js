import './globals.css';

export const metadata = {
  title: 'Afia Ibnat | Frontend & Full-Stack Developer',
  description: 'Afia Ibnat is a CSE graduate from BAUET building web applications with React, Next.js and TypeScript, with academic interests in computer vision and medical image analysis.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
