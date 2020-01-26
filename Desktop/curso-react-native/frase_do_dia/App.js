
import React from 'react';
import {View,TouchableOpacity, Text, Image, Alert } from 'react-native';

const Estilos = {
  principal:{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao:{
      backgroundColor: '#538530',
      paddingVertical: 10,
      paddingHorizontal: 40,
      marginTop: 20 
  }, 
  textoBotao: {
      color: 'white', 
      fontSize: 16, 
      fontWeight: 'bold'
  }

};

const gerarFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 7);

  var frase = Array(
    "Tudo posso naquele que me fortalece. (Filipenses 4:13)",
    "Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor,o teu Deus, te dá. (Êxodo 20:12)",
    "Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe. (Mateus 19:6)",
    "Então disse Jesus: Deixem vir a mim as crianças e não as impeçam; pois o Reino dos céus pertence aos que são semelhantes a elas. (Mateus 19:14)",
    "Portanto, não se preocupem com o amanhã, pois o amanhã trará as suas próprias preocupações. Basta a cada dia o seu próprio mal. (Mateus 6:34)",
    "Porque Deus tanto amou o mundo que deu o seu Filho Unigênito, para que todo o que nele crer não pereça, mas tenha a vida eterna. (João 3:16)",
    "Respondeu Jesus: Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, a não ser por mim. (João 14:6)"
  );
 
  alert(frase[numeroAleatorio]);

}

const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (

      <View style={principal}>

          <Image source = {require('./imgs/logo.png')} />

          <TouchableOpacity
              onPress={gerarFrase} 
              style={botao}>
                  <Text style={textoBotao}> Nova Frase </Text>
          </TouchableOpacity>

      </View>

  );
};

export default App;
