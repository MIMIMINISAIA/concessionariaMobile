import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Footer(): React.JSX.Element {

    const navigation = useNavigation();

    return(
        <View style={styles.footer}>
           <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
            <Image source={require('./assets/images/home.png')} 
            style={styles.footerIcon}/>
           </TouchableOpacity>

           <TouchableOpacity onPress={()=> navigation.navigate('PesquisarProduto')} >
            <Image source={require('./assets/images/lupe.png')} 
            style={styles.footerIcon}/>
           </TouchableOpacity>

           <TouchableOpacity>
            <Image source={require('./assets/images/orders.png')}
            style={styles.footerIcon} />
           </TouchableOpacity>

           <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
            <Image source={require('./assets/images/profile.png')} 
            style={styles.footerIcon}/>
           </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    menuList: {
        flexGrow: 1
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: '#3a415a',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 15


    },
    footerIcon: {
        
        width: 30,
        height: 30

    },

    footerIcon2: {
        width: 35,
        height: 35

    },

})

export default Footer;