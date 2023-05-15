import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuDivider,
  MenuGroup,
} from "@chakra-ui/react";
import ProductList from "../components/ProductList.jsx";
import { TiThMenu } from "react-icons/ti";
import {
  FaShoppingCart,
  FaHamburger,
  FaPizzaSlice,
  FaCoffee,
  FaUserAlt,
} from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { GiTacos } from "react-icons/gi";
import { BiSushi } from "react-icons/bi";

const Home = () => {
  return (
    <>
      <nav className="w-full h-20 flex pl-2  items-center justify-between pt-2">
        <Menu>
          <MenuButton
            bg="#FBBF24"
            _hover={{ bg: "#F6E05E" }}
            _expanded={{ bg: "#FBBF24" }}
            as={Button}
            rightIcon={<TiThMenu />}
          >
            Menu
          </MenuButton>
          <MenuList fontWeight={""} bg={"#FBBF24"}>
            <MenuGroup title="Food & Drinks" className="">
              <MenuItem
                icon={<FaHamburger size={18} />}
                _focus={{ bg: "#FFF" }}
                bg={"#FBBF24"}
              >
                Hamburguers
              </MenuItem>
              <MenuItem
                icon={<FaPizzaSlice size={18} />}
                _focus={{ bg: "#FFF" }}
                bg={"#FBBF24"}
              >
                Pizzas
              </MenuItem>
              <MenuItem
                icon={<GiTacos size={18} />}
                _focus={{ bg: "#FFF" }}
                bg={"#FBBF24"}
              >
                Tacos
              </MenuItem>
              <MenuItem
                icon={<BiSushi size={18} />}
                _focus={{ bg: "#FFF" }}
                bg={"#FBBF24"}
              >
                Sushi
              </MenuItem>
              <MenuItem
                icon={<FaCoffee size={18} />}
                _focus={{ bg: "#FFF" }}
                bg={"#FBBF24"}
              >
                Coffee
              </MenuItem>
            </MenuGroup>
            <MenuDivider borderColor={"#171923"} />
            <MenuGroup title="Orders" color={"#171923"} fontWeight={"bold"}>
              <MenuItem _focus={{ bg: "#FFF" }} bg={"#FBBF24"}>
                My Orders
              </MenuItem>
            </MenuGroup>
            <MenuDivider borderColor={"#171923"} />
            <MenuGroup title="Profile" color={"#171923"} fontWeight={"bold"}>
              <MenuItem
                icon={<FaUserAlt size={16} />}
                _focus={{ bg: "#FFF" }}
                bg={"#FBBF24"}
              >
                My Account
              </MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>

        <div className="flex justify-center items-center gap-2 bg-amber-400 rounded-md px-4 py-2" >
          <IoFastFood size={24} />
          <h1 className="font-bold">ROAPP </h1>
        </div>

        <button className=" bg-amber-400 rounded-md p-2 mr-8">
          <FaShoppingCart size={24} />
        </button>
      </nav>

      <main className="p-2">
        <ProductList />
      </main>
    </>
  );
};

export default Home;
