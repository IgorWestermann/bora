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
import { SearchContext } from "../../../../../Providers/context";

export default function PersonProfile({ personData = undefined }) {
  const { isSearching } = useContext(SearchContext);

  const getLabel = () =>{
    if(personData != undefined ){
        return personData.fullName
    }else if(isSearching){
        return "Buscando"
    }else{
        return "Convidar"
    }
  }
  return (
    <Center flex={"1"} w={"15%"}>
      {personData == undefined ? (
        <Center
          borderWidth={1}
          borderRadius={50}
          borderColor={"primary.700"}
          backgroundColor={"primary.300"}
          opacity={50}
          size={'16'}
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
          size={'16'}
        >
          <Avatar source={personData.avatarUrl} h={"100%"} w={"100%"} />
        </Center>
      )}
      <Text color={"primary.700"}>{getLabel()}</Text>
    </Center>
  );
}
