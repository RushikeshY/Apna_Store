import {
  Box,
  Button,
  Image,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import "./style.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FilterComponent from "../Components/FilterComponent";
import HomeNav from "../Components/HomeNav";
import {
  addItemSuccess,
  addItemToList,
  getItemList,
} from "../Redux/App/actions";
import ItemList from "./ItemList";
// import { nanoid } from "nanoid";

const HomePage = () => {
  // useSelector

  const stock = useSelector((state) => state.app.itemData);
  const loading = useSelector((state) => state.app.loading);
  const error = useSelector((state) => state.app.error);

  // setValues

  const [name, setName] = useState("");
  const [qty, setQty] = useState(0);
  const [unit, setUnit] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [debounce, setdebounce] = useState("");
  const [radio, setRadio] = useState("");
  const [id, setId] = useState(0);
  const [data, setData] = useState();

  const dispatch = useDispatch();

  // GetItem Dispatch

  useEffect(() => {
    dispatch(getItemList());
  }, [dispatch]);

  useEffect(() => {
    if (radio !== "") {
      console.log(radio);
      if (radio === "50") {
        const getAllParams = {
          params: {
            qty_lte: 50,
          },
        };
        console.log("low");
        dispatch(getItemList(getAllParams));
      } else if (radio === "200") {
        const getAllParams = {
          params: {
            qty_lte: 199,
            qty_gte: 51,
          },
        };
        console.log("mid");
        dispatch(getItemList(getAllParams));
      } else if (radio === "2000") {
        const getAllParams = {
          params: {
            qty_gte: 200,
          },
        };
        console.log("high");
        dispatch(getItemList(getAllParams));
      } else {
        dispatch(getItemList());
      }
    }
  }, [radio]);

  useEffect(() => {
    if (debounce !== "") {
      const getAllParams = {
        params: {
          q: debounce,
        },
      };
      dispatch(getItemList(getAllParams));
    }
  }, [debounce, dispatch]);

  const navigate = useNavigate();

  const handleAdd = () => {
    //console.log(typeof(qty))
    if (name !== "") {
      const filterName = stock.find((el) => el.name === name);
      filterName && setId(filterName);

      if (filterName) {
        alert("Product already exists...!!");
        navigate(`/item/${filterName.id}`);
      } else {
        let itemData = {
          name: name,
          qty: Number(qty),
          unit: unit,
          category: category,
          image: image,
          id: Date.now(),
        };
        console.log(itemData);
        dispatch(addItemToList(itemData));

        setName("");
        setQty(0);
        setUnit("");
        setCategory("");
        setImage("");
      }
    }
  };
  const handleChange = (qty) => setQty(qty);

  return (
    <>
      
      {error && (
        <Image
          ml={200}
          src="https://media3.giphy.com/avatars/404academy/kGwR3uDrUKPI.gif"
          alt=""
        />
      )}

      <Box
        display={"flex"}
        height="auto"
        width="100%"
        id="mainConatiner"

      >
        <Box width={"100%"} margin={"auto"}>
          <HomeNav />
          {/* SEARCH BAR */}
          <Box margin={"auto"}>
            <Input
              width={400}
              color={"white"}
              mb={5}
              mt={8}
              id="search"
              ml={"35%"}
              border={"1px solid white"}
              onChange={(e) => setdebounce(e.target.value)}
              placeholder="Search item here..."
              _placeholder={{ color: "white" }}
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            />
          </Box>
          <Box
            w={"92%"}
            id="addData"
            p={10}
            display={"flex"}
            m={"auto"}
            gap={2}
            borderRadius={"10px"}
            border={"1px solid skyblue"}
            fontWeight={"900"}
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
          >

            <Select
              fontWeight={"600"}
              w={500}
              autosize={true}
              className="select"
              variant="outline"
              onChange={(e) => setName(e.target.value)}
              placeholder="Select Product"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            >
              {/* BISCUITS */}
              <option value={"PARLE-G"}>PARLE-G</option>
              <option value={"GoodDay"}>GOOD DAY</option>
              <option value={"Monocco"}>MONOCCO</option>
              <option value={"Marie Gold"}>Marie Gold</option>
              <option value={"Hide N Seek"}>Hide n Seek</option>
              {/* Dairy Products */}
              <option value={"Milk"}>Milk</option>
              <option value={"Butter Milk"}>Butter Milk</option>
              <option value={"Ghee"}>Ghee</option>
              {/* Edible Oil */}
              <option value={"Sunflower Oil"}>Sunflower Oil</option>
              <option value={"Soyabean"}>Soyabean</option>
              <option value={"Saffola"}>Saffola</option>
              {/* Bath & Handwash */}
              <option value={"Soap"}>Soap</option>
              <option value={"Dettol Liquid"}>Dettol Liquid</option>
              <option value={"Handwash"}>Handwash</option>
              {/* Skin Care */}
              <option value={"Face Wash"}>Face Wash</option>
              <option value={"Face Cream"}>Face Cream</option>
              <option value={"Face Pack"}>Face Pack</option>
              {/* Instant Foods */}
              <option value={"Maggie"}>Maggie</option>
              <option value={"Poha"}>Poha</option>
              <option value={"Dal Khichdi"}>Dal Khichdi</option>
            </Select>
            {/* SELECT QUANTITY */}
            <NumberInput
              fontWeight={"600"}
              size="md"
              className="select"
              placeholder={"write quantity..."}
              width={200}
              onChange={handleChange}
              defaultValue={qty}
              min={1}
              autosize={true}
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            {/* SELECT CATEGORIES */}
            <Select
              className="select"
              fontWeight={"600"}
              w={500}
              variant="outline"
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Select Category"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            >
              <option value={"Biscuits & Cookies"}>Biscuits & Cookies</option>
              <option value={"Dairy Products"}>Dairy Products</option>
              <option value={"Edible Oil"}>Edible Oil</option>
              <option value={"Bath & Handwash"}>Bath & Handwash</option>
              <option value={"Skin Care"}>Skin Care</option>
              <option value={"Instant Foods"}>Instant Foods</option>
            </Select>
            {/* SELECT UNIT */}
            <Select
              className="select"
              w={500}
              fontWeight={"600"}
              variant="outline"
              onChange={(e) => setUnit(e.target.value)}
              placeholder="Select Unit"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            >
              <option value={"KG"}>KG</option>
              <option value={"LTR"}>LTR</option>
              <option value={"PCS"}>PCS</option>
            </Select>
            <Select
              w={500}
              fontWeight={"600"}
              className="select"
              variant="outline"
              onChange={(e) => setImage(e.target.value)}
              placeholder="Select Photo"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            >
              <option
                value={
                  "https://www.bigbasket.com/media/uploads/p/xxl/102102-2_6-parle-gluco-biscuits-parle-g.jpg"
                }
              >
                PARLE G
              </option>
              <option
                value={
                  "https://www.bigbasket.com/media/uploads/p/l/100012341-2_7-britannia-good-day-butter-cookies.jpg"
                }
              >
                GOOD DAY
              </option>
              <option
                value={
                  "https://www.bigbasket.com/media/uploads/p/xxl/100114531-2_11-parle-monaco.jpg"
                }
              >
                MONOCCO
              </option>
              <option
                value={
                  "https://newassets.apollo247.com/pub/media/catalog/product/b/r/bri0111_ni1.jpg"
                }
              >
                Marie Gold
              </option>
              <option
                value={
                  "https://m.media-amazon.com/images/I/71cw2JLKmvL._SL1200_.jpg"
                }
              >
                Hide n Seek
              </option>

              <option
                value={
                  "https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/06/22/839541-milk-plastic-bags.jpg"
                }
              >
                Milk
              </option>
              <option
                value={
                  "https://assets.bonappetit.com/photos/5e13b2b92d05bc000840342a/master/pass/HLY-Priya-Buttermilk.jpg"
                }
              >
                Butter Milk
              </option>
              <option
                value={
                  "https://www.bigbasket.com/media/uploads/p/xxl/214784_5-amul-amul-pure-ghee-1-l.jpg"
                }
              >
                Ghee
              </option>

              <option
                value={
                  "https://m.media-amazon.com/images/I/51ZpgsEo+8L._SY300_SX300_.jpg"
                }
              >
                Sunflower Oil
              </option>
              <option
                value={
                  "https://www.bigbasket.com/media/uploads/p/l/40174333_4-tirumalla-refined-soyabean-oil.jpg"
                }
              >
                Soyabean
              </option>
              <option
                value={
                  "data:image/jpeg;base64,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"
                }
              >
                Saffola
              </option>

              <option
                value={
                  "https://www.jiomart.com/images/product/600x600/491390879/dettol-original-soap-75-g-pack-of-4-product-images-o491390879-p491390879-0-202203150038.jpg"
                }
              >
                Soap
              </option>
              <option
                value={
                  "https://www.netmeds.com/images/product-v1/600x600/835057/dettol_antiseptic_liquid_550_ml_0_1.jpg"
                }
              >
                Dettol Liquid
              </option>
              <option
                value={
                  "https://www.bigbasket.com/media/uploads/p/xxl/270177_11-dettol-instant-hand-sanitizer-liquid-gel-original-kills-germs-alcohol-based-non-sticky.jpg"
                }
              >
                Handwash
              </option>

              <option
                value={
                  "https://m.media-amazon.com/images/I/71iB238C14L._SL1500_.jpg"
                }
              >
                Face Wash
              </option>
              <option
                value={
                  "https://i.gadgets360cdn.com/products/dry-skin-cream-large-22373-39394-1584532648.jpg"
                }
              >
                Face Cream
              </option>
              <option
                value={
                  "https://m.media-amazon.com/images/I/51wTl5OuanL._SY355_.jpg"
                }
              >
                Face Pack
              </option>

              <option
                value={
                  "https://static.connect2india.com/c2icd/product_resources/images/maggie-noodles.jpg"
                }
              >
                Maggie
              </option>
              <option
                value={"https://www.aashirvaad.com/img/instantmeal/poha/1.jpg"}
              >
                Poha
              </option>
              <option
                value={
                  "https://m.media-amazon.com/images/I/51qWWuEHKvL._SX522_.jpg"
                }
              >
                Dal Khichdi
              </option>
            </Select>{" "}
            <Button
              fontWeight={"600"}
              width={20}
              onClick={handleAdd}
              colorScheme="whatsapp"
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
            >
              ADD
            </Button>
          </Box>
          <Box
            bgColor={"WhiteAlpha.700"}
            w={"98%"}
            borderRadius={"10px"}
            display={"flex"}
            justifyContent={"space-around"}
            border={"1px solid skyblue"}
            margin={"auto"}
            boxShadow={
              "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
            }
            pl={4}
            pr={4}
            mt={5}
            mb={5}
          >
            <Box
              w={200}
              border={"1px solid skyblue"}
              mb={5}
              mt={20}
              id="filterbox"
              borderRadius={"10px"}
              boxShadow={
                "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
              }
              bgColor={"whites"}
              padding={4}
              width={"260px"}
            >
              <Text
                textAlign={"center"}
                pt={6}
                pb={3}
                fontWeight={"bold"}
                fontSize={"large"}
                color={"skyblue"}
              >
                {" "}
                STOCK STATUS
              </Text>
              {/* RADIO COMPONENT */}
              <RadioGroup
                onClick={(e) => setRadio(e.target.value)}
                mt={1}
                color={"white"}
                defaultValue="4"
              >
                <Stack spacing={1} direction="column">
                  <Radio size={"lg"} colorScheme="white" value={"all"}>
                    All List
                  </Radio>
                  <Radio size={"lg"} colorScheme="red" value={"50"}>
                    Low Stock List
                  </Radio>
                  <Radio size={"lg"} colorScheme="yellow" value={"200"}>
                    Medium Stock List
                  </Radio>
                  <Radio size={"lg"} colorScheme="green" value={"2000"}>
                    High Stock List
                  </Radio>
                </Stack>
              </RadioGroup>
              {/* FILTER COMPONENT */}
              <FilterComponent />
            </Box>
            <Box mt={5} ml={5}>
              <Text
                fontSize={"2xl"}
                color={"skyblue"}
                fontWeight={"bold"}
                textAlign={"center"}
              >
                STORE ITEMS LIST
              </Text>
              <br />

              <SimpleGrid
                backgroundColor={"skyblue"}
                overflow={"scroll"}
                height="550px"
                mb={4}
                padding={10}
                w={"100%"}
                columns={3}
                spacing={5}
                boxShadow={
                  "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                }
                borderRadius={"10px"}
                id="items"
              >
                <ItemList />
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
export default HomePage;
