import { useState,useEffect } from "react";
import { View,Text,StyleSheet, SafeAreaView, TextInput, TouchableHighlight, ImageBackground,} from "react-native";


export default function App(){

  const[peso,setPeso]=useState('')
  const[altura,setAltura]=useState('')
  const[res,setRes]=useState('')

   function Imc(){
      
     if(peso==0|| !peso){
         alert('Digite o peso')
          return
     }

     if (altura==0 || !altura) {
        alert('Digite a altura')
     }

     let calculoImc=peso/(Math.pow(altura,2))

     setRes(calculoImc.toFixed(2))

   }
  
  return(
    <SafeAreaView style={styles.topo}>

          <Text style={styles.txt}>Calcular Imc</Text>

       <View style={styles.v1}>
          <Text style={styles.txtInput}>Digite o peso</Text>
          <TextInput
            value={peso}
            autoFocus={true}
            keyboardType="numeric"
            onChangeText={(texto)=>setPeso(texto)}
            style={styles.input}
          />
       </View>
       
       <View style={styles.v4}>
             <Text style={styles.txtInput}>Digite a altura</Text>
              <TextInput
              value={altura}
              keyboardType="numeric"
              onChangeText={(texto)=>setAltura(texto)}
              style={styles.input2}
              />
       </View>
       
       <View style={styles.v2}>
          <TouchableHighlight onPress={()=>Imc()} style={styles.btn}>
           <Text style={styles.txtBtn}>Calcular</Text>
          </TouchableHighlight>
       </View>

       <View>
         <Text style={styles.txt3}>Resultado: {res}</Text>
       </View>
    </SafeAreaView>
  )
}



const styles=StyleSheet.create({
    input:{
       borderColor:'#000000',
       borderWidth:2,
       borderRadius:5,
       padding:10,
       margin:10
    },
    v2:{
       marginLeft:75,
    },
    v1:{
      marginTop:40,
    },

    input2:{
       borderColor:'#000000',
       borderWidth:2,
       borderRadius:5,
       padding:10,
       margin:10
       
    },
    txt:{
       textAlign:'center',
       alignItems:'center',
       marginTop:40,
       fontWeight:'bold',
       fontSize:20
    },
    btn:{
      backgroundColor:'#008000',
      padding:10,
      width:200,
      borderRadius:10,
      marginTop:20,

    },
    txt3:{
       textAlign:'center',
       marginTop:20,
       fontSize:18
    },
    txtBtn:{
       textAlign:'center',
       color:'white',
       fontWeight:'bold'
    },
    v4:{
      marginTop:15,
    },

    txtInput:{
      marginLeft:15,
      fontSize:18
    }
    
})