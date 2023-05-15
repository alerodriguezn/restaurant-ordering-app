import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import ProtectedRoute from "../layouts/ProtectedRoute.jsx";
import Products from "./pages/Products.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductsProvider } from "./context/ProductsProvider.jsx";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <ProductsProvider>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<ProtectedRoute />}>
              <Route index element={<Admin />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Routes>

        </ProductsProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
