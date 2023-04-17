/*
* File: App.js
* Author: Farkas Caba
* Copyright: 2023, Farkas Csaba
* Group: Szoft II N
* Date: 2023-04-17
* Github: https://github.com/fcsabi789/
* Licenc: GNU GPL
*/
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

function calcLosuly(kerulet, hossz) {
  let losulya = kerulet*kerulet*hossz/11877;
  
  return losulya;
}
export default function App() {
  const [hossz, setHossz] = useState('');
  const [kerulet, setKerulet] = useState('');
}
  
  function startCalculation() {
    let radius = calcRadius(kerulet, hossz);
    setsuly(losulya);
  }

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Farkas Csaba,Szoft II/N ,2023-04-17 </Text>
      <StatusBar style="auto" />
    
    <Text>losulya</Text>
        <Text>kerület</Text>
        <TextInput style={styles.input}
          onChangeText={sideInput => setKerulet(keruletInput)}
        />
        <Text>Hossz</Text>

        <TextInput 
        style={styles.input}
          onChangeText={alphaInput => setHossz(hosszInput)}
        />

        <Button 
        onPress={startCalculation}
        style={styles.button}
        />

        <Text>Sugár</Text>
        <TextInput 
        style={styles.input}
          value={radius}
        />

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
