import { type ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <main className=" h-dvh">{children}</main>;
};

export default Layout;
