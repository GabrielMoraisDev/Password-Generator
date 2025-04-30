import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Slider from '@react-native-community/slider';

export default function App() {

  const [size, setSize] = useState(10);

  return(
    <View style={styles.container}>
      <Image
      source={require('../../assets/images/logo.png')}
      style={styles.logo}
      >
      </Image>
      <Text style={styles.title}>Hello World bro!</Text>

      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor='#646464'
          minimumTrackTintColor="#392de9"
          thumbTintColor='#392de9'
          />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo:{
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 6,
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: "#392de9",
    width: '80%',
    height: 50,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 18
  },
  buttonText:{
    color: "#fff",
    fontSize: 20,
  }
})