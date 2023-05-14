import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { TiThMenu } from "react-icons/ti";
import { FaShoppingCart } from "react-icons/fa";
import ProductList from "../components/ProductList.jsx";


const Home = () => {
  return (
    <>
      <header>
        <nav className="w-full h-20 flex pl-2  items-center justify-between pt-2">
          <Menu>
            <MenuButton
              bg="#FBBF24"
              _hover={"#F6E05E"}
              as={Button}
              rightIcon={<TiThMenu />}
            >
              Menu
            </MenuButton>
            <MenuList fontWeight={"bold"}>
              <MenuItem>Hamburguers</MenuItem>
              <MenuItem>Pizzas</MenuItem>
              <MenuItem>Tacos</MenuItem>
              <MenuItem>Sushi</MenuItem>
              <MenuItem>Coffee</MenuItem>
            </MenuList>
          </Menu>

          <h1 className="font-bold text-md md:text-xl">
            Restaurant Ordering App
          </h1>

          <button className=" bg-amber-400 rounded-md p-2 mr-8">
            <FaShoppingCart className="" size={24} />
          </button>
        </nav>
      </header>

      <main className="p-2">
        
        <ProductList/>
      </main>
    </>
  );
};

export default Home;
