import React, { useState, useEffect } from 'react'
//import { AppLoading } from 'expo'
import { AppNavigation } from './src/navigation/AppNavigation'

export default function App() {
  //const [isReady, setIsReady] = useState(false)

  // в SDK 39 Apploading вызывает ошибку "No native splash screen registered for provided activity"
  // и пока будет работать напрямую 
  /*if (!isReady) {
    return (
      <AppLoading
        startAsync={initLoading}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }*/

  return (
      <AppNavigation />
  )
}
