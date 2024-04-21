import React from "react";
import { Spinner, SpinnerProps } from "@chakra-ui/react";

interface LoaderProps extends SpinnerProps {
  style?: React.CSSProperties;
}

const Loader: React.FC<LoaderProps> = ({ style, ...spinnerProps }) => {
  return (
    <div className="w-full flex justify-center">
      <Spinner {...spinnerProps} style={style} />
    </div>
  );
};

export default Loader;
