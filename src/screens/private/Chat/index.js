import React from "react";
import { VStack, Text, Button, Heading, Row } from "native-base";
import Inputs from "../Search/components/Inputs";
import Party from "../Search/components/Party";
import { ChatView } from "./ChatView";

export default () => {
  return (
    <VStack flex={1} pt={20} alignItems={"center"}>
      <Row w={"90%"}>
        <Heading mb={2} color={"primary.700"}>
          Seu time foi montado!
        </Heading>
      </Row>
      <Party />
      <ChatView />
    </VStack>
  );
};
