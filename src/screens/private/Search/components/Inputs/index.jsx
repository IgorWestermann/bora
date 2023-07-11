import React, { useContext } from "react";
import {
  Center,
  Column,
  Divider,
  Heading,
  Input,
  StatusBar,
  Text,
  VStack,
  Icon as NBIcon,
  Button,
} from "native-base";

import Icon from "react-native-vector-icons/FontAwesome5";
import { SearchContext } from "../../context";

export default function Inputs({ props }) {
  const { toggleSearch, isSearching } = useContext(SearchContext);

  return (
    <Column
      w={"90%"}
      borderWidth={1}
      borderColor={"primary.700"}
      borderBottomRadius={8}
      backgroundColor={"white"}
      pt={10}
      px={5}
      pb={5}
    >
      <StatusBar />
      <Text color={"primary.700"}>Origem</Text>
      <Input
        leftElement={
          <NBIcon
            as={<Icon name={"map-pin"} />}
            size={15}
            ml={2}
            color={"primary.700"}
          />
        }
      />
      <Divider my={2} />
      <Text color={"primary.700"}>Destino</Text>
      <Input
        leftElement={
          <NBIcon
            as={<Icon name={"map-pin"} />}
            size={15}
            ml={2}
            color={"primary.700"}
          />
        }
      />

      <Button
        my={2}
        backgroundColor={"primary.700"}
        w={"100%"}
        onPress={() => {
          toggleSearch();
        }}
      >
        <Text color={"white"}>
          {isSearching ? "Cancelar" : "Encontrar Pessoas"}
        </Text>
      </Button>
    </Column>
  );
}
