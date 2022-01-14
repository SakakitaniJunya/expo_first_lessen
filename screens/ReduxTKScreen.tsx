import React, {useEffect, VFC, useState} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn';
import { FontAwesome } from '@expo/vector-icons'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types/types'
import { Button, Input } from 'react-native-elements'
import { useDispatch, useSelector} from 'react-redux';
import {
    increment,
    decrement,
    addByPayload,
    selectCount,
} from '../slices/counterSlice';

type Props = NativeStackScreenProps<RootStackParamList, 'ReduxTK'>;


const ReduxTKScreen: VFC<Props> = ({ navigation }) => {
    const [amount, setAmount] = useState('0');
    const count = useSelector(selectCount);
    const dispatch = useDispatch();

    //数値型にキャスト
        //数値型以外ものもが渡された時は0を渡す。
    const incrementAmount = Number(amount) || 0;

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
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text>Redux ToolKit {count}</Text>
            <View style={tw('my-3')}>
                <Button
                    title="Go to FlexBox"
                    onPress={() => navigation.navigate('FlexBox')}
                 />
            </View>
            <View style={tw('my-1')}>
                <Button title="increment" onPress={() => dispatch(increment())} />
            </View>
            <View style={tw('my-1')}>
                <Button title="drecrement" onPress={() => dispatch(decrement())}/>
            </View>
        {/* 好きなアイコンを使うことができる */}
            <Input
                placeholder="type add number"
                leftIcon={<FontAwesome name="pencil" size={24} color="gray" />}
                value={amount}
                onChangeText={(txt:string) => setAmount(txt)}
            />
            <View style={tw('my-1')}>
                <Button
                    title="increment by amount"
                    onPress={() => {
                        dispatch(addByPayload(incrementAmount));
                        setAmount('0');
                    }}
                />
            </View>
        </View>

    )
}
export default ReduxTKScreen
