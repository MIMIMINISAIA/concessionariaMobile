import React, { useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { TextInput } from "react-native-gesture-handler";
import axios from "axios";
import Head from "../Head";
import Footer from "../Footer";

const Editar: React.FC = () => {
    const [id, setId] = useState<string>('');
    const [modelo, setModelo] = useState<string>('');
    const [ano, SetAno] = useState<string>('');
    const [marca, SetMarca] = useState<string>('');
    const [cor, SetCor] = useState<string>('');
    const [peso, SetPeso] = useState<string>('');
    const [potencia, SetPotencia] = useState<string>('');
    const [descricao, SetDescricao] = useState<string>('');
    const [valor, Setvalor] = useState<string>('');

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(() => {
        const { item } = route.params;
        setId(item.id);
        setModelo(item.modelo);
        SetAno(item.ano);
        SetMarca(item.marca);
        SetCor(item.cor);
        SetPeso(item.peso);
        SetPotencia(item.potencia);
        SetDescricao(item.descricao);
        Setvalor(item.valor);
    }, []);

    const atualizar = () => {
        const dadosDoCarro = {
            id: id,
            modelo: modelo,
            ano: ano,
            marca: marca,
            cor: cor,
            peso: peso,
            potencia: potencia,
            descricao: descricao,
            valor: valor,
        };
        axios.put("http://10.137.11.231:8000/api/carros/atualizar", dadosDoCarro, {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        }).then(response => {
            console.log(response.data);
            navigation.goBack(); // Redireciona para a tela anterior após a atualização bem-sucedida
        }).catch(error => {
            console.error(error);
        });
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#3a415a' barStyle="light-content" />
            <Head />
            <View>
                <TextInput value={modelo}
                 onChangeText={setModelo}
                  style={styles.input} />

                <TextInput value={ano}
                 onChangeText={SetAno}
                  keyboardType="numeric"
                   style={styles.input} />

                <TextInput value={marca}
                 onChangeText={SetMarca}
                  style={styles.input} />

                <TextInput value={cor}
                 onChangeText={SetCor}
                  style={styles.input} />

                <TextInput value={peso}
                 onChangeText={SetPeso}
                  style={styles.input} />

                <TextInput value={potencia}
                 onChangeText={SetPotencia}
                  style={styles.input} />

                <TextInput value={descricao}
                 onChangeText={SetDescricao}
                  multiline
                   style={styles.input} />

                <TextInput value={valor}
                 onChangeText={Setvalor}
                  keyboardType="numeric"
                   style={styles.input} />
                   
                <TouchableOpacity onPress={atualizar} style={styles.button}>
                    <Text style={styles.buttonText}>Editar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </TouchableOpacity>
                <Footer />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        margin: 10,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    button: {
        backgroundColor: '#3a415a',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 10,
        borderColor: 'white'
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold'
    }
});

export default Editar;
