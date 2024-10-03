import BottomSheetCard from "@/components/BottomSheetCard";
import { useRef, useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native"

export default function Explore(){
    
    const [openBottomSheet, setOpenBottomSheet] = useState(false);

    return (
       <SafeAreaView style={{flex:1}}>
            <View style={{flex:1}}>
                <Button title="Open Bottom Modal" onPress={() => {setOpenBottomSheet(true)} }/>

                {openBottomSheet && <BottomSheetCard openSheet={openBottomSheet} onClose={() => {setOpenBottomSheet(false)}}/>}    
            </View>
       </SafeAreaView>
    );   
}
