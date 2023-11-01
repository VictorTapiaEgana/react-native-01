import { View, Text, Image, StyleSheet} from 'react-native'
// import StyleText from '../Style';




const ProductDetailList  = ({ id, imagen,  descripcion, titulo, precio, descuento }) =>{   

    function CotarPalabras (PlabraACortar,longitud){

        let partes = [];
        for (let i = 0; i < PlabraACortar.length; i += longitud) {
          partes.push(PlabraACortar.substr(i, longitud));
        }
        return partes.join('\n');
    }

    return(

        <View  style={ Estilo.contenedor }>          

           <View>
                <Image
                     style={ Estilo.imagen }
                     source={{ uri:imagen }}
                />
          </View>   

          <View style={ {flex: 1, marginLeft:10} }>
               <Text style={ Estilo.titulo }> { titulo } </Text>
               <Text ellipsizeMode='tail'         
                     numberOfLines= {2} 
                     style={ Estilo.descripcion }                                    > 
                     { CotarPalabras(descripcion,25) }
                </Text> 
          </View>

          <View style={{ justifyContent:'center' }}>               
               <Text style= { Estilo.precio }>  
                     {`$ ${precio} US`}  
               </Text>
          </View>

        </View>

    )
}







































































const Estilo = StyleSheet.create({
    contenedor:{
        flexDirection:'row', 
        justifyContent:'space-evenly',
        padding:15,
        marginLeft:5,
        marginRight:5,
        backgroundColor:'#F3F3F3',
        borderRadius:15,
        overflow:'hidden'
    },
    
    titulo:{
         color: 'blue',
         textAlign:'center',
         fontWeight :'600'
         
    },
    
    descripcion:{
        textAlign:'left'
    },
    
    precio:{
         justifyContent:'center',
        //  alignItems:'center'
        fontWeight:'600',
        fontSize:16,
        color: 'red'
        
    },
    imagen:{
        width:70, 
        height:70,
        borderRadius:10,
        overflow:'hidden'
    },



})


export default ProductDetailList;


