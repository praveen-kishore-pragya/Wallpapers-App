import {SafeAreaView, Text} from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link } from "expo-router";

export default function AccountInfo(){
    return (
        <SafeAreaView>
            <Link href={"/Account"}>
                <FontAwesome size={28}  name="arrow-left"/>
            </Link>
            
            <Text> Hello</Text>
        </SafeAreaView>
    )
}