import { Text, View } from "react-native"
import { TextInput } from "react-native-paper";

 
 export const SobreScreen = ({navigation}) =>{
    return(
        <View>
              <Text variant="displayMedium">Preencha os campos sobre livros lidos:</Text>
            <TextInput
           label="insira o nome do livro"
         />
           <TextInput
           label=" insira a data do termino"
         />
         <TextInput
           label="salvar informações"
         />
           </View>
    );
 };
