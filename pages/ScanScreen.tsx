import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import React, { useState, useEffect } from 'react'

import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { colors } from '../constants/colors';
import ScreenHeader from '../components/shared/ScreenHeader';
import { useNavigation } from '@react-navigation/native';


type Props = {}

const ScanScreen = (props: Props) => {
    const [hasPermission, setHasPermission] = useState<true | false | null>(null);
    const [scanned, setScanned] = useState(false);
    const navigation = useNavigation()

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === false) {
        navigation.goBack();
    }

    return (
        <SafeAreaView style={styles.safeAreaView}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            <ScreenHeader title='Scanner' leftIcon={{ name: "chevron-left", action: navigation.goBack, color: colors.white }} />
            <View style={styles.view}>
                <View style={styles.scan}></View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    view: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    scan: {
        height: 200,
        width: 300,
        borderColor: colors.white,
        borderWidth: 5,
        borderRadius: 10,
        opacity: 1,
        backgroundColor: 'transparent'
    }
})

export default ScanScreen