// import { ChakraProvider } from "@chakra-ui/react";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./global.css";

// const activeChain = "Mumbai";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider>
      {/* <ChakraProvider> */}
      <App />
      {/* </ChakraProvider> */}
    </ThirdwebProvider>
  </React.StrictMode>
);
