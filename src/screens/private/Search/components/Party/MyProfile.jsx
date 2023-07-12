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


export default function MyProfile({ personData = undefined }) {

  return (
    <Center flex={"1"} w={"20%"}>
      <Center
        borderWidth={2}
        borderRadius={50}
        borderColor={"primary.700"}
        backgroundColor={"primary.300"}
        size={20}
      >
        <Avatar w={"100%"} h={"100%"} source={perfilInfo.image} />
      </Center>
      <Text color={"primary.700"}>Eu</Text>
    </Center>
  );
}
