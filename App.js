import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Avatar, Card, Icon } from '@rneui/themed';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const mensagens = [
  {
    name: 'Dr. Olivia Wilson',
    message: 'Olá! Seu exame está pronto.',
    time: '10:45 AM',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Dr. Jonathan Patterson',
    message: 'Gostaria de marcar uma consulta?',
    time: 'Ontem',
    unread: 0,
    avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
  },
  {
    name: 'Dr. Olivia Wilson',
    message: 'Olá! Seu exame está pronto.',
    time: '10:45 AM',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/women/42.jpg',
  },
  {
    name: 'Dr. Olivia Wilson',
    message: 'Olá! Seu exame está pronto.',
    time: '10:45 AM',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/women/58.jpg',
  },
  {
    name: 'Dr. Olivia Wilson',
    message: 'Olá! Seu exame está pronto.',
    time: '10:45 AM',
    unread: 2,
    avatar: 'https://randomuser.me/api/portraits/women/14.jpg',
  },
];

const categories = [
  { icon: 'flight', name: 'Flights' },
  { icon: 'hotel', name: 'Hotels' },
  { icon: 'local-activity', name: 'Activities' },
  { icon: 'flight', name: 'Flights' },
  { icon: 'hotel', name: 'Hotels' },
  { icon: 'local-activity', name: 'Activities' },
  { icon: 'hotel', name: 'Hotels' },
  { icon: 'local-activity', name: 'Activities' },
];

const images = [
  'https://as2.ftcdn.net/jpg/01/63/83/89/1000_F_163838964_LHz1EgQc88M1GcfkjFEKofOmpl75dsfo.jpg',
  'https://as2.ftcdn.net/jpg/01/63/83/89/1000_F_163838964_LHz1EgQc88M1GcfkjFEKofOmpl75dsfo.jpg',
  'https://as2.ftcdn.net/jpg/01/63/83/89/1000_F_163838964_LHz1EgQc88M1GcfkjFEKofOmpl75dsfo.jpg',
];

const recommended = [
  'https://as2.ftcdn.net/jpg/01/63/83/89/1000_F_163838964_LHz1EgQc88M1GcfkjFEKofOmpl75dsfo.jpg',
  'https://as2.ftcdn.net/jpg/01/63/83/89/1000_F_163838964_LHz1EgQc88M1GcfkjFEKofOmpl75dsfo.jpg',
  'https://as2.ftcdn.net/jpg/01/63/83/89/1000_F_163838964_LHz1EgQc88M1GcfkjFEKofOmpl75dsfo.jpg',
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
          
          <View style={styles.divisao}>
            <View style={styles.headeravatar}>
              <Avatar
                rounded
                size="medium"
                source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
              />
              <View style={styles.headerText}>
                <Text style={styles.welcome}>Welcome</Text>
                <Text style={styles.username}>Dani Martinez</Text>
              </View>
            </View>
            <View>
            <Icon name="bell" type="font-awesome" color="white" size={28} />
          </View>

          </View>
          
        </View>

        <View style={styles.categoria2}>
          <Text style={styles.sectionTitle}>Category</Text>
        </View>

        <View style={styles.categoria2}>
          {categories.map((cat, i) => (
            <View key={i} style={styles.categoryItem2}>
              <Icon name={cat.icon} type="material" color="#fff" size={30} />
              <Text style={styles.categoryLabel2}>{cat.name}</Text>
            </View>
          ))}
        </View>

        <View style={styles.menu}>
          <Text style={styles.sectionTitle}>Popular Destinations</Text>
          <Icon name='menu' type="Entypo" color="black" size={30} />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destinos}>
          {images.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={{ width: 120, height: 100, borderRadius: 10, marginRight: 10, }} />
          ))}
        </ScrollView>

        <View style={styles.doctor}>
          <Text style={styles.sectionTitle}>Recommended</Text>
          
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recomendado}>
          {recommended.map((img, i) => (
            <Image key={i} source={{ uri: img }} style={{ width: 160, height: 100, borderRadius: 10, marginRight: 10 }} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}

function Messages() {
  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20 }}>
        <Text style={styles.mensageTitle}>Mensagens & Chat</Text>
      </View>
      <View style={styles.text}>
        <Text style={styles.sectionfiltro}>Mark all read </Text>
        <Text style={styles.sectionfiltro}>Sort by time</Text>
      </View>
      {mensagens.map((item, index) => (
        <Card key={index} containerStyle={{ borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Avatar rounded size="medium" source={{ uri: item.avatar }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.name}</Text>
              <Text style={{ color: '#777' }}>{item.message}</Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={{ fontSize: 12, color: '#aaa' }}>{item.time}</Text>
              {item.unread > 0 && (
                <View style={{
                  backgroundColor: '#4f63ac',
                  borderRadius: 10,
                  paddingHorizontal: 8,
                  paddingVertical: 2,
                  marginTop: 5,
                }}>
                  <Text style={{ color: '#fff', fontSize: 12 }}>{item.unread}</Text>
                </View>
              )}
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
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
              case 'Messages':
                iconName = 'mail-bulk';
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
        <Tab.Screen name="Messages" component={Messages} options={{ headerShown: false }}/>
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
  headeravatar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  divisao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingHorizontal:40,
    marginBottom:30
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
  categoryItem2: {
    width: '25%',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 50,
    padding: 20,
    backgroundColor: '#4f63ac',
  },
  categoria: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 30,
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  categoria2: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  doctor: {
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 10,
  },
  doctors: {
    maxHeight: 200,
  },
  menu:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:20
  },
  destinos: {
   padding:20
  },
  recomendado: {
    padding:20
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
  text:{
    flexDirection:"row",
    justifyContent:"space-between",
    padding:20,
  },
  mensageTitle:{
    fontSize:25,
    textAlign:"right",
    marginTop:50
   
  },
  categoryLabel: { marginTop: 5, fontSize: 15, color: '#777' },
  categoryLabel2: { marginTop: 5, fontSize: 15, color: '#fff' },
  doctorCard: { borderRadius: 10 },
  doctorRow: { flexDirection: 'row', alignItems: 'center' },
  doctorInfo: { marginLeft: 15 },
  doctorName: { fontWeight: 'bold', fontSize: 16 },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  ratingText: { marginLeft: 5, fontSize: 13, color: '#777' },
});

export default App;
