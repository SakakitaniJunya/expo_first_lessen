import React, { useEffect , VFC} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types/types'

type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;


const HelloScreen: VFC<Props> = ({ navigation }) => {
    //マウント時に実行
    useEffect(() => {
        //マウントされた時
        console.log('mounted Hello');
        //アンマウントされた時
        return () => {
            console.log('unmounted Hello');
        }
    }, []);
    return (
        <View style={tw('flex-1 bg-gray-300 justyfy-center items-center')}>
            <Text>Hello</Text>
        </View>
    )
}

export default HelloScreen
