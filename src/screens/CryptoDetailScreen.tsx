import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
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

  if (!crypto) return <Text>Loading...</Text>;

  return (
    <View>
      <Text>Nombre: {crypto.name}</Text>
      <Text>Símbolo: {crypto.symbol}</Text>
      <Text>Precio: {crypto.getFormattedPrice()}</Text>
    </View>
  );
};
