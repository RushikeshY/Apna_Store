import React from "react";
import { Box, Image } from "@chakra-ui/react";
//import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";

const LandingPage = () => {
  return (
    <>
      <Navbar />

      <Box display="flex"  >
        <Box >
          <Box
            fontSize="30px"
            fontWeight={"700"}
            w={600}
            mt={"30px"}
            ml={"140px"}
            textAlign={"left"}
          >
            Are You Tired of Managing Your Inventory/Resources?
          </Box>
          <Box
            fontSize="24px"
            fontWeight={"500"}
            w={600}
            mt={"40px"}
            ml={"140px"}
            textAlign={"left"}
          >
            Here We Brings The Solution For Your Resource Management
          </Box>

          {/* Solutions */}

          <Box
            display="flex"
            w={"600px"}
            ml={"90px"}
            mt="30px"
            fontSize="16px"
            fontWeight={"600"}
            alignItems="center"
          >
            <Image
              h={"30px"}
              w={"30px"}
              mr={5}
              src="data:image/png;base64,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"
            />
            Spend No More Time To Re-evaluate Your Inventory/Stock
          </Box>
          <Box
            display="flex"
            w={"600px"}
            ml={"90px"}
            mt="10px"
            fontSize="16px"
            fontWeight={"600"}
            alignItems="center"
          >
            <Image
              h={"30px"}
              w={"30px"}
              mr={5}
              src="data:image/png;base64,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"
            />
            Get Automated & Latest Inventory Requirement as per Current Stock
            Requirement
          </Box>
          <Box
            display="flex"
            w={"600px"}
            ml={"90px"}
            mt="10px"
            fontSize="16px"
            fontWeight={"600"}
            alignItems="center"
          >
            <Image
              h={"30px"}
              w={"30px"}
              mr={5}
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAhFBMVEX///8A1AAA0QD3/vf6/vrS9dL9//3w/PCy7rKg6qDN9M3i+eLk+eTc99zp+unz/fNX3VcY1hhk32Sl66XG8sab6Zu88LyP549T3VO477iB5IFN3E0o1yiK5oo52TnH88d34ndr4Gt643o12TXW9taF5YWu7a5E20RW3VaV6JVg32Cc6Zy95VGgAAAHdElEQVR4nOWd60LiMBCFTQBRQRBcxSsWXWV13//9lkIR2mbOREg6zez3d1XmbEIyl2RycqKc2y8zf5E2Ijb9pTXG2EtpO+LSMxsyaUOi8mELmU/SlsTkeavSGGlTIjLdqZxI2xKN7nyn0nxJWxOLkdnDXkubE4meLcnsS9sTh7Oyygdpe+IwK6nUup1MyyqNyinbXZZV2p60RTEYTcpDaT+kLYpBrzJhdS4/ZxWV5lHaohjMqionp9ImRWBRVWlH0iZFYFlTeSFtUnjGT6aqUqErO6iKNDaTtik8F9UJa8xS2qbw1DaSFV1po4JT20hWU3YobVRwMofKX9JGBefKofJG2qjQnM4dKhfSVoWmP6mJNGYubVVo6ttlTkfarMBU467NlB1ImxWYW6fKW2mzAnPtVDmTNiswDqdgpVJbhv3VpdK8SZsVmGqasmAsbVdY7pwq7W9pu8LicH2Mumxlp5Yp2KjMpA0LitPBM9oC6ZFbpDIfb0iI1OXjXbo3EmPvpS0LyW9K5bO0ZSFxZPA23ElbFpIXSqWqYokz8FpPWU3FElc2dqNSUx7vg1SpKcQkx1LV8kOr1LT80Co1lRGASkUZLqDyXdq2cNAqNQVf97RKRVVM0vdRdSeB9GNXKs+kjQuGs0xSqHyVNi4YVBSdoyf1PAQq9aSeyeyW0XSGq49UqglLOkQ+do2esMSdWy9Q4xc8oimrxi+onY7dV6nmcOU7UjmVti4U52jDVHODD7jrivIFwJFVVC0ZQJWZtHmBGAORim62QbdATR3hD1SpJZJ+gF9MLSdlnQfxvtGyY8KtRM35AhRhKnJl4SKrpn/BFVRplJS+PvEXU0mM+QurPJe2LwwjqFJN8gcvP1pO5BHHnbdTVslhEez9aCmXoFqJUePkdfH3Ustegv0CLfcU8RdTywEDmPvR070JlYT0ZPJQGWGFkoQBTD0bLXEJTleq6d6E6nt6Dqsxe4kS94eJvrS4P3OsUsk5ihs8mErqJfB0k55C5htWqcRjh5V3NWfy+syUVVJJYBwDJassOttt1Kyy/0leJMMqlVw7/T9SedyWqST8YgKTLPgHjnqXzcfn3aYzBn/sivl5w8mzVzxlg19vK95fsPauyVoM47JfBf/AXbXNms/GhpTxf8LbUfrz9quZ926aL0svKx8xuWlgSHHBNoaX91D7v7TT2PdYwHVME6mDk6v7hZ2cR62Aw7E0WZTPdNYvrF3Ec0OY/E+cCybUDLJP13GGFHsG0Q6SLslPtIsYX5NnKDNaM1KUEF4Naeg51JE6yQV3MWtfw34yHsws6GeVIXuaFEqXAeuoYzyYUS+4Ya8k9wNnoZwGdCcq+nnZvrvX4p4BgZYj/M2Mn+Xq1R5mqCmdBwiP4FHSRlIGF+6+kvtmmKMnFfyIhg4/3054obOjrqfDakJzF2muGZn5lzQ7whr4lxtMWXbdPXzL9iwOrcfh0CSoEI4Buxblt2EPE4rizMZ7y96bSELJloc5AiUT7JAVQrMfewzomKVIT4rhm4/Q95+5ZjCdJ/TgF1NI3uj8WdUc5WbF6l/9Rx+hxj+7C8NpweOHePnfCn30XYvQ/BC9YjvmHPqNiQ9+BQ/4JyIrYWDqVoWRXjMXBXtxw0wPhk9eQr/47BiZclr9+mcDShhgHLyzlEvIweJ0I0IYLnxkGnuHBxTsJi25ytd1vGDlApaZ0C82JYSDyZNvRwXc4wJngFp0YbrnNZx2Qu6hYAFqzWCu6HiEZ4a+MgLc2ZY97uETtZAb/XMag5nDJXMLnY8unwj8fLsG86T+8jVF3T9F/0MCQhhOfYIWV7n5i/7Z9iyze3gkxEz9WA8KwWR0cDBVJfcY0b/UEgeojucOWkorgE1TSgYL9R5SRede0EHXidsQmlB02VpLRQHtKtpWt2zwcuXt3+2P00lo4aQBh9eCu9346Uiz9XemvUKWor8G7ei1/zYxc7mi0LlOvtL/nMB1GtBUfo8+6kGWRGcc3EKt4Mlx9vF7MJs51HoszA2LjZQpPWdTuYJBPbZX0kl67e2LwChwUzwOaev9GXtGoC5SuhwFG8xD0uq/erDOxBogHqgzuXchDtOZym6y4xCdrc0aAA7Q2e5Ak4BpheOg/bGJC/QIjXMwE72EyvQcq5LsJXjqAWL3YCa4ABXA83hVmW1PjgD8Kklrwt9CbRCv01LrwUz7xUzc+XkPaUOPJPPT2fLsLI/f4bf0m43g1hQb0vPaa3Q8BrPF5SFveLdPRxsyNn2rpEEXd0syXUevDHydJmlHr8wdkqmkDXQOuDzUzgMyhwGy8WmlZxno5VbJOltAXcbQ0tVyC/EcRgoF6h/hXoYU+LNl3GeelLS13MOVNInSCkiYmUOntE0xqJ9ITDPZzlALPrW8EVGhmru1R/VMaC+V2w7RWh5JU2pOryI94qTUBDvVOpgHpd1T2piI7KWoky6dcOzmrJYskJPvyqeCbDvi2+mTNiQyRcUhsXNdP2YTk2lKdrlZd09Q/tXMyZ0hK21EfPJpK9Qpp1H+WoX5EQdvWt62xQy0xpoVZLeTf0XHTMHqFCuBAAAAAElFTkSuQmCC"
            />
            Get an Alert When Stocks Goes Below Minimum Requirement
          </Box>
        </Box>
        <Box mr={"40px"} mt={"30px"}>
          <Image
            h={450}
            src="https://www.orangescrum.com/blog/wp-content/uploads/2019/09/how-to-maximise-productivity-at-workplace_v1.png"
          />
        </Box>
      </Box>

      <Box
        display="flex"
        w={"600px"}
        ml={"140px"}
        mb={10}
        mt="-60px"
        fontSize="20px"
        fontWeight={"600"}
        alignItems="center"
      >
        Let's Sign-Up To Grow Faster...!!
        {/* <Button onClick={handleSignUp} ml={2} colorScheme="red">Sign-Up</Button> */}
      </Box>
    </>
  );
};

export default LandingPage;
