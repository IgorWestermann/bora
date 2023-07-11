import React from "react";
import { VStack, Text, Button } from "native-base";
import Inputs from "../Search/components/Inputs";
import Party from "../Search/components/Party";
import { ChatView } from "./ChatView";

export default () => {
  return (
    <VStack flex={1} alignItems="center">
      <Text>Seu time foi montado!</Text>
      <Party />
      <Inputs />
      <ChatView />
    </VStack>
  );
};
