import React, {useEffect, VFC} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types/types'
import { Button } from 'react-native-elements'

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;


const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
        //マウント時に実行
        useEffect(() => {
            //マウントされた時
            console.log('mounted Redux');
            //アンマウントされた時
            return () => {
                console.log('unmounted Redux');
            }
        }, []);
    return (
        <View style={tw('flex-1 bg-gray-300 justyfy-center items-center')}>
            <Text>Redux ToolKit</Text>
            <View style={tw('my-3')}>
                <Button
                    title="Go to FlexBox"
                    onPress={() => navigation.navigate('FlexBox')}
                 />
            </View>
        </View>
    )
}
export default ReduxTKScreen
