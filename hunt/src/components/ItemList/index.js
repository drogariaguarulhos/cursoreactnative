import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const ItemList = ({item, navigation, ...rest}) => (
  <View style={styles.productItem}>
    <Text style={styles.productTitle}>{item.title}</Text>
    <Text style={styles.productDescription}>{item.description}</Text>
    <TouchableOpacity
      style={styles.productButton}
      onPress={() => {
        navigation.navigate('Product', {product: item});
      }}>
      <Text style={styles.buttonText}>Acessar</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  productItem: {
    flex: 1,
    backgroundColor: 'lightgray',
    borderColor: '#3a5798',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
  productTitle: {
    fontSize: 24,
    marginBottom: 5,
    color: '#3a5798',
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
    color: '#3a5798',
    lineHeight: 24,
  },
  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#3a5798',
    backgroundColor: '#3a5798',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'snow',
  },
});

export default ItemList;
