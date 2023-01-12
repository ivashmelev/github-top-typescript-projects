import { FC, memo } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoaderSizes } from "./types";

export interface LoaderProps {
  visible?: boolean;
  size?: LoaderSizes;
}

export const Loader: FC<LoaderProps> = memo(
  ({ size = LoaderSizes.Small, visible = true }) => {
    if (!visible) {
      return null;
    }

    return (
      <AiOutlineLoading3Quarters className="animate-spin-slow" size={size} />
    );
  }
);

Loader.displayName = "Loader";
