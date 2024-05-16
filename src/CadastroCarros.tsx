import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import axios from 'axios';

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


    const validarCampos = () => {
        const errors: Record<string, string> = {};

       
        if (!modelo) {
            errors.modelo = "Modelo é obrigatório";
        }
        if (!ano) {
            errors.ano = "Ano é obrigatório";
        }
        if (!marca) {
            errors.marca = "Marca é obrigatório";
        }
        if (!cor) {
            errors.cor = "Cor é obrigatório";
        }
        if (!peso) {
            errors.peso = "Peso é obrigatório";
        }
        if (!potencia) {
            errors.potencia = "Potencia é obrigatória";
        }
        if (!descricao) {
            errors.descricao = "Descricao é obrigatória";
        }
        if (!valor) {
            errors.valor = "Valor é obrigatória";
        }
        
        setErrors(errors);
        return Object.keys(errors).length === 0;
    }




    const cadastrarCarros = async () => {
        if (!validarCampos()) {
            return;
        }
        try {
            const formData = new FormData();

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

            <StatusBar backgroundColor="#F2D22E" barStyle="light-content" />

            <View style={styles.header}>
                    <Image source={require('./assets/images/LogoTipo.png')} style={styles.logoTipo} />
               


                {/* <Image source={require('../assets/images/logo.png')} style={styles.logo} /> */}
                <Text style={styles.headerText2}>Cadastro</Text>

        

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

                   
                    <TouchableOpacity style={styles.button} onPress={CadastroCarros}>
                        <Text style={styles.buttonText}>Cadastrar</Text>

                    </TouchableOpacity>


                </View>
            </ScrollView>
            </TouchableOpacity>


            </ImageBackground>

            <View style={styles.footer}>

                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/home.png')}
                        style={styles.footerIcon}
                    />
                </TouchableOpacity>


                <TouchableOpacity>
                    <Image source={require('./assets/images/lupe.png')}
                        style={styles.footerIcon}
                    />

                </TouchableOpacity>

                <TouchableOpacity>
                    <Image source={require('./assets/images/orders.png')}
                        style={styles.footerIcon2}
                    />

                </TouchableOpacity>


                <TouchableOpacity>
                    <Image source={require('./assets/images/profile.png')}
                        style={styles.footerIcon}
                    />

                </TouchableOpacity>

      
            </View>






        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        backgroundColor: '#F2D22E',
        alignItems: 'center',
        paddingVertical: 15
    },
    
    //#f0f0f0
    form: {
        padding: 40,
        backgroundColor: '#212426'
        


    },


    input: {
        margin: 10,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        
    },




  

    imageButtonText: {

        color: 'white',
        fontWeight: 'bold'

    },
 


    alinhamentoImageSelecionada: {
        alignItems: 'center',


    },


    button: {
     
        marginTop: 50,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center'
    },


  
    fundo: {
        flex: 1,
        justifyContent: 'center'

    },
    headerText2: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'

    },
    logo: {
        width: 100,
        height: 100,


    },



        /**footer */


    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'yellow',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10


    },
    footerIcon: {
        width: 30,
        height: 30

    },

    footerIcon2: {
        width: 35,
        height: 35

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