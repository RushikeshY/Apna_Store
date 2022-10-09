import { Box, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getItemList } from "../Redux/App/actions";

const ItemList = () => {
  const stock = useSelector((state) => state.app.itemData);
  const loading = useSelector((state) => state.app.loading);
  const error = useSelector((state) => state.app.error);
  //console.log(stock);

  const [searchParams] = useSearchParams();

  const location = useLocation();
  const dispatch = useDispatch();

  //console.log(searchParams);
  useEffect(() => {
    if (stock?.length === 0 || location) {
      const getAllParams = {
        params: {
          category: searchParams.getAll("category"),
        },
      };
      dispatch(getItemList(getAllParams));
    }
  }, [location]);

  return (
    <>
      {loading && (
        <Image
          ml={400}
          mt={100}
          src="https://media.tenor.com/gJLmlIn6EvEAAAAC/loading-gif.gif"
        />
      )}
      {error && (
        <Image
          ml={200}
          src="https://media3.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif"
          alt=""
        />
      )}
      {stock?.map((el) => (
        <Link key={el.id} to={`/item/${el.id}`}>
          {el.qty === 0 ? (
            <Box
              rounded={10}
              bg={"gray.500"}
              p={5}
              mt={5}
              w={250}
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              }
            >
              <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                  {" "}
                  <Text p={1} bg={"whiteAlpha.800"} color={"blackAlpha.800"}>
                    Out of Stock
                  </Text>
                </Box>
                <Box display={"flex"} mb={4} justifyContent={"flex-end"}>
                  {Number(el.qty) <= 50 ? (
                    <Box m={1} h={5} bg={"red"} w={5} rounded={"50%"}></Box>
                  ) : (
                    <Box m={1} h={5} bg={"white"} w={5} rounded={"50%"}></Box>
                  )}

                  {Number(el.qty) <= 200 && Number(el.qty) > 50 ? (
                    <Box m={1} h={5} bg={"yellow"} w={5} rounded={"50%"}></Box>
                  ) : (
                    <Box m={1} h={5} bg={"white"} w={5} rounded={"50%"}></Box>
                  )}

                  {Number(el.qty) > 200 ? (
                    <Box m={1} h={5} bg={"green"} w={5} rounded={"50%"}></Box>
                  ) : (
                    <Box m={1} h={5} bg={"white"} w={5} rounded={"50%"}></Box>
                  )}
                </Box>
              </Box>
              <Image
                w={40}
                h={40}
                m={"auto"}
                src={
                  el.image
                    ? el.image
                    : "data:image/png;base64,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"
                }
                alt="item_image"
              />
              <Text mt={4} textAlign={"center"} fontWeight={"bold"}>
                {el.name}
              </Text>
              <Box display={"flex"} justifyContent={"center"}>
                <Text>{el.qty} </Text> -<Text>{el.unit}</Text>
              </Box>
              <Text textAlign={"center"}>{el.category}</Text>
            </Box>
          ) : (
            <Box
              rounded={10}
              bg={"whiteAlpha.700"}
              // p={5}
              // pr={5}
              // pl={5}
              pb={5}
              mt={5}
              w={250}
              boxShadow={
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"
              }
            >
              <Box display={"flex"} mb={4} mt={0}>
                {Number(el.qty) <= 50 && (
                  <Box
                    h={7}
                    bg={"red"}
                    w={"100%"}
                    borderRadius="10px 10px 0px 0px"
                    color="white"
                    textAlign={"center"}
                    fontWeight={600}
                  >
                    Low Stock
                  </Box>
                )}

                {Number(el.qty) < 200 && Number(el.qty) > 50 && (
                  <Box
                    h={7}
                    bg={"yellow"}
                    w={"100%"}
                    textAlign={"center"}
                    borderRadius="10px 10px 0px 0px"
                    color="black"
                    fontWeight={600}
                  >
                    Medium Stock
                  </Box>
                )}

                {Number(el.qty) >= 200 && (
                  <Box
                    h={7}
                    bg={"green"}
                    w={"100%"}
                    color="white"
                    textAlign={"center"}
                    borderRadius="10px 10px 0px 0px"
                    fontWeight={600}
                  >
                    High Stock
                  </Box>
                )}
              </Box>
              {el.image ? (
                <Image
                  w={40}
                  h={40}
                  m={"auto"}
                  src={el.image}
                  alt="item_image"
                />
              ) : (
                <Image
                  w={40}
                  h={40}
                  m={"auto"}
                  src={
                    "https://img.freepik.com/free-vector/cute-shopping-cart-logo_23-2148453859.jpg?w=2000"
                  }
                  alt="item_image"
                />
              )}

              <Text mt={4} textAlign={"center"} fontWeight={"bold"}>
                {el.name}
              </Text>
              <Box display={"flex"} justifyContent={"center"}>
                <Text>{el.qty} </Text> -<Text>{el.unit}</Text>
              </Box>
              <Text textAlign={"center"}>{el.category}</Text>
            </Box>
          )}
        </Link>
      ))}
    </>
  );
};

export default ItemList;
