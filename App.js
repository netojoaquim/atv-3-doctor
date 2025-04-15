import * as React from 'react';
import {View,Text,StyleSheet,TextInput,ScrollView,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar, Card, Icon } from '@rneui/themed';

const Stack = createNativeStackNavigator();

function Doctor() {
  return (
    <View style={styles.container}>
      <View style={styles.init}>
        <View style={styles.header}>
          <Avatar
            rounded
            size="medium"
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          />
          <View style={styles.headerText}>
            <Text style={styles.welcome}>Welcome</Text>
            <Text style={styles.username}>Dani Martinez</Text>
          </View>

        </View>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search doctor"
            style={styles.input}
          />
          <Icon name="search" type="feather" color="#777" />
        </View>
      </View>
      <View style={styles.categoria}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <Text style={styles.showAll}>Show All</Text>
      </View>

      <View style={styles.categoria}>
        {[
          { icon: 'user-md', label: 'Consultation' },
          { icon: 'tooth', label: 'Dentist' },
          { icon: 'heartbeat', label: 'Cardiologist' },
          { icon: 'hospital', label: 'Hospital' },
          { icon: 'ambulance', label: 'Emergency' },
          { icon: 'flask', label: 'Laboratory' }
        ].map((cat, index) => (
          <View key={index} style={styles.categoryItem}>
            <Icon name={cat.icon} type="font-awesome-5" color="#4f63ac" size={24} />
            <Text style={styles.categoryLabel}>{cat.label}</Text>
          </View>
        ))}
      </View>

      <Text style={styles.sectionTitle}>Top doctors</Text>
      <ScrollView>
        {[
          {
            name: 'dr. Olivia Wilson',
            specialty: 'Consultant - Physiotherapy',
            avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
          },
          {
            name: 'dr. Jonathan Patterson',
            specialty: 'Consultant - Internal Medicine',
            avatar: 'https://randomuser.me/api/portraits/men/46.jpg'
          }
        ].map((doc, index) => (
          <Card key={index} containerStyle={styles.doctorCard}>
            <View style={styles.doctorRow}>
              <Avatar rounded size="medium" source={{ uri: doc.avatar }} />
              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>{doc.name}</Text>
                <Text>{doc.specialty}</Text>
                <View style={styles.ratingRow}>
                  <Icon name="star" color="gold" size={16} />
                  <Text style={styles.ratingText}>4.9 (37 Reviews)</Text>
                </View>
              </View>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Doctor} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f6fc' },
  init: {
    backgroundColor: '#4f63ac',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  headerText: { marginLeft: 10 },
  welcome: { color: '#fff', fontSize: 20 ,fontWeight: 'bold'},
  username: { color: '#fff', fontSize: 16,  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 25,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  input: { flex: 1, fontSize: 16 },
  categoriesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 30,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  showAll: { color: '#4f63ac', fontSize: 14 },
  categoria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20 ,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
  },
  categoryLabel: { marginTop: 5, fontSize: 12, color: '#777' },
  doctorCard: { borderRadius: 10 },
  doctorRow: { flexDirection: 'row', alignItems: 'center' },
  doctorInfo: { marginLeft: 15 },
  doctorName: { fontWeight: 'bold', fontSize: 16 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  ratingText: { marginLeft: 5, fontSize: 13, color: '#777' },
});

export default App;