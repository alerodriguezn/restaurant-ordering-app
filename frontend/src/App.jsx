import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductsProvider } from "./context/ProductsProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ProductsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ProductsProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
