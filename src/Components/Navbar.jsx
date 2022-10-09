import { Box, Button, Image } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/login");
  };

  const handleSignUp = () => {
    navigate("/signup");
  };
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      height={130}
      alignItems="center"
      p={2}
      pl={8}
      pr={8}
      bg={""}
    >
      <Image
        width={"280px"}
        boxShadow={
          "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
        }
        style={{ margin: "20px", cursor: "pointer" }}
        src={require("../Utils/images/logo.png")}
        alt=""
      />
      <Box width={200} display="flex" justifyContent="space-around">
        <Button
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          }
          onClick={handleSignIn}
          colorScheme="orange"
          variant="solid"
        >
          Sign-In
        </Button>
        <Button
          boxShadow={
            "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
          }
          onClick={handleSignUp}
          colorScheme="green"
          color={"white"}
          variant="solid"
        >
          Sign-Up
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
