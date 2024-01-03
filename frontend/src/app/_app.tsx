
// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.css'; // Import your global styles here
import RootLayout from './layout';
import ProjectLayout from './ProjectLayout';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
    {console.log(Component)}
  return (
    <ProjectLayout>
      <Component {...pageProps} />
    </ProjectLayout>
  );
};

export default MyApp;
