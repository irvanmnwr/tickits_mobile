import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import axios from '../../utils/axios';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
// Dropdown Picker
import styles from './styles';
import ListHeader from '../../components/ListHeader';

export default function ViewAll(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [releaseDate, setReleaseDate] = useState('');
  const [search, setSearch] = useState('');

  const [value, setValue] = useState('');

  useEffect(() => {
    getDataMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [releaseDate, value, search]);

  useEffect(() => {
    setTimeout(() => {
      getDataMovie();
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const getDataMovie = async () => {
    try {
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
      if (page <= totalPage) {
        const result = await axios.get(
          `movie?page=${page}&limit=2&releaseDate=${releaseDate}&sort=${value}&name=${search}`,
        );
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataMovie();
    }
  };

  const handleDetail = dataMovie => {
    props.navigation.navigate('Detail', {movieId: dataMovie.id});
  };

  const handleChangeSearch = text => {
    setPage(1);
    setSearch(text);
  };

  const handleLoadMore = () => {
    console.log('LOAD MORE DATA');
    if (!loadMore) {
      const newPage = page + 1;
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };

  console.log(search);

  const handleSortMonth = item => {
    setPage(1);
    setReleaseDate(item);
  };

  console.log(refresh);
  return (
    <ScrollView>
      <View style={styles.container}>
        <FlatList
          data={data}
          numColumns="2"
          ListHeaderComponent={
            <ListHeader
              handleChangeSearch={handleChangeSearch}
              handleSortMonth={handleSortMonth}
              releaseDate={releaseDate}
              value={value}
              setValue={setValue}
            />
          }
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.card}>
              <Card handleDetail={handleDetail} dataMovie={item} />
            </View>
          )}
          onRefresh={handleRefresh}
          refreshing={refresh}
          // onEndReached={}
          // onEndReachedThreshold={0.1}
          ListFooterComponent={() =>
            last ? (
              <View>
                <Text style={styles.bottomText}>-- No more data --</Text>
                {/* <Footer /> */}
              </View>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : (
              <Text style={styles.bottomText} onPress={handleLoadMore}>
                -- View More --
              </Text>
            )
          }
        />
      </View>
      <Footer />
    </ScrollView>
  );
}
