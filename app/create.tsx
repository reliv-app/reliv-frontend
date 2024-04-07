import { Image, View, StyleSheet, Text,  Pressable, TouchableOpacity, ScrollView} from 'react-native';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Appbar, Button, PaperProvider, Portal, Modal} from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import CalendarPicker from "react-native-calendar-picker";
import Ionicons from '@expo/vector-icons/Ionicons';

const CreatePage = () => {
  const _handleMore = () => console.log('Shown more');
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [location, setLocation] = useState("");

  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const onDateChange = (date) => {
    setSelectedStartDate(date);
  };

  const startDate = selectedStartDate ? selectedStartDate.toString() : "";

  const containerStyle = {backgroundColor: 'white', padding: 20};
  
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.canceled) {
      setImages(prevImages => [...prevImages, result.assets[0].uri]);
    }
  };

  const createMemory = () => {

  }
  
  return (
    <>
      <PaperProvider>
        <Appbar style = {styles.banner}>
          <Link href="/"><Appbar.BackAction/></Link>
          <Appbar.Content title="Create a New Memory" />
          <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar>

        <View style={styles.container}>

          <View style={styles.title}>
            <TextInput  
              label="Title"
              value={title}
              onChangeText={text => setTitle(text)}/>
          </View>

          <View style={styles.title}>
            <TextInput
              label="Location"
              value = {location}
              onChangeText={text => setLocation(text)}
            />
          </View>   

          <Portal>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
              <CalendarPicker onDateChange={onDateChange} />
              <Text>SELECTED DATE:{startDate}</Text>
              <Text>Click outside this area to dismiss.</Text>
            </Modal>
          </Portal>

          <View style={styles.date}>
            <TextInput
              label="Date"
              editable = {false}
              value = {startDate}
            />
            <TouchableOpacity onPress={showModal}>
              <Ionicons name="calendar" size={40} color="black" style={styles.calendar}/>
            </TouchableOpacity>
          </View>   

          <View style = {styles.button}>
            <View style = {button.alignment}>
                <Pressable style = {button.button}>
                  <Text style={button.text}>+</Text>
                </Pressable>  
                <Text style = {button.description}>Add Friends</Text>
            </View>
          </View>

          <View style = {styles.button}>
            <View style = {button.alignment}>
                <Pressable style = {button.button} onPress={pickImage}>
                  <Text style={button.text}>+</Text>
                </Pressable>
                <Text style = {button.description}>Select Photos</Text>
            </View>
          </View>
          <ScrollView horizontal>
            {images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={{ width: 150, height: 150, margin: 5 }} />
            ))}
          </ScrollView>


          <View style = {styles.button}>
            <View style = {button.alignment}>
              <Pressable style = {button.createButton} onPress = {createMemory}>
              <Link href="/"><Text style={button.text}>Create!</Text></Link>
              </Pressable>
            </View>
          </View>
        </View>

      </PaperProvider>
    </>
  );
};

export default CreatePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: 300,
    height: 300,
  },
  text:{
    fontSize: 30
  },
  banner:{
    backgroundColor: 'rgb(200, 213, 185)'
  },
  title:{
    padding:10
  }, 
  date:{
    flexDirection: 'row',
    padding:10,
    justifyContent:"center"
  },
  calendar:{
    paddingLeft:10,
    top:10
  },
  button:{
    padding:10
  }
});

const button = StyleSheet.create({
  button: {
    width: 40,
    height:40,
    borderRadius:20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(0, 0, 0, 0.1)'
  },
  text:{
    fontSize:20,
    fontWeight: 'bold',
  }, 
  alignment:{
    flexDirection: 'row',
    justifyContent: 'center',
    padding:5
  },
  description:{
    padding: 10
  },
  createButton:{
    width: 200,
    height:60,
    borderRadius:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"rgb(200, 213, 185)"
  }
})
