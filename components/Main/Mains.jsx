import  { Text, View } from 'react-native';
import ProductList from '../ProductsList/ProductList.jsx';
import NavBar from '../NavBar/NavBar.jsx';


const Main = () =>{
    return(
        <View style={{ flex: 1 }}>         

            <NavBar />
            <ProductList />

        </View>
    )
}

export default Main;