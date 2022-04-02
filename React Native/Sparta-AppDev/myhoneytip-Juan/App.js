import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'; //해석: 리액트 네이티브 라이브러리에서 스타일시트, 텍스트, 뷰 태그를 import해서 사용한다

export default function App() {

  console.disableYellowBox = true; //앱에서 노란색 메시지 안보이게 하기

  return ( //화면 반환(return)은 렌더링으로 바꿔 말할 수 있음
    <View style={styles.container}>
      {/*태그 안에서 주석 쓰기*/}
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> //JSX 문법 예시. 더 자세한 것은 RN 공식 문서 참조: https://reactnative.dev/docs/components-and-apis
  );//소괄호로 return할 내용 전체를 감싸야 함 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
