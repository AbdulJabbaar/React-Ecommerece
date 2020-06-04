import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// const WithSpinner = (WrrapedComponent) => ({ isLoading, ...otherProps }) => {
//   return isLoading ? (
//     <SpinnerOverlay>
//       <SpinnerContainer />
//     </SpinnerOverlay>
//   ) : (
//     <WrrapedComponent {...otherProps} />
//   );
// };

// Other way of writing above is

const WithSpinner = (WrappedComponent) => {
  const spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

  return spinner;
};

export default WithSpinner;
