import React, { VFC, memo } from 'react';
import tw from 'tailwind-rn';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';

type Props = {
    printMsg: () => void;
};

//Memoを使うことで、テキストボックスの変更のたびにレンダリングされないようになる
//Childコンポーネントの変化がない限り再レンダリングされないようにしている
    //VFCはジェネリクスなどのTypeScriptを関数コンポーネントに適用させるもの
const ChildMemo: VFC<Props> = ({ printMsg }) => {
    console.log('Child renderd');
    return (
        <View>
            <Text style={tw('my-1')}>Child</Text>
            <Button title="print" onPress={printMsg}/>
        </View>
    )
}

export const Child = memo(ChildMemo);
