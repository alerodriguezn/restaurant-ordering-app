import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuDivider,
    MenuGroup,
  } from "@chakra-ui/react";
  
  import { MdAdminPanelSettings, MdAssignmentLate, MdAssignmentTurnedIn, MdCancel, MdFastfood } from "react-icons/md";
  import { TiThMenu } from "react-icons/ti";
  import {
    FaShoppingCart,
    FaUserAlt,
  } from "react-icons/fa";


const AdminNavbar = () => {
  return (
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
          <MenuGroup title="Orders" className="">
            <MenuItem
              icon={<MdAssignmentLate size={18} />}
              _focus={{ bg: "#FFF" }}
              bg={"#FBBF24"}
            >
              Pending
            </MenuItem>
            <MenuItem
              icon={<MdAssignmentTurnedIn size={18} />}
              _focus={{ bg: "#FFF" }}
              bg={"#FBBF24"}
            >
              Completed
            </MenuItem>
            <MenuItem
              icon={<MdCancel size={18} />}
              _focus={{ bg: "#FFF" }}
              bg={"#FBBF24"}
            >
              Canceled
            </MenuItem>
            
          </MenuGroup>
          <MenuDivider borderColor={"#171923"} />
          <MenuGroup title="Products" color={"#171923"} fontWeight={"bold"}>
            <MenuItem icon={<MdFastfood size={18} />} _focus={{ bg: "#FFF" }} bg={"#FBBF24"}>
                All  Products
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

      <div className="flex justify-center items-center gap-2 bg-amber-400 rounded-md px-4 py-2">
        <MdAdminPanelSettings size={24} />
        <h1 className="font-bold">ROAPP Admin Panel </h1>
      </div>

      <button className=" bg-amber-400 rounded-md p-2 mr-8">
        <FaShoppingCart size={24} />
      </button>
    </nav>
  )
}

export default AdminNavbar