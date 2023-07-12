import React, { useState } from "react";
import {
    VStack,
    HStack,
    FormControl,
    Input,
    Button,
    Text,
    Center,
    Alert,
    WarningOutlineIcon,
    Box,
} from "native-base";

import SplashSvg from "../../../../assets/splash.svg";
export default ({ navigation }) => {
    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({
        email: null,
    });

    const handleSubmit = () => {
        const err = {};
        if (!email) err.email = "Campo obrigatório";

        if (Object.keys(err).length) {
            setErrors(err);
            return;
        }

        setEmailSent(true);
    };

    return (
        <VStack
            flex="1"
            space="5"
            paddingX="10"
            paddingY="20"
            bgColor="white"
            justifyContent="start"
        >
            {emailSent ? (
                <Center>
                    <Alert maxW="400" status="success" colorScheme="success">
                        <VStack space={2} flexShrink={1} w="100%">
                            <HStack
                                flexShrink={1}
                                space={2}
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <HStack
                                    flexShrink={1}
                                    space={2}
                                    alignItems="center"
                                >
                                    <Alert.Icon />
                                    <Text
                                        fontSize="md"
                                        fontWeight="medium"
                                        color="coolGray.800"
                                    >
                                        Email enviado!
                                    </Text>
                                </HStack>
                            </HStack>
                            <Box
                                pl="6"
                                _text={{
                                    color: "coolGray.600",
                                }}
                            >
                                Em alguns instantes você receberá um email com
                                os próximos passos
                            </Box>
                        </VStack>
                    </Alert>
                    <Button
                        w="50%"
                        variant="link"
                        onPress={() => navigation.navigate("SignIn")}
                    >
                        Voltar
                    </Button>
                </Center>
            ) : (
                <>
                    <HStack justifyContent="center" alignItems="center">
                        <SplashSvg width="120" height="120" />
                    </HStack>
                    <VStack space="3">
                        <Text>
                            Insira seu email que foi usado no cadastro para
                            enviarmos o link de redefinição de senha
                        </Text>
                        <FormControl
                            isRequired
                            w="100%"
                            isInvalid={!!errors.email}
                        >
                            <FormControl.Label>Email</FormControl.Label>
                            <Input
                                value={email}
                                onChangeText={setEmail}
                                type="text"
                                placeholder="seu@email.com"
                            />
                            {!!errors.email && (
                                <FormControl.ErrorMessage
                                    leftIcon={<WarningOutlineIcon size="xs" />}
                                >
                                    {errors.email}
                                </FormControl.ErrorMessage>
                            )}
                        </FormControl>
                        <HStack>
                            <Button
                                w="50%"
                                variant="link"
                                onPress={() => navigation.navigate("SignIn")}
                            >
                                Voltar
                            </Button>
                            <Button w="50%" onPress={handleSubmit}>
                                Enviar
                            </Button>
                        </HStack>
                    </VStack>
                </>
            )}
        </VStack>
    );
};
