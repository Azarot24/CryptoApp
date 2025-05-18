import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export interface ItemData {
  id: string;
  name: string;
  symbol: string;
  priceUsd: string;
}

const ItemRow: React.FC<ItemData> = ({ id, name, symbol, priceUsd }) => {
  return (
    <View style={styles.row}>
      <View style={styles.column}>
        <Text style={styles.cellText}>{id}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.cellText}>{symbol}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.cellText}>{name}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.cellText}>{priceUsd}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 12,
  },
  column: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#555',
  },
});

export default ItemRow;