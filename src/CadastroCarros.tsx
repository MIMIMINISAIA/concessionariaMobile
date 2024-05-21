import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import axios from 'axios';
import Footer from "./Footer";
import Head from "./Head";

const CadastroCarros: React.FC = () => {

    const [carros, setCarros] = useState<[]>([]);
    const [modelo, setModelo] = useState<string>('');
    const [ano, setAno] = useState<string>('');
    const [marca, setMarca] = useState<string>('');
    const [cor, setCor] = useState<string>('');
    const [peso, setPeso] = useState<string>('');
    const [potencia, setPotencia] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [valor, setValor] = useState<string>('');






    const cadastrarCarros = async () => {
       
        try {
            const formData = new FormData();

            formData.append('carros',carros )
            formData.append('modelo', modelo);
            formData.append('ano', ano);
            formData.append('marca', marca);
            formData.append('cor', cor);
            formData.append('peso', peso);
            formData.append('potencia', potencia);
            formData.append('descricao', descricao);
            formData.append('valor', valor);





            const response = await axios.post('http://10.137.11.231:8000/api/carros/cadastro', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>

            <StatusBar backgroundColor="#3a415a" barStyle="light-content" />

            <View style={styles.header}>
                <Head/>
                <Text style={styles.headerText2}>Cadastro Veiculo</Text>

        

            </View>
            <ImageBackground source={require('./assets/images/dark.jpg')} style={styles.fundo}>     


          <TouchableOpacity>
            <ScrollView>
                <View style={styles.form}>


                    <TextInput
                        style={styles.input}
                        placeholder="Modelo"
                        value={modelo}
                        onChangeText={setModelo}
                    />
                    {/* {errors.nome && <Text style={styles.errorText}>{errors.modelo}</Text>} */}

                    <TextInput
                        style={styles.input}
                        placeholder="Ano"
                        value={ano}
                        onChangeText={setAno}
                    />
                    {/* {errors.telefone && <Text style={styles.errorText}>{errors.ano}</Text>} */}

                    <TextInput
                        style={styles.input}
                        placeholder="Marca"
                        value={marca}
                        onChangeText={setMarca}
                    />
                    {/* {errors.cpf && <Text style={styles.errorText}>{errors.marca}</Text>} */}

                    <TextInput
                        style={styles.input}
                        placeholder="Cor"
                        value={cor}
                        onChangeText={setCor}
                    />
                    {/* {errors.endereco && <Text style={styles.errorText}>{errors.cor}</Text>} */}


                    <TextInput
                        style={styles.input}
                        placeholder="Peso"
                        value={peso}
                        onChangeText={setPeso}
                    />
                    {/* {errors.email && <Text style={styles.errorText}>{errors.peso}</Text>} */}

                    <TextInput
                        style={styles.input}
                        placeholder="Potencia"
                        value={potencia}
                        onChangeText={setPotencia}
                    />
                    {/* {errors.password && <Text style={styles.errorText}>{errors.potencia}</Text>} */}

                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        value={descricao}
                        onChangeText={setDescricao}
                    />
                    {/* {errors.nome && <Text style={styles.errorText}>{errors.descricao}</Text>} */}

                    <TextInput
                        style={styles.input}
                        placeholder="Valor"
                        value={valor}
                        onChangeText={setValor}
                    />
                    {/* {errors.telefone && <Text style={styles.errorText}>{errors.valor}</Text>} */}

                   
                    <TouchableOpacity style={styles.button} onPress={cadastrarCarros}>
                        <Text style={styles.textbutton}>Cadastrar</Text>

                    </TouchableOpacity>


                </View>
            </ScrollView>
            </TouchableOpacity>


            </ImageBackground>

            <Footer/>






        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#3a415a',
        alignItems: 'center',
        paddingVertical: 15
    },
    
    //#f0f0f0
    form: {
        padding: 40,
        backgroundColor: '#F2D22E'
        //212426


    },


    input: {
        margin: 10,
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        
    },




  

    imageButtonText: {

        color: 'black',
        fontWeight: 'bold'

    },
 


  


    button: {
     
        marginTop: 50,
        backgroundColor: '#3a415a',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },
    textbutton: {
        color: 'white'
    },


  
    fundo: {
        flex: 1,
        justifyContent: 'center'

    },
    headerText2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#F2D22E'

    },
    logo: {
        width: 200,
        height: 200,


    },




    errorText: {
        color: '#3B9ABF',
        marginBottom: 5,
    },


    logoTipo: {

      
        padding: 1,
    },

});

export default CadastroCarros;