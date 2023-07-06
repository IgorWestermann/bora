import React from "react";
import { VStack, Button, Center, ScrollView } from "native-base";

export default () => {
    return (
        <ScrollView bgColor="white">
            <VStack space="5" paddingX="10" paddingY="10">
                <Center mt="5">
                    <Button w="100%">Cria conta</Button>
                </Center>
            </VStack>
        </ScrollView>
    );
};
