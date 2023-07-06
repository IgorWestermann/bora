import React from "react";
import { VStack, HStack, Spinner } from "native-base";

import SplashSvg from "../../../../assets/splash.svg";
export default () => {
    return (
        <VStack
            flex="1"
            space="5"
            paddingX="10"
            paddingY="10"
            bgColor="white"
            justifyContent="center"
        >
            <HStack justifyContent="center" alignItems="center">
                <SplashSvg width="320" height="320" />
            </HStack>

            <Spinner size="lg" />
        </VStack>
    );
};
