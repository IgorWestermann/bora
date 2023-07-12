import React, { useEffect, useState } from "react";
import { VStack } from "native-base";
import {
    requestForegroundPermissionsAsync,
    getCurrentPositionAsync,
    watchPositionAsync,
    LocationAccuracy,
} from "expo-location";
import MapView from "react-native-maps";

import Inputs from "./components/Inputs";
import Party from "./components/Party";

export default () => {
    const [origin, setOrigin] = useState(null);
    const [destination, setDestination] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const requestPermission = async () => {
            const options = await requestForegroundPermissionsAsync();

            if (options.granted) {
                const currentLocation = await getCurrentPositionAsync();
                setOrigin(currentLocation);
                setIsLoading(false);
            }
        };

        requestPermission();
    }, []);

    useEffect(() => {
        const positionOptions = {
            accuracy: LocationAccuracy.High,
            timeInterval: 5000,
            distanceInterval: 5,
        };

        const positionCallback = (res) => {
            setOrigin(res);
        };

        const watchPosition = watchPositionAsync(
            positionOptions,
            positionCallback
        );

        return () => {
            watchPosition.remove();
        };
    }, []);

    return (
        <VStack flex={1} alignItems="center">
            <Inputs top={0} />
            {origin ? (
                <MapView
                    style={{
                        flex: 1,
                        width: "100%",
                    }}
                    showsUserLocation={true}
                    initialRegion={{
                        latitude: origin.coords.latitude,
                        longitude: origin.coords.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003,
                    }}
                />
            ) : null}

            <Party mx={2} position={"absolute"} bottom={4} />
        </VStack>
    );
};
