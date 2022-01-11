import React, { useEffect ,VFC} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types/types'

//
type Props = NativeStackScreenProps<RootStackParamList, 'FlexBox'>;

export const FlexBoxScreen: VFC<Props>  = ({ navigation }) => {
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
