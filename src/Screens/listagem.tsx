import React, { useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Head from "../Head";
import Footer from "../Footer";

function Listagem():React.JSX.Element{
    const navigation = useNavigation();

    const [carros, setCarros] = useState<Carro[]>([]);


    const hendleDelete = async (id: number) => {
        axios.delete('http://10.137.11.231:8000/api/excluir/carros/' + id)
    .then(function (response) {
    }).catch(function (error) {
        console.log(error)
    })}


    interface Carro {
        id:number;
        modelo:string;
        ano:string;
        marca:string;
        cor:string;
        peso:string;
        potencia:string;
        descricao:string;
        preco:string;
    }
    
        useEffect(() => {
            listarProdutos();
        }, []);
    
    
    
        const listarProdutos = async () => {
            try {
                const response = await axios.get('http://10.137.11.231:8000/api/carros/retornarTodos');
              //  console.log(response.data)
                if (response.data.status === true) {
                    setCarros(response.data.data); // Set the state with the correct data
                    console.log(carros);
                }
            } catch (error) {
                console.log(error);
            }
        }
        
        
    
    
    
            const renderItem = ({ item }: { item: Carro }) => (
                <TouchableOpacity style={styles.item}>
                    <Text style={styles.modelo}>{item.modelo}</Text>
                    <Text >{item.ano}</Text>
                    <Text >{item.marca}</Text>
                    <Text >{item.cor}</Text>
                    <Text >{item.peso}</Text>
                    <Text >{item.potencia}</Text>
                    <Text >{item.descricao}</Text>
                    <Text >{item.preco}</Text>
                    <TouchableOpacity onPress={() => hendleDelete(item.id)}>
                        <Image source={require('../assets/images/delete.png')}style={styles.delete} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> navigation.navigate('editar')}>
                        <Image source={require('../assets/images/editar.png')} style={styles.editar}/>
                    </TouchableOpacity>
                </TouchableOpacity>
            );
        
        return (
            <View style={styles.container}>
                <Head />
                <StatusBar backgroundColor="#3a415a" barStyle="light-content" />

                    <FlatList showsVerticalScrollIndicator={false} 
                    data={carros} 
                    renderItem={renderItem} 
                    keyExtractor={(item) => item.id.toString()} />
                
                <Footer />
            </View>
            
        );
}
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#F2D22E',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15
    },
    modelo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    delete:{
        width:50,
        height:50,
        position:'absolute',
        marginHorizontal:270,
        marginVertical:-190
    },
    editar:{
        width:50,
        height:50,
        position:'absolute',
        marginHorizontal:210,
        marginVertical:-190
    },
    container:{
        flex:1
    }
})
export default Listagem;