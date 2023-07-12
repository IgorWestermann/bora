import React from "react";
import { Center, FlatList, Input, VStack } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

export function ChatView() {
  return (
    <VStack flex={'1'} w = '90%'>
      <FlatList backgroundColor={"red.400"} minH={"70%"} />
      <Center>
        <Input />
        <Icon name={"send"} />
      </Center>
    </VStack>
  );
}
