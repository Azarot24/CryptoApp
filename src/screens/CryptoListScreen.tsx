import React, { useEffect, useState } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { fetchCryptos } from '../api/cryptoApi';
import { Crypto } from '../models/Crypto';
import { useNavigation } from '@react-navigation/native';
import ItemRow from '../components/ItemRow';

export const CryptoListScreen = () => {
  const [allCryptos, setAllCryptos] = useState<Crypto[]>([]);
  const [filtered, setFiltered] = useState<Crypto[]>([]);
  const [query, setQuery] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchCryptos();
      const cryptos = data.map((item: any) => new Crypto(item));
      setAllCryptos(cryptos);
      setFiltered(cryptos);
    };
    loadData();
  }, []);

  const filter = (text: string) => {
    setQuery(text);
    setFiltered(allCryptos.filter(c => c.name.toLowerCase().includes(text.toLowerCase())));
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: '#f5f5f5',
    },
    headerRow: {
      flexDirection: 'row',
      backgroundColor: '#e0e0e0',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    headerColumn: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#333',
    },
  });

  return (
    <View style={styles.container}>
      <TextInput placeholder="Buscar..." value={query} onChangeText={filter} />
      <View style={styles.headerRow}>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>ID</Text>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Symbol</Text>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>Name</Text>
        </View>
        <View style={styles.headerColumn}>
          <Text style={styles.headerText}>PriceUsd</Text>
        </View>
      </View>
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
            <ItemRow
              id={item.id}
              name={item.name}
              symbol={item.symbol}
              priceUsd={item.getFormattedPrice()}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
