import {
  Box,
  Button,
  color,
  HStack,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  addQtyFunction,
  getItemList,
  removeItemFunction,
  sellQtyFunction,
} from "../Redux/App/actions";
import { TriangleDownIcon, TriangleUpIcon, DeleteIcon } from "@chakra-ui/icons";
import HomeNav from "../Components/HomeNav";

const ItemPage = () => {
  const { id } = useParams();
  console.log(id);

  const dispatch = useDispatch();

  // const navigate = useNavigate();
  const stock = useSelector((state) => state.app.itemData);
  const loading = useSelector((state) => state.app.loading);
  const error = useSelector((state) => state.app.error);
  //console.log(stock) ;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState({});
  const [sellFlag, setSellFlag] = useState(false);
  const [addFlag, setAddFlag] = useState(false);
  const [removeFlag] = useState(false);
  const [sellQty, setSellQty] = useState("");
  const [addQty, setAddQty] = useState("");

  useEffect(() => {
    if (stock?.length === 0) {
      dispatch(getItemList());
    }
  }, [stock?.length, dispatch]);

  useEffect(() => {
    if (id) {
      const filterItem = stock.find((el) => el.id === Number(id));
      filterItem && setData(filterItem);
    }
  }, [stock, id]);

  const sellItem = () => {
    const calculation = Number(data.qty - Number(sellQty));
    if (calculation >= 0) {
      const sellDataQty = {
        qty: calculation,
      };
      dispatch(sellQtyFunction(id, sellDataQty));
    } else {
      alert("Not Have Enough Stock...!!");
      // navigate(`/item/${data.id}`)
    }
  };

  const addItem = () => {
    const addDataQty = {
      qty: Number(data.qty) + Number(addQty),
    };
    console.log(id);
    dispatch(addQtyFunction(id, addDataQty));
  };

  const removeItem = () => {
    dispatch(removeItemFunction(id));
  };
  //console.log(data);

  return (
    <>
      <Box fontFamily={"monospace"} h={800} id="mainConatiner">
        <Text
          fontSize={"4xl"}
          pt={10}
          pb={4}
          textAlign={"center"}
          color={"skyblue"}
        >
          {" "}
          Name :{data.name}
        </Text>

        {loading ? (
          <Image
            ml={520}
            src="https://media.tenor.com/gJLmlIn6EvEAAAAC/loading-gif.gif"
          />
        ) : (
          <Box display={"flex"} justifyContent={"center"}>
            <Image
              width={250}
              src={
                data.image
                  ? data.image
                  : "data:image/png;base64,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"
              }
            />
          </Box>
        )}

        <Box display={"flex"} w={"23%"} m={"auto"} pl={"60px"} mt={10}>
          <Text fontSize={"2xl"} textAlign={"center"}>
            {" "}
            Quantity : {data.qty}
          </Text>
          <Text fontSize={"2xl"} textAlign={"center"}>
            {data.unit}
          </Text>
        </Box>

        <Box w={"25%"} pt={8} m={"auto"} pl={"20px"}>
          <HStack>
            {!sellFlag && !addFlag && !removeFlag && (
              <>
                <Button
                  onClick={() => setSellFlag(true)}
                  colorScheme="yellow"
                  leftIcon={<TriangleDownIcon />}
                >
                  SELL
                </Button>
                <Button
                  onClick={() => setAddFlag(true)}
                  colorScheme="green"
                  leftIcon={<TriangleUpIcon />}
                >
                  ADD
                </Button>
                <>
                  <Button
                    onClick={onOpen}
                    colorScheme="red"
                    leftIcon={<DeleteIcon />}
                  >
                    Remove
                  </Button>
                  <Modal
                    closeOnOverlayClick={false}
                    isOpen={isOpen}
                    onClose={onClose}
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>ALERT</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody pb={6}>
                        <Text>
                          Do You Really Want to Remove This Item from Stock...??
                        </Text>
                      </ModalBody>

                      <ModalFooter>
                        <Link to={"/home"}>
                          <Button
                            colorScheme="blue"
                            onClick={removeItem}
                            mr={3}
                          >
                            Yes
                          </Button>
                        </Link>
                        <Button onClick={onClose}>Cancel</Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </>
              </>
            )}
            {sellFlag && (
              <>
                <Input
                  type={"text"}
                  onChange={(e) => setSellQty(e.target.value)}
                  placeholder={"enter sell quantity"}
                  _placeholder={{ color: "white" }}
                />
                <Link to={"/home"} s>
                  <Button onClick={sellItem}>SOLD</Button>
                </Link>
              </>
            )}

            {addFlag && (
              <>
                <Input
                  type={"text"}
                  onChange={(e) => setAddQty(e.target.value)}
                  placeholder={"enter add quantity"}
                  _placeholder={{ color: "white" }}
                />
                <Link to={"/home"}>
                  <Button onClick={addItem}>ADD</Button>
                </Link>
              </>
            )}
          </HStack>
          <Link to={`/home`}>
            <Button mt={10} ml={"92px"}>
              GO BACK
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ItemPage;
