import { FC } from "react";
import "./index.css";
import { Main } from "./routes/Main/Main";
import { Layout } from "./components/Layout/Layout";
import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";

export const App: FC = () => {
  return (
    <ErrorBoundary>
      <Layout>
        <Main />
      </Layout>
    </ErrorBoundary>
  );
};
