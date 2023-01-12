import { FC } from "react";

export interface LayoutProps {
  children: JSX.Element;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="py-4 sm:px-4">{children}</div>;
};
