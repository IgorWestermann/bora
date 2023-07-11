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

export default function MyProfile({ personData = undefined }) {
  const { isSearching } = useContext(SearchContext);

  return (
    <Center flex={"1"} w={"25%"}>
      <Center
        borderWidth={2}
        borderRadius={50}
        borderColor={"primary.700"}
        backgroundColor={"primary.300"}
        opacity={50}
        size={20}
      >
        <Avatar />
      </Center>
      <Text color={"primary.700"}>Eu</Text>
    </Center>
  );
}
