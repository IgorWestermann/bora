import React, { useEffect, useState } from "react";
import {
    VStack,
    Text,
    Avatar,
    ScrollView,
    Image,
    HStack,
    Center,
    Button,
    Divider,
    // Icon,
} from "native-base";
import { Alert, SafeAreaView } from "react-native";
import { gallery } from "../../../Mocks/gallery";
import { friends, myProfile } from "../../../Mocks/friends";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome5";

export default ({ navigation, ...rest }) => {
    const [loading, setLoading] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);

    const searchedProfileId = rest?.route?.params?.searchedProfileId;

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
                            source={myProfile.avatarUrl}
                        />
                        <Text fontSize="28" color="muted.700">
                            {myProfile.fullName}
                        </Text>
                    </HStack>
                    <Text fontSize="md" color="muted.600">
                        {myProfile.description}
                    </Text>

                    <Text fontSize="28" color="muted.700">
                        Fotos
                    </Text>
                    <HStack justifyContent="space-evenly">
                        <Image
                            source={require("../../../../assets/chapeusdepalha.jpg")}
                            alt="Alternate Text"
                            size="xl"
                        />
                        <Image
                            source={require("../../../../assets/sunny.png")}
                            alt="Alternate Text"
                            size="xl"
                        />
                        <Image
                            source={require("../../../../assets/luffymeat.jpg")}
                            alt="Alternate Text"
                            size="xl"
                        />
                    </HStack>
                    <VStack py={4}>
                        <Text fontSize="28" color="muted.700">
                            Sua nota
                        </Text>
                        <HStack pt={4} justifyContent="space-around">
                            <Icon size="24" color="primary.400" name="star" />
                            <Icon size="24" color="primary.400" name="star" />
                            <Icon size="24" color="primary.400" name="star" />
                            <Icon
                                size="24"
                                color="primary.400"
                                name="star-half"
                            />
                        </HStack>
                    </VStack>
                    <Text fontSize="28" color="muted.700">
                        Comentários Recentes
                    </Text>
                    {getComments().map((user) => (
                        <>
                            <HStack alignItems="center" key={user.id}>
                                <Avatar
                                    bg="purple.600"
                                    size="64px"
                                    source={user.avatarUrl}
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
                            <Divider />
                        </>
                    ))}
                </VStack>
            </ScrollView>
        </SafeAreaView>
    );
};
