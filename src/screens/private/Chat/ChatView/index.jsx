import React, { useContext } from "react";
import {
  Center,
  Divider,
  FlatList,
  IconButton,
  Input,
  Row,
  Text,
  Icon,
  VStack,
  Avatar,
} from "native-base";
import { SearchContext } from "../../../../Providers/context";
import { myProfile } from "../../../../Mocks/friends";

const mensagens = [
  {
    mensagem: "Olá, tudo bem?",
    flag: 1,
  },
  {
    mensagem: "Sim, estou bem. E você?",
    flag: 2,
  },
  {
    mensagem: "Estou ótimo! Obrigado por perguntar.",
    flag: 3,
  },
  {
    mensagem: "Que bom! Precisa de alguma ajuda?",
    flag: 4,
  },
  {
    mensagem: "Não, estou apenas fazendo um teste.",
    flag: 1,
  },
];

export function ChatView() {
  const { users } = useContext(SearchContext);

  return (
    <VStack flex={"1"} w="90%">
      <Text color={"primary.700"}>Chat</Text>
      <Divider my={1} />
      <FlatList
        borderColor={"primary.700"}
        borderRadius={4}
        borderWidth={1}
        minH={"70%"}
        my={1}
        data={mensagens}
        renderItem={({ item }) => {
          if (item.flag == 1) {
            return (
              <Row
                borderColor={"primary.700"}
                backgroundColor={"primary.300"}
                borderRadius={4}
                borderWidth={1}
                ml={"auto"}
                p={2}
                m={2}
                alignItems={"center"}
                space={2}
              >
                <Text>{item.mensagem}</Text>
                <Avatar source={myProfile.avatarUrl}/>
              </Row>
            );
          } else {
            return (
              <Row
                borderColor={"primary.700"}
                borderRadius={4}
                borderWidth={1}
                mr={"auto"}
                p={2}
                m={2}
                alignItems={"center"}
                space={2}
              >
                <Avatar source={users[item.flag]?.avatarUrl} />
                <Text>{item.mensagem}</Text>
              </Row>
            );
          }
        }}
      />

      <Row w={"100%"} justifyContent={"space-between"}>
        <Input
          w={"80%"}
          placeholder="digite sua mensagem..."
          variant={"underlined"}
        />
        <IconButton
          w={"10%"}
          borderColor={"primary.700"}
          borderRadius={4}
          borderWidth={1}
          icon={<Icon size={14} name={"chevron-left"} />}
        />
      </Row>
    </VStack>
  );
}
