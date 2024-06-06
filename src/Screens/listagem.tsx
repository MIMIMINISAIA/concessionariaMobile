import React, { FormEvent, useEffect, useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { FlatList, TextInput } from "react-native-gesture-handler";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import Head from "../Head";
import Footer from "../Footer";


function Listagem(): React.JSX.Element {
    const navigation = useNavigation();

    const [carros, setCarros] = useState<Carro[]>([]);
    const [pesquisarCarro, SetPesquisarCarro] = useState<Carro[]>([]);
    const [modeloPequisa, setModeloPesquisa] = useState<string>('');



    const hendleDelete = async (id: number) => {
        axios.delete('http://10.137.11.231:8000/api/excluir/carros/' + id)
            .then(function (response) {
            }).catch(function (error) {
                console.log(error)
            })
    }


    interface Carro {
        id: number;
        modelo: string;
        ano: string;
        marca: string;
        cor: string;
        peso: string;
        potencia: string;
        descricao: string;
        valor: string;
    }

    useEffect(() => {
        if (modeloPequisa == "") {
            listarCarros();
        }
    }, []);

    const buscar = async () => {

        try {
            const response = await axios.post('http://10.137.11.231:8000/api/carros/procurarModelo/' + modeloPequisa);
            console.log('buscando os carros')
            setCarros(response.data.data)
            if (response.data.status === true) {

            } else {
                console.log('Erro na busca:', response.data.message);
            }
        } catch (error) {
            console.log('Erro na requisição:', error);
        }
    };



    const listarCarros = async () => {
        try {
            const response = await axios.get('http://10.137.11.231:8000/api/carros/retornarTodos');
            //  console.log(response.data)
            if (response.data.status === true) {
                setCarros(response.data.data); // Set the state with the correct data
            }
        } catch (error) {
            console.log(error);
        }
    }
    const renderPesquisa = ({ item }: { item: Carro }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.modelo}>{item.modelo}</Text>
            <Text >{item.ano}</Text>
            <Text >{item.marca}</Text>
            <Text >{item.cor}</Text>
            <Text >{item.peso}</Text>
            <Text >{item.potencia}</Text>
            <Text >{item.descricao}</Text>
            <Text >{item.valor}</Text>
            <TouchableOpacity onPress={() => hendleDelete(item.id)}>
                <Image source={require('../assets/images/sai.png')} style={styles.delete} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('editar', { item })}>
                <Image source={require('../assets/images/editar.png')} style={styles.editar} />
            </TouchableOpacity>
        </TouchableOpacity>
    );




    const renderItem = ({ item }: { item: Carro }) => (
        <TouchableOpacity style={styles.item}>
            <Text style={styles.modelo}>{item.modelo}</Text>
            <Text >{item.ano}</Text>
            <Text >{item.marca}</Text>
            <Text >{item.cor}</Text>
            <Text >{item.peso}</Text>
            <Text >{item.potencia}</Text>
            <Text >{item.descricao}</Text>
            <Text >{item.valor}</Text>
            <TouchableOpacity onPress={() => hendleDelete(item.id)}>
                <Image source={require('../assets/images/sai.png')} style={styles.delete} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('editar', { item })}>
                <Image source={require('../assets/images/editar.png')} style={styles.editar} />
            </TouchableOpacity>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Head />
            <StatusBar backgroundColor="#3a415a" barStyle="light-content" />

            <TextInput
                style={{ height: 40, borderColor: '#F2d22e', borderWidth: 5, marginTop: 10, marginHorizontal: 20, borderRadius: 15 }}
                placeholder="Pesquise por modelo"
                value={modeloPequisa}
                onChangeText={setModeloPesquisa}
            />
            <TouchableOpacity style={styles.Pesquisa} onPress={() => buscar()}><Text>Pesquisar</Text></TouchableOpacity>

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
        backgroundColor: '#F2d22e',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15,
        borderBottomWidth: 10,
        borderColor: '#3a415a'
    },
    modelo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    delete: {
        width: 50,
        height: 50,
        position: 'absolute',
        marginHorizontal: 270,
        marginVertical: -190
    },
    editar: {
        width: 50,
        height: 50,
        position: 'absolute',
        marginHorizontal: 210,
        marginVertical: -190
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    Pesquisa: {
        padding: 10,
        backgroundColor: '#F2d22e',
        width: 80,
        height: 10,
        position: 'absolute',
        top: 190,
        right: 30,
        borderRadius: 30,
        
    },
    text: {
        color: 'black'
    }
})
export default Listagem;