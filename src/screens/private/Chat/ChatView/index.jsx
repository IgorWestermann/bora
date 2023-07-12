import React, { useContext, useMemo } from "react";
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
    HStack,
    Container,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

import { SearchContext } from "../../../../Providers/context";
import { myProfile } from "../../../../Mocks/friends";
import { useState } from "react";

export function ChatView() {
    const { users } = useContext(SearchContext);
    const [messageInput, setMessageInput] = useState("");

    const handleSubmitMessage = () => {
        if (messageInput.trim() !== "") {
            const newMessage = {
                id: -1,
                mensagem: messageInput,
            };
            setMessageInput("");
            mensagens.push(newMessage);
        }
    };

    const mensagens = useMemo(
        () => [
            {
                id: -1,
                mensagem: "Onde tá o Luffy???",
            },
            {
                id: 2,
                mensagem:
                    "Luffy??? Que tal nos encontrarmos no Ichiraku Ramen? Assim podemos aproveitar para comer antes de partir.",
            },
            {
                id: 1,
                mensagem:
                    "Concordo. O Ichiraku é um bom ponto de encontro. Estarei lá.",
            },
            {
                id: 0,
                mensagem:
                    "Perfeito! Também estarei no Ichiraku. Vejo vocês lá, pessoal!",
            },
            {
                id: -1,
                mensagem: "Acho que me perdi de novo",
            },
        ],
        []
    );

    const renderItem = ({ item }) => {
        if (item.id === -1) {
            return (
                <Container width="80%" alignSelf="flex-end">
                    <HStack
                        alignItems="center"
                        key={item.id}
                        flexDirection="row-reverse"
                        backgroundColor="primary.100"
                        borderRadius={2}
                        borderWidth={0.3}
                        borderColor="primary.200"
                        ml="auto"
                        p={2}
                        m={2}
                        space={2}
                    >
                        <Avatar source={myProfile.avatarUrl} />
                        <VStack>
                            <Text fontWeight="bold" alignSelf="flex-end">
                                Rei dos Piratas
                            </Text>
                            <Text>{item.mensagem}</Text>
                        </VStack>
                    </HStack>
                </Container>
            );
        } else {
            return (
                <Container width="80%">
                    <HStack
                        alignItems="center"
                        key={item.id}
                        borderRadius={2}
                        borderWidth={0.3}
                        borderColor="primary.200"
                        mr="auto"
                        p={2}
                        m={2}
                        space={1}
                    >
                        <Avatar source={users[item.id]?.avatarUrl} />
                        <VStack pl={2}>
                            <Text fontWeight="bold">
                                {users[item.id]?.fullName}
                            </Text>
                            <Text>{item.mensagem}</Text>
                        </VStack>
                    </HStack>
                </Container>
            );
        }
    };

    return (
        <VStack flex={1} w="95%">
            <Text>Valor da corrida: R$ 10,00</Text>
            <Divider my={1} />
            <FlatList
                borderColor="primary.700"
                borderRadius={2}
                borderWidth={1}
                minH="80%"
                my={2}
                pr={2}
                data={mensagens}
                renderItem={renderItem}
                keyExtractor={(item, index) => String(index)}
            />

            <Row
                pt={2}
                backgroundColor="primary.50"
                justifyContent="space-between"
            >
                <Input
                    w="80%"
                    pl={2}
                    placeholder="Digite sua mensagem..."
                    variant="underlined"
                    value={messageInput}
                    onChangeText={setMessageInput}
                />
                <IconButton
                    w="15%"
                    borderColor="primary.200"
                    borderRadius={2}
                    borderWidth={0.5}
                    onPress={handleSubmitMessage}
                    icon={
                        <Icon
                            size="6"
                            color="primary.400"
                            as={<MaterialIcons name="send" />}
                        />
                    }
                />
            </Row>
        </VStack>
    );
}
