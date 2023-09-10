import React from "react";

// Internal imports

import { useStateContext } from "../context/index";

const index = () => {
  const { TOKEN_ICO } = useStateContext();
  return (
    <div>
      <h1>{TOKEN_ICO}</h1>
    </div>
  );
};

export default index;
