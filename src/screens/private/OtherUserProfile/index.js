import React, { useEffect, useMemo, useState } from "react";
import {
    VStack,
    Text,
    Avatar,
    View,
    Divider,
    ScrollView,
    Image,
    HStack,
    Center,
    FlatList,
    Button,
    Icon,
} from "native-base";
import { Alert, SafeAreaView } from "react-native";
import { gallery } from "../../../Mocks/gallery";
import { friends } from "../../../Mocks/friends";
import { Ionicons } from "@expo/vector-icons";

export default ({ navigation, ...rest }) => {
    const [loading, setLoading] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [isAlreadyFriend, setIsAlreadyFriend] = useState(
        rest?.route?.params?.isFriend
    );

    const searchedProfileId = rest?.route?.params?.searchedProfileId;

    useEffect(() => {
        // setIsAlreadyFriend(!isAlreadyFriend);
    }, [isAlreadyFriend]);

    const getFriendById = (id) => {
        return friends.find((x) => x.id == id);
    };

    const getProfile = () => {
        const friendId = searchedProfileId;
        return getFriendById(friendId);
    };

    const getCommonFriendsData = () => {
        const friend = getProfile();
        if (!friend) {
            return [];
        }

        const commonFriendIds = friend.commonFriends;
        const commonFriendsData = [];

        const randomIndices = [];
        while (randomIndices.length < 3) {
            const randomIndex = Math.floor(
                Math.random() * commonFriendIds.length
            );
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        randomIndices.forEach((index) => {
            const commonFriendId = commonFriendIds[index];
            const commonFriend = getFriendById(commonFriendId);
            if (commonFriend) {
                const { avatarUrl, fullName, comment } = commonFriend;
                commonFriendsData.push({ avatarUrl, fullName, comment });
            }
        });

        return commonFriendsData;
    };

    function getComments() {
        const randomComments = [];
        const randomIndices = [];

        while (randomIndices.length < 3) {
            const randomIndex = Math.floor(Math.random() * friends.length);
            if (!randomIndices.includes(randomIndex)) {
                randomIndices.push(randomIndex);
            }
        }

        randomIndices.forEach((index) => {
            const friend = friends[index];
            const { avatarUrl, fullName, comment } = friend;
            randomComments.push({ avatarUrl, fullName, comment });
        });

        return randomComments;
    }

    const handleInviteFriendship = () => {
        setLoading(true);
        try {
            setTimeout(() => {
                Alert.alert(
                    "Sucesso!",
                    "Pedido de amizade enviado com sucesso!"
                );
                setLoading(false);
                setIsAlreadyFriend(true);
                setButtonClicked(true);
            }, 1000);
        } catch (err) {
            Alert.alert("Erro!", "Não foi possível solicitar amizade.");
        }
    };

    // const handleSendEvaluation = () => {
    //     try {
    //         Alert.alert("Sucesso!", "Avaliação enviada com sucesso!");
    //         navigation.goBack();
    //     } catch (err) {
    //         Alert.alert("Erro!", "Não foi possível enviar a avaliação.");
    //     }
    // };

    return (
        <SafeAreaView>
            <ScrollView>
                <VStack flex={1} px="4" pt="4" space={2}>
                    <HStack
                        pr="4"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Avatar
                            bg="purple.600"
                            alignSelf="center"
                            size="xl"
                            source={{
                                uri: getProfile().avatarUrl,
                            }}
                        />
                        <Text fontSize="3xl" color="muted.700">
                            {getProfile().fullName}
                        </Text>
                    </HStack>
                    <Text fontSize="md" color="muted.600">
                        {getProfile().description}
                    </Text>
                    {isAlreadyFriend && !buttonClicked ? (
                        loading ? (
                            <Button isLoading>Button</Button>
                        ) : (
                            <Button
                                size="lg"
                                variant="outline"
                                leftIcon={
                                    <Icon as={Ionicons} name="person-add" />
                                }
                                onPress={handleInviteFriendship}
                            >
                                Enviar solicitação de amizade
                            </Button>
                        )
                    ) : null}
                    <Text fontSize="3xl" color="muted.700">
                        Fotos
                    </Text>
                    <HStack justifyContent="space-evenly">
                        {gallery.map(({ uri }) => (
                            <Image
                                source={{
                                    uri: uri,
                                }}
                                alt="Alternate Text"
                                size="xl"
                            />
                        ))}
                    </HStack>
                    <Text fontSize="3xl" color="muted.700">
                        Amigos em comum
                    </Text>
                    <HStack justifyContent="space-around">
                        {getCommonFriendsData().map((friend) => (
                            <Center>
                                <Avatar
                                    bg="purple.600"
                                    alignSelf="center"
                                    size="48px"
                                    source={{
                                        uri: friend.avatarUrl,
                                    }}
                                />
                                <Text fontSize="sm" color="muted.600">
                                    {friend.fullName}
                                </Text>
                            </Center>
                        ))}
                    </HStack>
                    <Text fontSize="3xl" color="muted.700">
                        Comentários Recentes
                    </Text>
                    {getComments().map((user) => (
                        <HStack alignItems="center" key={user.id}>
                            <Avatar
                                bg="purple.600"
                                size="48px"
                                source={{
                                    uri: user.avatarUrl,
                                }}
                            />
                            <VStack pl="6">
                                <Text
                                    fontSize="sm"
                                    fontWeight="bold"
                                    color="muted.600"
                                >
                                    {user.fullName}
                                </Text>

                                <Text fontSize="sm" color="muted.500">
                                    {user.comment}
                                </Text>
                            </VStack>
                        </HStack>
                    ))}
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
};
