import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Admin from "./pages/Admin.jsx";
import Cart from "./pages/Cart.jsx";
import ProtectedRoute from "./layouts/ProtectedRoute.jsx";
import Products from "./pages/Products.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { ProductsProvider } from "./context/ProductsProvider.jsx";
import { AuthProvider } from "./context/AuthProvider.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx"


function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ChakraProvider>
          <ProductsProvider>



            <Routes>

       
                <Route path="/" element={<Home />} />
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
                <Route path="/cart" element={<Cart />} />

              

              <Route path="/admin" element={<ProtectedRoute />}>
                <Route index element={<Admin />} />
                <Route path="products" element={<Products />} />
              </Route>
            </Routes>

          </ProductsProvider>
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
