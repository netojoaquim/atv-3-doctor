import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, Card, Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const categories = [
  { icon: 'flight', name: 'Flights' },
  { icon: 'hotel', name: 'Hotels' },
  { icon: 'local-activity', name: 'Activities' },
];

const images = [
  'https://source.unsplash.com/featured/?beach',
  'https://source.unsplash.com/featured/?mountains',
  'https://source.unsplash.com/featured/?city',
];

const recommended = [
  'https://source.unsplash.com/featured/?paris',
  'https://source.unsplash.com/featured/?tokyo',
  'https://source.unsplash.com/featured/?newyork',
];

function Doctor() {
  return (
    <ScrollView>
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
          <View style={styles.busca}>
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
              <Icon name={cat.icon} type="font-awesome-5" color="#4f63ac" size={40} />
              <Text style={styles.categoryLabel}>{cat.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.doctor}>
          <Text style={styles.sectionTitle}>Top doctors</Text>
        </View>

        <ScrollView style={styles.doctors}>
          {[
            {
              name: 'dr. Olivia Wilson',
              specialty: 'Consultant - Physiotherapy',
              avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
              rate: 1.8,
              reviews: 12
            },
            {
              name: 'dr. Jonathan Patterson',
              specialty: 'Consultant - Internal Medicine',
              avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
              rate: 4.9,
              reviews: 37
            }
          ].map((doc, index) => (
            <Card key={index} containerStyle={styles.doctor}>
              <View style={styles.doctorRow}>
                <Avatar rounded size={90} source={{ uri: doc.avatar }} />
                <View style={styles.doctorInfo}>
                  <Text style={styles.doctorName}>{doc.name}</Text>
                  <Text>{doc.specialty}</Text>
                  <View style={styles.ratingRow}>
                    <Icon name="star" color="gold" size={30} />
                    <Text style={styles.ratingText}>{doc.rate} ({doc.reviews} Reviews)</Text>
                  </View>
                </View>
              </View>
            </Card>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

function Travel() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.init2}>
          <View style={styles.header2}>  
            <Icon name="flight" type="material" color="white" size={28} />
            <View style={styles.busca}>
            <TextInput
              placeholder="Search doctor"
              style={styles.input}
            />
            <Icon name="search" type="feather" color="#777" />
          </View>
          </View>

          <View style={styles.headerText}>
            <Text style={styles.welcome}>Welcome!</Text>
            <Text style={styles.username}>Donna Stroupe</Text>
            <Avatar
              rounded
              source={{ uri: "https://randomuser.me/api/portraits/women/1.jpg" }}
              size={48}
            />
          </View>
        </View>

        <View style={styles.categoria}>
          <Text style={styles.sectionTitle}>Categories</Text>
        </View>

        <View style={styles.categoria}>
          {categories.map((cat, i) => (
            <View key={i} style={styles.categoryItem}>
              <Icon name={cat.icon} type="material" color="#4f63ac" size={40} />
              <Text style={styles.categoryLabel}>{cat.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.doctor}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.doctors}>
          {images.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={{ width: 120, height: 100, borderRadius: 10, marginRight: 10 }} />
          ))}
        </ScrollView>

        <View style={styles.doctor}>
          <Text style={styles.sectionTitle}>Recommended</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.doctors}>
          {recommended.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={{ width: 160, height: 100, borderRadius: 10, marginRight: 10 }} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ marginTop: 50, textAlign: 'center' }}>Em construção</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        style={styles.tab}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            let iconType = 'font-awesome-5';
            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'Doctors':
                iconName = 'stethoscope';
                break;
              case 'Appointment':
                iconName = 'calendar';
                break;
              case 'Profile':
                iconName = 'user';
                break;
            }
            return (
              <Icon name={iconName} type={iconType} color={color} size={size} />
            );
          },
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabLabel,
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen name="Home" component={Doctor} options={{ headerShown: false }}/>
        <Tab.Screen name="Doctors" component={Travel} options={{ headerShown: false }} />
        <Tab.Screen name="Appointment" component={SettingsScreen} />
        <Tab.Screen name="Profile" component={SettingsScreen} />
      </Tab.Navigator>
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
  init2: {
    backgroundColor: '#4f63ac',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },
  header2: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent:'center'
  },
  headerText: { marginLeft: 10 },
  welcome: { color: '#fff', fontSize: 20 ,fontWeight: 'bold'},
  username: { color: '#fff', fontSize: 16,  },
  busca: {
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
  sectionTitle: { fontSize: 20 },
  showAll: { fontSize: 20 },
  categoryItem: {
    width: '30%',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#fff',
  },
  categoria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  doctor: {
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
  },
  doctors: {
    maxHeight: 200,
  },
  tabBar: {
    backgroundColor: '#4f63ac',
    paddingBottom: 10,
    paddingTop: 5,
    height: 70,
    position: 'absolute',
  },
  tabLabel: {
    fontSize: 12,
    color: '#fff',
  },
  categoryLabel: { marginTop: 5, fontSize: 15, color: '#777' },
  doctorCard: { borderRadius: 10 },
  doctorRow: { flexDirection: 'row', alignItems: 'center' },
  doctorInfo: { marginLeft: 15 },
  doctorName: { fontWeight: 'bold', fontSize: 16 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  ratingText: { marginLeft: 5, fontSize: 13, color: '#777' },
});

export default App;
