import React, { useState } from "react";
import {
    Avatar,
    Box,
    Button,
    Center,
    FlatList,
    HStack,
    Heading,
    Icon,
    Input,
    Pressable,
    Spacer,
    Text,
    VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { friends } from "../../../Mocks/friends";

export default ({ navigation, ...rest }) => {
    const [searchText, setSearchText] = useState("");

    const filteredFriends = friends.filter((friend) =>
        friend.fullName.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <VStack flex="1" paddingY="8" bgColor="muted.100">
            <Box>
                <HStack pt="4" p="0" justifyContent="space-between">
                    <Heading fontSize="xl" p="4" pl="10" pb="3">
                        Amigos
                    </Heading>
                    <Input
                        placeholder="Procurar"
                        width="70%"
                        py="3"
                        fontSize="14"
                        variant="unstyled"
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                        InputRightElement={
                            <Button size="sm" variant="ghost">
                                <Icon
                                    m="2"
                                    ml="3"
                                    size="6"
                                    color="gray.400"
                                    as={<MaterialIcons name="search" />}
                                />
                            </Button>
                        }
                    />
                </HStack>
                <FlatList
                    data={filteredFriends}
                    renderItem={({ item }) => (
                        <Pressable
                            onPress={() =>
                                navigation.navigate("OtherUserProfile", {
                                    searchedProfileId: item.id,
                                    isFriend: true,
                                })
                            }
                            overflow="hidden"
                            borderWidth="0.5"
                            borderColor="coolGray.200"
                            bg="coolGray.100"
                        >
                            {({ isPressed }) => {
                                return (
                                    <Box
                                        bg={
                                            isPressed
                                                ? "coolGray.200"
                                                : "coolGray.100"
                                        }
                                        style={{
                                            transform: [
                                                {
                                                    scale: isPressed ? 0.96 : 1,
                                                },
                                            ],
                                        }}
                                        p="5"
                                    >
                                        <HStack>
                                            <Center w="20">
                                                <Avatar
                                                    size="48px"
                                                    source={{
                                                        uri: item.avatarUrl,
                                                    }}
                                                />
                                            </Center>
                                            <Center w="40">
                                                <Text color="coolGray.800" bold>
                                                    {item.fullName}
                                                </Text>
                                            </Center>
                                            <Spacer />
                                            <Center w="5">
                                                <Text
                                                    fontSize="xs"
                                                    color="coolGray.800"
                                                    alignSelf="flex-start"
                                                >
                                                    <Icon
                                                        as={MaterialIcons}
                                                        name="navigate-next"
                                                    />
                                                </Text>
                                            </Center>
                                        </HStack>
                                    </Box>
                                );
                            }}
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </Box>
        </VStack>
    );
};
