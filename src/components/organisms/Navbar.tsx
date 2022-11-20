import { Flex, Heading, Image, Spacer } from "@chakra-ui/react";
import React from "react";
import RightContent from "../molecules/RightContent";

const Navbar: React.FC = () => {
  return (
    <Flex bg="white" height="55px" p="6px 12px">
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" />
        <Heading size="md" p="12px">
          Todo App
        </Heading>
      </Flex>
      <Spacer />
      <RightContent />
    </Flex>
  );
};
export default Navbar;
