import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link as SignupLink } from "react-router-dom";

export default function Sign_In() {
  const navigate = useNavigate();

  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");

  const [flag, setFlag] = useState(false);

  const [home, setHome] = useState(false);

  const handleSignin = (e) => {
    e.preventDefault();
    let pass = JSON.parse(localStorage.getItem("Password"));
    let mail = JSON.parse(localStorage.getItem("Email"));
    console.log(pass);
    console.log(mail);

    if (passwordlog != pass || emaillog != mail) {
      setFlag(true);
      setHome(false);
      alert("Invalid username or password");
    } else {
      setHome(true);
      setFlag(false);
      // handleAuth(true);

      localStorage.setItem("token", true);
      alert("Login Sucessfull");
      navigate("/home");
    }
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
    }
  });

  return (
    <>
      <Flex
        id="login"
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  onChange={(e) => setEmaillog(e.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  onChange={(e) => setPasswordlog(e.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>

                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  onClick={handleSignin}
                >
                  Sign in
                </Button>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  gap={2}
                >
                  <Text fontSize={"lg"} color={"gray.600"}>
                    Don't have an account?
                  </Text>
                  <SignupLink to={"/signup"} style={{ color: "blue" }}>
                    Sign Up
                  </SignupLink>
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
