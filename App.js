import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

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

const BlogListScreen = () => {
  const navigation = useNavigation();
  return (
      <ScrollView style={styles.Container}>
      <BlogPostPreview
        title="My first post"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/33/229033-050-73CE4FAB/Joseph-Stalin.jpg"
      />
      <Button title="Go to details" onPress={() => navigation.navigate('Details1')} />
      <BlogPostPreview 
        title="My second post"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/22/59822-050-98F24569/Karl-Marx-1870.jpg"
      />
      <Button title="Go to details" onPress={() => navigation.navigate('Details2')} />
      <BlogPostPreview 
        title="My third post"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/13/59613-050-D57A3D88/Vladimir-Ilich-Lenin-1918.jpg"
      />
      <Button title="Go to details" onPress={() => navigation.navigate('Details3')} />
      <BlogPostPreview 
        title="My third post"
        content="This is short text of the post"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/0a/Mao_Zedong_in_1959_%28cropped%29.jpg"
      />
      <Button title="Go to details" onPress={() => navigation.navigate('Details4')} />
      <BlogPostPreview 
        title="My third post"
        content="This is short text of the post"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kim_Il_Sung_Portrait-3.jpg/1200px-Kim_Il_Sung_Portrait-3.jpg"
      />
      <Button title="Go to details" onPress={() => navigation.navigate('Details5')} />
      </ScrollView>
  );
}

const BlogPostDetails = ({ title, content, imageUrl }) => {
  return (
    <View>
      <Text style={{ fontSize: 26 }}>{title}</Text>
      <Text>{content}</Text>
      <Image
        style={{ width: 200, height: 200 }}
        source={{
          uri: imageUrl
        }}
      />
      <Text>Add comments here</Text>
    </View>
  );
};

const BlogDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <BlogPostDetails
        title="Stalin"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/33/229033-050-73CE4FAB/Joseph-Stalin.jpg"
      />
    </View>
    
  );
}
const BlogDetailsScreen2 = () => {
  return (
    <View style={styles.container}>
      <BlogPostDetails
        title="Karl"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/22/59822-050-98F24569/Karl-Marx-1870.jpg"
      />
    </View>
    
  );
}
const BlogDetailsScreen3 = () => {
  return (
    <View style={styles.container}>
      <BlogPostDetails
        title="Vladimir"
        content="This is short text of the post"
        imageUrl="https://cdn.britannica.com/13/59613-050-D57A3D88/Vladimir-Ilich-Lenin-1918.jpg"
      />
    </View>
    
  );
}
const BlogDetailsScreen4 = () => {
  return (
    <View style={styles.container}>
      <BlogPostDetails
        title="Mao Zedong"
        content="This is short text of the post"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/0/0a/Mao_Zedong_in_1959_%28cropped%29.jpg"
      />
    </View>
    
  );
}
const BlogDetailsScreen5 = () => {
  return (
    <View style={styles.container}>
      <BlogPostDetails
        title="Kim Il Sung"
        content="This is short text of the post"
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Kim_Il_Sung_Portrait-3.jpg/1200px-Kim_Il_Sung_Portrait-3.jpg"
      />
    </View>
    
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BlogListScreen}
          options={{
            title: 'Communism gaming',
            headerStyle: {
              backgroundColor: '#fc0303',
            },
            headerTintColor: '#fff',
          }}
        />
      <Stack.Screen name="Details1" component={BlogDetailsScreen} options={{
            title: 'Communism gaming',
            headerStyle: {
              backgroundColor: '#fc0303',
            },
            headerTintColor: '#fff',
          }} />
      <Stack.Screen name="Details2" component={BlogDetailsScreen2} options={{
            title: 'Communism gaming',
            headerStyle: {
              backgroundColor: '#fc0303',
            },
            headerTintColor: '#fff',
          }} />
      <Stack.Screen name="Details3" component={BlogDetailsScreen3} options={{
            title: 'Communism gaming',
            headerStyle: {
              backgroundColor: '#fc0303',
            },
            headerTintColor: '#fff',
          }} />
      <Stack.Screen name="Details4" component={BlogDetailsScreen4} options={{
            title: 'Communism gaming',
            headerStyle: {
              backgroundColor: '#fc0303',
            },
            headerTintColor: '#fff',
          }}/>
      <Stack.Screen name="Details5" component={BlogDetailsScreen5} options={{
            title: 'Communism gaming',
            headerStyle: {
              backgroundColor: '#fc0303',
            },
            headerTintColor: '#fff',
          }}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  contentcontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});