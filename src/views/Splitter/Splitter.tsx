import React, { Suspense, useState } from 'react'
import { ActivityIndicator, Text, View } from 'react-native';
const FirstComponent = React.lazy(() => import('../FirstView/FirstView'));
const SecondComponent = React.lazy(() => import('../SecondView/SecondView'));

const Splitter = () => {
    const [loading,setloading]=useState<boolean>(false);
    function setloader(param:boolean){
        setloading(param);
    }
  return (
   <View>
    <Suspense fallback={<ActivityIndicator color={'red'}/>}>
   {!loading?<FirstComponent />:
   <SecondComponent/>}
      </Suspense>
    
   </View>
  )
}

export default Splitter