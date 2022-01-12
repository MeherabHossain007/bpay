import React from "react";
import {
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useColorModeValue,
  Flex,
  Image,
  Avatar,
  Stack,
  Text,
} from "@chakra-ui/react";
import Title from "../components/Title";
import Form from "../components/FeaturePage";
import EbillData from "../components/EbillData";

function billBoard() {
  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        align={"center"}
      >
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image
            alt={"Logo"}
            objectFit={"none"}
            className="img-responsive"
            src={
              "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/logo.png?alt=media&token=9b826346-add6-41f8-9d81-dcb3d64cf71f"
            }
          />
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
          align={"center"}
        >
          <Text>meherab788</Text>
          <Avatar size={"md"} />
        </Stack>
      </Flex>
      <Title />
      <Tabs
        isFitted
        variant="soft-rounded"
        align={"center"}
        colorScheme={"none"}
      >
        <TabList>
          <Tab maxWidth={"250px"}>
            {" "}
            <Image
              rounded={"lg"}
              boxSize="50px"
              objectFit="contain"
              src={
                "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Asset%203.png?alt=media&token=6aa9f6cc-b6dd-45ce-a6af-338b878b013b"
              }
            />
          </Tab>
          <Tab maxWidth={"250px"}>
            {" "}
            <Image
              rounded={"lg"}
              boxSize="50px"
              objectFit="contain"
              src={
                "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Asset%201.png?alt=media&token=12600ea4-39b5-4b70-87e5-f6bacec0c3da"
              }
            />
          </Tab>
          <Tab maxWidth={"250px"}>
            {" "}
            <Image
              rounded={"lg"}
              boxSize="50px"
              objectFit="contain"
              src={
                "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/Asset%202.png?alt=media&token=df72e4bc-90db-4a42-a5e9-3ef9fb392831"
              }
            />
          </Tab>
          <Tab maxWidth={"250px"}>
            {" "}
            <Image
              rounded={"lg"}
              boxSize="50px"
              objectFit="contain"
              src={
                "https://firebasestorage.googleapis.com/v0/b/bpay-b1197.appspot.com/o/wifi.png?alt=media&token=1253c45a-4031-467b-b472-a0668313bf48"
              }
            />
          </Tab>
        </TabList>
        <TabPanels bg={"white"}>
          <TabPanel>
            <Text
              fontFamily={"Raleway"}
              fontWeight={"extrabold"}
              textAlign={"start"}
              fontSize={"80px"}
              color={"gray.500"}
            >
              Electricity Bill .
            </Text>
            <EbillData />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default billBoard;
