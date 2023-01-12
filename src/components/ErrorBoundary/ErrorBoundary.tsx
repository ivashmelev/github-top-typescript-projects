import { Component, ErrorInfo } from "react";

interface Props {
  children: JSX.Element;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-xl font-semibold ">
            Oops... something went wrong
          </h1>
        </div>
      );
    }

    return this.props.children;
  }
}
