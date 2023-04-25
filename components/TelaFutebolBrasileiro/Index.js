import React from 'react';
import {StyleSheet, View, Text, Button,Image } from 'react-native';

const TelaFutebolBrasileiro = ({ navigation }) => {
  return (
    <View>
      <Text></Text>
      <Button
        title="Ir para a tela inicial"
        onPress={() => navigation.navigate('TelaHome')}
      />
      <Button
        title="Ir para a tela NBA"
        onPress={() => navigation.navigate('TelaNBA')}
      />
      <Text>Aqui voce tera as noticias sobre o seu time do coracao, alem de saber o que se passa nas maiores competicoes do pais!</Text>
      <Text>Podemos citar em primeira mao a equipe do Sport, que e destaque na temporada sendo o melhor ataque do Brasil ate agora, e um dos grandes responsaveis por essa marca e o Vagner Love, sendo decisivo quando marca seus gols!</Text>
      <Image source= {{uri: 'data:image/jpeg;base64,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'}} style={styles.imagem1} />
    </View>
  );
};

const styles = StyleSheet.create({
    imagem1: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 400,
        height: 200,
    },
});

export default TelaFutebolBrasileiro;