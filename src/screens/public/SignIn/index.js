import React, { useContext, useState } from "react";
import { VStack, Button } from "native-base";

import { Context } from "../../../Providers/context";

export default ({ navigation }) => {
    const { setIsLogged } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Email:", email);
        console.log("Password:", password);

        setIsLogged(true);
    };

    return (
        <VStack
            flex="1"
            space="5"
            paddingX="10"
            paddingY="10"
            bgColor="white"
            justifyContent="center"
        >
            <VStack space="3">
                <Button w="100%" onPress={() => handleLogin()}>
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
