import { StyleSheet, Text, View, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BlogPostPreview = ({title, content, imageUrl}) => {
  return (
    <View>
      <Text style={{fontSize: 26}}>{title}</Text>
      <Text>{content}</Text>
      <Image
        style={{width: 150, height: 150}}
        source={{
          uri: imageUrl
        }}
      />
    </View>
  );
};

const Stack = createNativeStackNavigator();
function BlogPosts() {
  return (
    <View style={styles.container}>
      <BlogPostPreview 
        title="My first post"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/33/229033-050-73CE4FAB/Joseph-Stalin.jpg"
      />
      <BlogPostPreview 
        title="My second post"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/22/59822-050-98F24569/Karl-Marx-1870.jpg"
      />
      <BlogPostPreview 
        title="My third post"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/13/59613-050-D57A3D88/Vladimir-Ilich-Lenin-1918.jpg"
      />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={BlogPosts}
        options={{
          title: 'Communism gaming',
          headerStyle: {
            backgroundColor: '#fc0303',
          },
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});