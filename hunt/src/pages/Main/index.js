import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import api from '../../services/api';
import ItemList from '../../components/ItemList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'snow',
  },
  list: {
    padding: 20,
  },
});

const Main = ({navigation, ...rest}) => {
  const [products, setProducts] = useState([]);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;

    const loadProducts = async () => {
      const response = await api.get(`/products?page=${page}`);
      if (mounted) {
        setPages(Number(response.data.pages));
        setProducts([...products, ...response.data.docs]);
      }
    };

    loadProducts();

    return () => {
      mounted = false;
    };
  }, [page]);

  const loadMore = () => {
    if (page === pages) return;
    setPage(page + 1);
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <ItemList item={item} navigation={navigation} />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
};

export default Main;
