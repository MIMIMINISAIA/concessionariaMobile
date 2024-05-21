import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Head from "../Head";
import Footer from "../Footer";


function Profile(): React.JSX.Element {
    return(
        <View >
            <Head/>
            <Text>Tela Principal</Text>
            <Footer />
        </View>
    );
}

export default Profile;