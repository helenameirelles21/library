import { Text, View } from "react-native"
import { TextInput } from "react-native-paper";

 
 export const SobreScreen = ({navigation}) =>{
    return(
        <View>
              <Text variant="displayMedium">Preencha os campos:</Text>
            <TextInput
           label="insira seu nome completo"
         />
           <TextInput
           label=" insira seu Email"
         />
           </View>
    );
 };
