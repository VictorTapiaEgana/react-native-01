import {Text, View, StyleSheet} from 'react-native'
import  Constants  from 'expo-constants'


const NavBar = () =>{
 return(
    <View style={ Estilos.contenedor }>
        <Text style={ Estilos.Titulo }>
            PRODUCTOS
        </Text>

    </View>
 )
}

const Estilos = StyleSheet.create({
    contenedor:{
        backgroundColor:'#D2CFCF',        
        paddingLeft:10,
        marginBottom:10,
        paddingTop: Constants.statusBarHeight + 30,
        justifyContent:'center',
        alignItems:'center'
    },
    
    Titulo:{
        color:'white'
    },

}) 

export default NavBar;