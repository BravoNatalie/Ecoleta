import React, { useState, useEffect } from 'react';
import { ImageBackground, View, Image, Text, Alert } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import axios from  'axios';

import styles, { pickerSelectStyles } from './styles';
// import logo from '../../assets/logo.png';
// import homeBackground from '../../assets/home-background.png';

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const Home = () => {

  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);
  const [selectedUF, setSelectedUF] = useState(' ');
  const [selectedCity, setSelectedCity] = useState(' ');
  const navigation = useNavigation();

  useEffect(() => {
    axios.get<IBGEUFResponse[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => {
      const ufInitials = response.data.map(uf => uf.sigla);
      setUfs(ufInitials);
    })
    .catch(error => {
      console.log(error.response.data);
    });
  }, []);

  useEffect(() => {
    if (selectedUF === '0') return;
  
    axios.get<IBGECityResponse[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUF}/municipios`)
      .then(response => {
        const cityNames = response.data.map(city => city.nome);
        setCities(cityNames);
      })
      .catch(error => {
        console.log(error.response.data);
      });
  }, [selectedUF]);

  function handleNavigateToPoints(){
    if(selectedUF === ' ' || selectedCity === ' '){
      Alert.alert('Ooooops...', 'Não esqueça de selecionar o seu local.');
      return;
    }
    navigation.navigate('Points', {
      uf: selectedUF,
      city: selectedCity,
    });
  }

  return (
    <ImageBackground 
      source={require('../../assets/home-background.png')} 
      style={styles.container}
      imageStyle={{ width: 274, height: 368 }}
    >
      <View style={styles.main}>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.title}>Seu marketplace de coleta de resíduos</Text>
        <Text style={styles.description}>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.select}>
          <RNPickerSelect
            style = {pickerSelectStyles}
            placeholder = {{label: 'Selecione uma UF...'}}
            onValueChange={value => setSelectedUF(value)}
            items={
              ufs.map(uf => ({
                key: uf, 
                label: uf,
                value: uf 
              }))
            }
          />
        </View>
        <View style={styles.select}>
          <RNPickerSelect
            style = {pickerSelectStyles}
            placeholder = {{label: 'Selecione uma Cidade...'}}
            onValueChange={value => setSelectedCity(value)}
            items={
              cities.map(city => ({
                key: city, 
                label: city,
                value: city 
              }))
            }
          />
        </View>
        <RectButton style={styles.button} onPress={handleNavigateToPoints}>
          <View style={styles.buttonIcon}>
            <Icon name='arrow-right' color='#FFF' size={24} />
          </View>
          <Text style={styles.buttonText}>
            Entrar
          </Text>
        </RectButton>
      </View>
    </ImageBackground>
  );
};

export default Home;

