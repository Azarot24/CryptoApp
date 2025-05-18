import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, ActivityIndicator } from 'react-native';
import { fetchCryptoDetail } from '../api/cryptoApi';
import { Crypto } from '../models/Crypto';

export const CryptoDetailScreen = ({ route }: any) => {
  const { id } = route.params;
  const [crypto, setCrypto] = useState<Crypto | null>(null);

  useEffect(() => {
    const load = async () => {
      const data = await fetchCryptoDetail(id);
      setCrypto(new Crypto(data));
    };
    load();
  }, []);

  if (!crypto) return (
    <View>
      <ActivityIndicator size="large" color="#3498db" />
    </View>
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f2f5',
      paddingHorizontal: 20,
    },
    header: {
      alignItems: 'center',
      marginVertical: 30,
      backgroundColor: '#fff',
      paddingVertical: 20,
      borderRadius: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 5,
    },
    assetName: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#2c3e50',
      textAlign: 'center',
    },
    assetSymbol: {
      fontSize: 20,
      color: '#7f8c8d',
      marginTop: 5,
      textAlign: 'center',
    },
    priceContainer: {
      backgroundColor: '#3498db',
      borderRadius: 15,
      paddingVertical: 25,
      alignItems: 'center',
      marginBottom: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 8,
    },
    priceLabel: {
      fontSize: 18,
      color: '#ecf0f1',
      marginBottom: 5,
    },
    priceValue: {
      fontSize: 48,
      fontWeight: 'bold',
      color: '#ecf0f1',
    },
    infoCard: {
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 20,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 3,
      elevation: 3,
    },
    infoLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#34495e',
      marginBottom: 5,
    },
    infoText: {
      fontSize: 16,
      color: '#555',
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f0f2f5" />
      <View style={styles.header}>
        <Text style={styles.assetName}>{crypto.name}</Text>
        <Text style={styles.assetSymbol}>{crypto.symbol}</Text>
      </View>

      <View style={styles.priceContainer}>
        <Text style={styles.priceLabel}>Precio Actual:</Text>
        <Text style={styles.priceValue}>{crypto.getFormattedPrice()}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoLabel}>ID del Activo:</Text>
        <Text style={styles.infoText}>{crypto.id}</Text>
      </View>
    </SafeAreaView>
  );
};
