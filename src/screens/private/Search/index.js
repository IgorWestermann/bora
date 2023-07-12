import React, { useEffect, useState } from "react";
import { VStack, Text, ZStack } from "native-base";
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    LocationAccuracy,
} from "expo-location";
import MapView, { Marker } from "react-native-maps";

import Inputs from "./components/Inputs";
import Party from "./components/Party";

export default () => {
    const [location, setLocation] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        requestPermission();
    }, []);

    useEffect(() => {
        watchPositionAsync(
            {
                accuracy: LocationAccuracy.High,
                timeInterval: 10000,
                distanceInterval: 5,
            },
            (res) => {
                setLocation(res);
            }
        );
    });

    const requestPermission = async () => {
        const options = await requestForegroundPermissionsAsync();

        if (options.granted) {
            const currentLocation = await getCurrentPositionAsync();
            setLocation(currentLocation);
            setIsLoading(false);
        }
    };

    return (
        <VStack flex={1} alignItems="center">
            <Inputs top={0} />
            {location == undefined ? null : (
                <MapView
                    style={{
                        flex: 1,
                        width: "100%",
                    }}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.05,
                        longitudeDelta: 0.05,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                        }}
                    />
                </MapView>
            )}

            <Party mx={2} position={"absolute"} bottom={4} />
        </VStack>
    );
};
