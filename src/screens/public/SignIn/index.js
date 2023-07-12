import React, { useContext, useState } from "react";
import {
    VStack,
    Button,
    FormControl,
    Input,
    WarningOutlineIcon,
    HStack,
    Alert,
    Box,
    Text,
    useToast,
} from "native-base";
import SplashSvg from "../../../../assets/splash.svg";

import { Context } from "../../../Providers/context";

const allowedUsers = [
    {
        email: "admin@email.com",
        password: "123456",
    },
    {
        email: "usuario1@email.com",
        password: "123456",
    },
];

export default ({ navigation }) => {
    const { setIsLogged } = useContext(Context);
    const toast = useToast();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        email: null,
        password: null,
    });

    const handleLogin = () => {
        const err = {};

        if (!email) err.email = "Campo obrigatório";
        if (!password) err.password = "Campo obrigatório";

        if (Object.keys(err).length) {
            setErrors(err);
            return;
        }

        if (
            allowedUsers.some(
                (user) => email === user.email && password === user.password
            )
        ) {
            setIsLogged(true);
        } else {
            toast.show({
                title: "Credenciais inválidas",
                placement: "bottom",
            });
        }
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
            <HStack justifyContent="center" alignItems="center">
                <SplashSvg width="120" height="120" />
            </HStack>
            <Alert
                maxW="400"
                status="info"
                colorScheme="info"
                collapsable={false}
            >
                <VStack space={2} flexShrink={1} w="100%">
                    <HStack
                        flexShrink={1}
                        space={2}
                        alignItems="center"
                        justifyContent="space-between"
                    >
                        <HStack flexShrink={1} space={2} alignItems="center">
                            <Alert.Icon />
                            <Text
                                fontSize="md"
                                fontWeight="medium"
                                color="coolGray.800"
                            >
                                Aviso!
                            </Text>
                        </HStack>
                    </HStack>
                    <Box
                        pl="6"
                        _text={{
                            color: "coolGray.600",
                        }}
                    >
                        Para propósito de teste, insira as seguintes
                        credenciais:
                    </Box>
                    <Box
                        pl="6"
                        _text={{
                            color: "black",
                        }}
                    >
                        email: admin@email.com
                    </Box>
                    <Box
                        pl="6"
                        _text={{
                            color: "black",
                        }}
                    >
                        senha: 123456
                    </Box>
                </VStack>
            </Alert>
            <VStack space="3">
                <FormControl isRequired w="100%" isInvalid={!!errors.email}>
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
                <FormControl isRequired w="100%" isInvalid={!!errors.password}>
                    <FormControl.Label>Senha</FormControl.Label>
                    <Input
                        value={password}
                        type="password"
                        onChangeText={setPassword}
                        placeholder="**"
                    />
                    {!!errors.password && (
                        <FormControl.ErrorMessage
                            leftIcon={<WarningOutlineIcon size="xs" />}
                        >
                            {errors.password}
                        </FormControl.ErrorMessage>
                    )}
                </FormControl>
                <Button w="100%" marginTop={10} onPress={handleLogin}>
                    Entrar
                </Button>
                <Button
                    w="100%"
                    variant="outline"
                    onPress={() => navigation.navigate("SignUp")}
                >
                    Cadastrar
                </Button>
                <Button
                    w="100%"
                    variant="link"
                    onPress={() => navigation.navigate("ForgetPassword")}
                >
                    Esqueci minha senha
                </Button>
            </VStack>
        </VStack>
    );
};
