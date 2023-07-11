import React, { useContext } from "react";
import {
  Avatar,
  Icon as NBIcon,
  Center,
  Image,
  Spinner,
  VStack,
  Text,
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import { SearchContext } from "../../context";

export default function PersonProfile({ personData = undefined }) {
  const { isSearching } = useContext(SearchContext);

  return (
    <Center flex={"1"} w={"20%"}>
      {personData == undefined ? (
        <Center
          borderWidth={1}
          borderRadius={50}
          borderColor={"primary.700"}
          backgroundColor={"primary.300"}
          opacity={50}
          size={20}
        >
          {isSearching ? (
            <Spinner />
          ) : (
            <NBIcon
              as={<Icon name={"plus"} />}
              size={"xl"}
              color={"primary.700"}
            />
          )}
        </Center>
      ) : (
        <Center
          borderWidth={1}
          borderRadius={50}
          borderColor={"primary.700"}
          size={20}
        >
          <Avatar h={"100%"} w={"100%"} />
        </Center>
      )}
      <Text color={"primary.700"}>Buscando</Text>
    </Center>
  );
}
