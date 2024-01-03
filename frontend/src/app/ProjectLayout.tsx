// components/Layout.tsx
import { ReactNode } from "react";
import Navigation from "./Navigation/page";

interface LayoutProps {
  children: ReactNode;
}

const ProjectLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div >
        
    <div >
      <div >
        <Navigation />
      </div>
    </div>
        <div >{children}</div>
    </div>
  );
};

export default ProjectLayout;
