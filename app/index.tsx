import { View, StyleSheet, Text, StatusBar, Pressable} from 'react-native';
import { useState } from 'react';
import { Link } from 'expo-router';
import {Appbar, PaperProvider, Searchbar } from 'react-native-paper';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const _handleMore = () => console.log('Shown more');

  return (
    <>
      <PaperProvider>
        <Appbar style = {styles.banner}>
          <Appbar.Content title="Memories" />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar>

        <View style={styles.container}>
            <View style = {styles.search}>
                <Searchbar
                    placeholder="Search"
                    onChangeText={setSearchQuery}
                    value={searchQuery}
                />
            </View>
        </View>
        <View style = {button.alignment}>
            <Link href="/create" asChild>
                <Pressable style = {button.button}>
                        <Text style={button.text}>+</Text>
                </Pressable>
            </Link>
        </View>
    </PaperProvider>
  </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    image: {
      width: 300,
      height: 300,
    },
    text:{
      fontSize: 30,
    },
    search:{
      padding:10,
      alignItems: 'center',
    },
    banner:{
      backgroundColor: 'rgb(200, 213, 185)'
    }
  });
  
  const button = StyleSheet.create({
    button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'rgba(0, 0, 0, 0.1)', // Transparent black color
      justifyContent: 'center',
      alignItems: 'center',
    },
    text:{
      fontSize:30,
      fontWeight: 'bold',
    }, 
    alignment:{
      flexDirection: 'row',
      justifyContent: 'flex-end',
      padding: 20
    }
  })
  