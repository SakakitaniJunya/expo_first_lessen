import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailWind-rn'

const FlexBoxScreen = () => {
    //マウント時に実行
    useEffect(() => {
        //マウントされた時
        console.log('mounted FlexBox');
        //アンマウントされた時
        return () => {
            console.log('unmounted FlexBox');
        }
    }, []);
    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>FlexBoxScreen</Text>
        </View>
    )
}

export default FlexBoxScreen
