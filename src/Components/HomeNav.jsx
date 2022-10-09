import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,

} from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const HomeNav = () => {
  const navigate = useNavigate();

  const shopName = JSON.parse(localStorage.getItem("ShopName"));

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={2}
      pl={8}
      pr={8}
      bg={"transperent"}
    >
      <NavLink to={"/home"}>
        <img
          width={"280px"}
          style={{ margin: "20px" }}
          src={require("../Utils/images/logo.png")}
          alt={""}
        />
      </NavLink>
      <Box width={200} display="flex" justifyContent="space-around">
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            {shopName}
          </MenuButton>
          <MenuList>
            <MenuItem>Profile</MenuItem>
            <Link to={"/"}>
              <MenuItem>Logout</MenuItem>
            </Link>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default HomeNav;
