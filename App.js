import { NativeBaseProvider, extendTheme } from "native-base";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes";
import { ContextProvider, SearchProvider } from "./src/Providers/context";

export default function App() {
    const theme = extendTheme({
        colors: {
            primary: {
                50: "#f1f2f4",
                100: "#d9dbe1",
                200: "#b6bac5",
                300: "#8e95a5",
                400: "#646e84",
                500: "#3c4764",
                600: "#343d58",
                700: "#2b324b",
                800: "#222a3f",
                900: "#191f32",
            },
        },
    });
    return (
        <ContextProvider>
            <SearchProvider>
                <NativeBaseProvider theme={theme}>
                    <StatusBar
                        barStyle="dark-content"
                        backgroundColor="transparent"
                    />
                    <Routes />
                </NativeBaseProvider>
            </SearchProvider>
        </ContextProvider>
    );
}
