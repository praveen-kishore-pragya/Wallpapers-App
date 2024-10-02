import { Link, Slot } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Layout(){
    return(
        <SafeAreaView>
            
            <View style={{height : "90%"}}>
                <Slot/>
            </View>



            <View style={{backgroundColor : "yellow"}}>
                <Link href={"/"}>
                    <Text>Go to For You</Text>
                </Link>
                
                <Link href={"/Explore"}>
                    <Text>Go to Explore</Text>
                </Link>

                <Link href={"/Account"}>
                    <Text>Go to Acoount</Text>
                </Link>
            </View>
            
        </SafeAreaView>

    )
}