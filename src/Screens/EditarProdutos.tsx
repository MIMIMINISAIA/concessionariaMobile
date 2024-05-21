import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import Footer from "../Footer";
import Head from "../Head";




interface Produto {
    id: number;
    modelo: string;
    ano: string;
    maca: number;
    cor: string;
    peso: string;
    potencia: string;
    descricao: string;
    valor: string

}

const EditarProduto: React.FC = () => {

    const [carros, setCarros] = useState<[]>([]);
    const [modelo, setModelo] = useState<string>('');
    const [ano, setAno] = useState<string>('');
    const [marca, setMarca] = useState<string>('');
    const [cor, setCor] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [potencia, setPotencia] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [valor, setValor] = useState<string>('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const { carros } = route.params;

        setModelo(carros.modelo);
        setAno(carros.ano);
        setMarca(carros.marca);
        setCor(carros.cor);
        setPeso(carros.peso);
        setPotencia(carros.potencia);
        setDescricao(carros.descricao);
        setValor(carros.valor);
    })
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="red" barStyle="light-content" />
            <Head />

            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    value={modelo}
                    onChangeText={setModelo}
                />

                <TextInput
                    style={styles.input}
                    value={ano}
                    onChangeText={setAno}

                />

                <TextInput
                    style={styles.input}
                    value={marca}
                    onChangeText={setMarca}

                />

                <TextInput
                    style={styles.input}
                    value={cor}
                    onChangeText={setCor}

                />

                <TextInput
                    style={styles.input}
                    value={peso}
                    onChangeText={setPeso}

                />

                <TextInput
                    style={styles.input}
                    value={potencia}
                    onChangeText={setPotencia}

                />

                <TextInput
                    style={styles.input}
                    value={descricao}
                    onChangeText={setDescricao}

                />

                <TextInput
                    style={styles.input}
                    value={valor}
                    onChangeText={setValor}

                />

                <TouchableOpacity style={styles.button}
                    onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.menuList}></View>
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: "red",
        paddingVertical: 10,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'

    },
    form: {
        padding: 10,
        backgroundColor: "#f0f0f0",
        marginBottom: 10
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    imageButton: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10
    },
    imageButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    imagemSelecionada: {
        width: 200,
        height: 200,
        resizeMode: 'cover',
        borderRadius: 5,
        marginBottom: 10,
    },
    alinhamentoImagemSelecionada: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    menuList: {
        flexGrow: 1
    },


})

export default EditarProduto;