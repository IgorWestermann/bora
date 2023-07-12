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
import { useNavigation } from "@react-navigation/native";
import { SearchContext } from "../../../../../Providers/context";

export default function Inputs({ props }) {
    const { toggleSearch, isSearching, fullParty, resetSearch } =
        useContext(SearchContext);
    const navigation = useNavigation();

    const handleConfirm = async () => {
        navigation.navigate("Chat");
    };

    return (
        <Column
            w={"100%"}
            borderWidth={1}
            borderColor={"primary.700"}
            backgroundColor={"white"}
            pt={12}
            px={2}
            pb={2}
        >
            <StatusBar />
            {!isSearching && !fullParty ? (
                <>
                    <Input
                        placeholder="Origem"
                        h={10}
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
                    <Input
                        placeholder="Destino"
                        h={10}
                        leftElement={
                            <NBIcon
                                as={<Icon name={"map-pin"} />}
                                size={15}
                                ml={2}
                                color={"primary.700"}
                            />
                        }
                    />
                </>
            ) : null}

            {fullParty ? (
                <Column w={"100%"} mt={2}>
                    <Button.Group w={"100%"} justifyContent={"space-evenly"}>
                        <Button
                            w={"40%"}
                            colorScheme={"error"}
                            onPress={() => {
                                resetSearch();
                            }}
                        >
                            Cancelar
                        </Button>
                        <Button
                            w={"40%"}
                            colorScheme={"success"}
                            onPress={() => {
                                handleConfirm();
                            }}
                        >
                            Confirmar
                        </Button>
                    </Button.Group>
                </Column>
            ) : (
                <Button
                    mt={2}
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
            )}
        </Column>
    );
}
