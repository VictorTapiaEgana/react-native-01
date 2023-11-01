import { View,Text, FlatList} from "react-native";
import Repocitorio from '../../Data/Data.js';
import ProductDetailList from '../ProductDetailList/ProductDetailList.jsx'

const ProductList = () =>{

    return(
        <FlatList
              data={Repocitorio}
              renderItem={({item: repo})=>(
                <View style={{ marginBottom:10}} key={ repo.id }>                
                    <ProductDetailList 
                                        id = { repo.id } 
                                        titulo = { repo.title }
                                        descripcion = { repo.description } 
                                        precio = { repo.price }
                                        descuento= { repo.discountPercentage }
                                        imagen = { repo.thumbnail }
                    />
               </View>
             )}
        />

    )
}

export default ProductList;