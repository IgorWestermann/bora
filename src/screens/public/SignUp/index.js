import React, { useContext, useState } from "react";
import {
    VStack,
    Button,
    ScrollView,
    FormControl,
    Input,
    WarningOutlineIcon,
    HStack,
    Text,
} from "native-base";
import SplashSvg from "../../../../assets/splash.svg";

import { Context } from "../../../Providers/context";
export default ({ navigation }) => {
    const { setIsLogged } = useContext(Context);

    const [state, setState] = useState({
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirmation: null,
        birthday: null,
        phoneNumber: null,
        cpf: null,
    });

    const [errors, setErrors] = useState({
        password: null,
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirmation: null,
        birthday: null,
        phoneNumber: null,
        cpf: null,
    });

    const handleChange = (input) => (value) => {
        setState((prev) => ({ ...prev, [input]: value }));
    };

    const handleSignUp = () => {
        const err = {};

        Object.entries(state).forEach(([key, value]) => {
            if (!value) err[key] = "Campo obrigatório";
        });

        if (Object.keys(err).length) {
            setErrors(err);
            return;
        }

        setIsLogged(true);
    };

    return (
        <ScrollView bgColor="white">
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
                <VStack space="3">
                    <HStack space={2} justifyContent="center">
                        <FormControl
                            isRequired
                            w="50%"
                            isInvalid={!!errors.firstName}
                        >
                            <FormControl.Label>Nome</FormControl.Label>
                            <Input
                                value={state.firstName}
                                onChangeText={handleChange("firstName")}
                                type="text"
                                placeholder="Fulano"
                            />
                            {!!errors.firstName && (
                                <FormControl.ErrorMessage
                                    leftIcon={<WarningOutlineIcon size="xs" />}
                                >
                                    {errors.firstName}
                                </FormControl.ErrorMessage>
                            )}
                        </FormControl>
                        <FormControl
                            isRequired
                            w="50%"
                            isInvalid={!!errors.lastName}
                        >
                            <FormControl.Label>Sobrenome</FormControl.Label>
                            <Input
                                value={state.lastName}
                                onChangeText={handleChange("lastName")}
                                type="text"
                                placeholder="Silva"
                            />
                            {!!errors.lastName && (
                                <FormControl.ErrorMessage
                                    leftIcon={<WarningOutlineIcon size="xs" />}
                                >
                                    {errors.lastName}
                                </FormControl.ErrorMessage>
                            )}
                        </FormControl>
                    </HStack>
                    <FormControl isRequired w="100%" isInvalid={!!errors.email}>
                        <FormControl.Label>Email</FormControl.Label>
                        <Input
                            value={state.email}
                            onChangeText={handleChange("email")}
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
                    <FormControl
                        isRequired
                        w="100%"
                        isInvalid={!!errors.password}
                    >
                        <FormControl.Label>Senha</FormControl.Label>
                        <Input
                            value={state.password}
                            type="password"
                            onChangeText={handleChange("password")}
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
                    <FormControl
                        isRequired
                        w="100%"
                        isInvalid={!!errors.passwordConfirmation}
                    >
                        <FormControl.Label>Confirmar senha</FormControl.Label>
                        <Input
                            value={state.passwordConfirmation}
                            type="password"
                            onChangeText={handleChange("passwordConfirmation")}
                            placeholder="**"
                        />
                        {!!errors.passwordConfirmation && (
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                                {errors.passwordConfirmation}
                            </FormControl.ErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        isRequired
                        w="100%"
                        isInvalid={!!errors.birthday}
                    >
                        <FormControl.Label>
                            Data de aniversário
                        </FormControl.Label>
                        <Input
                            value={state.birthday}
                            type="text"
                            onChangeText={handleChange("birthday")}
                            placeholder="01/01/2000"
                        />
                        {!!errors.birthday && (
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                                {errors.birthday}
                            </FormControl.ErrorMessage>
                        )}
                    </FormControl>
                    <FormControl
                        isRequired
                        w="100%"
                        isInvalid={!!errors.phoneNumber}
                    >
                        <FormControl.Label>
                            Número de telefone
                        </FormControl.Label>
                        <Input
                            value={state.phoneNumber}
                            onChangeText={handleChange("phoneNumber")}
                            placeholder="32988888888"
                        />
                        {!!errors.phoneNumber && (
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                                {errors.phoneNumber}
                            </FormControl.ErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired w="100%" isInvalid={!!errors.cpf}>
                        <FormControl.Label>CPF</FormControl.Label>
                        <Input
                            value={state.cpf}
                            onChangeText={handleChange("cpf")}
                            placeholder="11811211303"
                        />
                        {!!errors.cpf && (
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}
                            >
                                {errors.cpf}
                            </FormControl.ErrorMessage>
                        )}
                    </FormControl>
                    <Button w="100%" marginTop={5} onPress={handleSignUp}>
                        Criar conta
                    </Button>
                    <Button
                        w="100%"
                        variant="outline"
                        onPress={() => navigation.navigate("SignIn")}
                    >
                        Já tem conta? Faça login
                    </Button>
                </VStack>
            </VStack>
        </ScrollView>
    );
};
