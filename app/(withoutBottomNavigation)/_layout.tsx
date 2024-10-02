import { Slot } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function WithoutBottomNavigationLayout(){
    return (
        <SafeAreaView style={{backgroundColor : "aqua"}}>
            <Slot/>
        </SafeAreaView>
    )
}