import React from 'react';
import {Text, View} from 'react-native';
import {WebView} from 'react-native-webview';
const Product = ({navigation, route: {params}}) => {
  return (
    <WebView
      source={{
        uri: params.product.url,
      }}
      style={{marginTop: 20}}
    />
  );
};

export default Product;
