import { FC } from "react";
import "./index.css";
import { Main } from "./routes/Main/Main";
import { Layout } from "./components/Layout/Layout";

export const App: FC = () => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
};
