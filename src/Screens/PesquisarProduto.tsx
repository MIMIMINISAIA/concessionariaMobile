import React from "react";
import { FlatList, Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Head from "../Head";
import Footer from "../Footer";


interface Produto {
    id: number;
    nome: string;
    ingredientes: string;
    preco: string;
    imagem: string;
}

function PesquisaProdutos(): React.JSX.Element {

    const navigation = useNavigation();

    const produtos: Produto[] = [
        
    ]

    const selecionarProduto = (produtos: Produto) => {
        navigation.navigate('EditarProduto', { produtos })
    }

    const renderItem = ({ item }: { item: Produto }) => {
        return(
            <TouchableOpacity style={styles.menuItem}
            onPress={() => selecionarProduto(item)}>
                <View>
                    <Text>{item.nome}</Text>
                    <Text>{item.ingredientes}</Text>
                    <Text>{item.preco}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content"/>
            <Head />
            <FlatList 
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item)=> item.id ? item.id.toString() : Math.random().toString()}
                contentContainerStyle={styles.menuList} 
            />
            <Footer />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 10
    },
    image: {
        width: 80,
        height: 80,
        resizeMode: 'cover',
        borderRadius: 5
    },
    itemDetails: {
        marginLeft: 10,
        flex: 1

    },
    name: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 14,
        color:'#666'
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5
    },
    menuList: {
        flexGrow: 1

    }
})

export default PesquisaProdutos;