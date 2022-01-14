import React, { useEffect , useState, useCallback, VFC} from 'react'
import { View, Text } from 'react-native'
import tw from 'tailwind-rn'
import { FontAwesome} from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList} from '../types/types'
import { Button, Input } from 'react-native-elements'
import { Child } from '../components/Child';
import { processFontFamily } from 'expo-font';


type Props = NativeStackScreenProps<RootStackParamList, 'Hello'>;


const HelloScreen: VFC<Props> = ({ navigation }) => {
    const [text, setText] = useState('');
    const [printText, setPrintText] = useState('');

    //マウント時に実行
    useEffect(() => {
        //マウントされた時
        console.log('mounted Hello');
        //アンマウントされた時
        return () => {
            console.log('unmounted Hello');
        }
        //第二引数に依存関係にあるステートを指定
    }, []);

    //Childに渡す関数
        //textの変更のたびに再レンダリングされ、ChildMsgも再レンダリングされ、printMsgが新たに作られる
        //useCallbackを使うことでMemo化することができる。再利用される。
             //偏差していないとみなされる
    const printMsg = useCallback( () => {
        //文字の結合
            //stateを使う場合
        console.log(`Print: ${printText}`);
    }, [printText])

    return (
        <View style={tw('flex-1 bg-gray-300 justify-center items-center')}>
            <Text style={{fontFamily: 'Oswald_200ExtraLight'}}>Hello</Text>
            <View style={tw('my-3')}>
                <Button
                    title="Go to ReduxTK"
                    onPress={() => navigation.navigate('ReduxTK')}
                 />
            </View>
            <Input
                placeholder={'hoge'}
                leftIcon={<FontAwesome name="pencil" size={24} color='gray' />}
                value={text}
                onChangeText={(txt) => {
                    setText(txt)
                }}
            />
            <Text>{text}</Text>
            <Input
                placeholder="type print text"
                value={printText}
                leftIcon={<FontAwesome name="pencil" size={24} color='gray' />}
                onChangeText={(txt) => setPrintText(txt)}
            />
            <Text>{printText}</Text>
            <Child printMsg={printMsg} />
        </View>
    )
}

export default HelloScreen
