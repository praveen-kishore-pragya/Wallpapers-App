import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Image, SafeAreaView, Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function() {

    const SuggestedScreen = () =>{
        return (
            <View>
                <Text>Suggested Page</Text>
            </View>
        )
    }
    
    const LikedScreen = () =>{
        return (
            <View>
                <Text>Liked Page</Text>
            </View>
        )
        
    }
    
    const LibraryScreen = () =>{
        return (
            <View>
                <Text>Library Page</Text>
            </View>
        )
    }


    return (
            <Tab.Navigator>
                <Tab.Screen name="Suggested" component={SuggestedScreen} />
                <Tab.Screen name="Liked" component={LikedScreen} />
                <Tab.Screen name="Library" component={LibraryScreen} />
            </Tab.Navigator>
    );
}