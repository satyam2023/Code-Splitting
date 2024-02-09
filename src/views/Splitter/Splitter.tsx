import React, { Suspense } from 'react'
import { Text, View } from 'react-native';
const FirstComponent = React.lazy(() => import('../FirstView/FirstView'));
const SecondComponent = React.lazy(() => import('../SecondView/SecondView'));

const Splitter = () => {
  return (
   <View>
    <Suspense fallback={<Text>Loading...</Text>}>
  <FirstComponent/>
  <SecondComponent/>
      </Suspense>
    
   </View>
  )
}

export default Splitter