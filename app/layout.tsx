import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen name="index" options={{title: "Home"}} />
            <Stack.Screen name="tela1" options={{title: "Tela 1"}} />
            <Stack.Screen name="login/[id]" options={{title: "Login", headerTintColor: "red"}} />
        </Stack>
    );
}