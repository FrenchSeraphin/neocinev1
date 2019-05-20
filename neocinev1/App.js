import React from 'react';
import { Button, Text, View, StyleSheet,Image, FlatList} from 'react-native';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';
import ImageSlider from 'react-native-image-slider';

//Vue Acceuil -----------------------------------------------
class HomeScreen extends React.Component {
//NavigationOtions ------------------------------------------
  static navigationOptions = {
    title:'Neocine - Acceuil',
    headerStyle: {
      backgroundColor: '#000099',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor:'#1f3d7a', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={[styles.welcome2, styles.white]}>A la une en ce moment:</Text>
        <ImageSlider images={[
          'http://fr.web.img2.acsta.net/r_1920_1080/pictures/19/04/04/09/04/0472053.jpg',
          'http://fr.web.img4.acsta.net/r_1920_1080/pictures/15/02/24/18/29/161927.jpg']}>
          <Image source={require('./images/Avengers.jpg')} onPress={() => this.props.navigation.navigate('Avengers1')}></Image>
        </ImageSlider>
        <Button 
          color='#afabab'
          title="Plus de films..."
          onPress={() => this.props.navigation.navigate('Films')}
        />
      </View>
    );
  }
}

//Vue Contact -----------------------------------------------
class Contact extends React.Component {
//NavigationOtions ------------------------------------------
  static navigationOptions = {
    title: 'Nous Contacter',
    headerStyle: {
      backgroundColor: '#002b80',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={[styles.container, styles.navyBlue]}>
        <ScrollView>
          <Text style={[styles.welcome, styles.white]}>Nous contacter</Text>
          <Text style={[styles.welcome2, styles.white]}>Adresse</Text>
          <Text style={[styles.justify, styles.white]}>234 Avenue de Colmar,{'\n'}67100 STRASBOURG </Text>
          <Text style={[styles.welcome2, styles.white]}>Téléphone</Text>    
          <Text style={[styles.justify, styles.white]}>03.88.12.34.77</Text>
          <Text style={[styles.welcome2, styles.white]}>Email</Text>    
          <Text style={[styles.justify, styles.white]}>contact@neocine.fr{'\n'}</Text>
          <Text style={[styles.welcome, styles.white]}>Nous Situer</Text>
          <Image style={{alignSelf:'center', height:250, width:280}} source={require('./images/Localization.png')} />
        </ScrollView>
      </View>
    );
  }
}

//Vue à préparer -----------------------------------------------
class Films extends React.Component {
//NavigationOtions ------------------------------------------
  static navigationOptions = {
    title: 'Films',
    headerStyle: {
      backgroundColor: '#002b80',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  constructor(props){

    super(props);
  
    this.state={
      GridListItems:[
        {key: "Avengers1", Title: "Avengers"},
        {key: "Avengers2", Title: "Avengers: Age of ultron"},
        {key: "Avengers3", Title: "Avengers: Infinity war"},
        {key: "Avengers4", Title: "Avengers: Endgame"},
      ]
    };
  }


  render() {
    return (
      <View style={[styles.container, styles.navyBlue]}>
        <ScrollView>
          <FlatList 
            data={this.state.GridListItems}
            renderItem={({item}) => 
            <View style={styles.GridViewContainer}>
              <Text style={styles.GridViewTextLayout} onPress={() => this.props.navigation.navigate(item.key)}>{item.Title}</Text>
            </View>}
          />
        </ScrollView>
      </View>
    );
  }
}

//Vue film: Avengers 1 -----------------------------------------------
class Avengers1 extends React.Component {
//NavigationOtions ------------------------------------------
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#002b80',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={[styles.container, styles.navyBlue]}>
          <Image style={styles.avatar} source={require('./images/Avengers.jpg')}/>
          <View style={styles.header}></View>
          <ScrollView>
            <View style={styles.body}>
              <Text style={[styles.name, styles.white]}>Marvel's Avengers</Text>
              <Text style={[styles.info, styles.white]}>Date de sortie: 25 avril 2012{'\n'}
                                        Produit par: Joss Wheddon{'\n'}
                                        Avec: Robert Downey Jr., Chris Evans, Mark Ruffalo, ...{'\n'}
                                        Genres: Action, Aventure, Science fiction{'\n'}
                                        Nationalité: Américain</Text>
              <Text style={[styles.description, styles.white]}>Synopsis:{'\n'}Lorsque Nick Fury, le directeur du S.H.I.E.L.D., l'organisation qui préserve la paix au plan mondial, cherche à former une équipe de choc pour empêcher la destruction du monde, Iron Man, Hulk, Thor, Captain America, Hawkeye et Black Widow répondent présents.
Les Avengers ont beau constituer la plus fantastique des équipes, il leur reste encore à apprendre à travailler ensemble, et non les uns contre les autres, d'autant que le redoutable Loki a réussi à accéder au Cube Cosmique et à son pouvoir illimité...</Text>
              
            </View>
          </ScrollView>
      </View>
    );
  }
}

//Vue film: Avengers 2 -----------------------------------------------
class Avengers2 extends React.Component {
//NavigationOtions ------------------------------------------
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#002b80',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={[styles.container, styles.navyBlue]}>
          <Image style={styles.avatar} source={require('./images/Avengers2.jpg')}/>
          <View style={styles.header}></View>
          <ScrollView>
            <View style={styles.body}>
              <Text style={[styles.name, styles.white]}>Marvel's Avengers: Age of ultron</Text>
              <Text style={[styles.info, styles.white]}>Date de sortie: 22 avril 2015{'\n'}
                                        Produit par: Joss Wheddon{'\n'}
                                        Avec: Robert Downey Jr., Chris Evans, Mark Ruffalo, ...{'\n'}
                                        Genres: Action, Aventure, Science fiction{'\n'}
                                        Nationalité: Américain</Text>
              <Text style={[styles.description, styles.white]}>Synopsis:{'\n'}Alors que Tony Stark tente de relancer un programme de maintien de la paix jusque-là suspendu, les choses tournent mal et les super-héros Iron Man, Captain America, Thor, Hulk, Black Widow et Hawkeye vont devoir à nouveau unir leurs forces pour combattre le plus puissant de leurs adversaires : le terrible Ultron, un être technologique terrifiant qui s’est juré d’éradiquer l’espèce humaine.
Afin d’empêcher celui-ci d’accomplir ses sombres desseins, des alliances inattendues se scellent, les entraînant dans une incroyable aventure et une haletante course contre le temps…</Text>
              
            </View>
          </ScrollView>
      </View>
    );
  }
}

//Vue film: Avengers 3 -----------------------------------------------
class Avengers3 extends React.Component {
//NavigationOtions ------------------------------------------
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#002b80',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={[styles.container, styles.navyBlue]}>
          <Image style={styles.avatar} source={require('./images/Avengers3.jpg')}/>
          <View style={styles.header}></View>
          <ScrollView>
            <View style={styles.body}>
              <Text style={[styles.name, styles.white]}>Marvel's Avengers: Infinity war</Text>
              <Text style={[styles.info, styles.white]}>Date de sortie: 25 avril 2018{'\n'}
                                        Produit par: Joe Russo, Anthony Russo{'\n'}
                                        Avec: Robert Downey Jr., Chris Evans, Mark Ruffalo, ...{'\n'}
                                        Genres: Action, Fantastique, Aventure{'\n'}
                                        Nationalité: Américain</Text>
              <Text style={[styles.description, styles.white]}>Synopsis:{'\n'}Les Avengers et leurs alliés devront être prêts à tout sacrifier pour neutraliser le redoutable Thanos avant que son attaque éclair ne conduise à la destruction complète de l’univers.</Text>
              
            </View>
          </ScrollView>
      </View>
    );
  }
}

//Vue film: Avengers 4 -----------------------------------------------
class Avengers4 extends React.Component {
//NavigationOtions ------------------------------------------
  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#002b80',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={[styles.container, styles.navyBlue]}>
          <Image style={styles.avatar} source={require('./images/Avengers4.jpg')}/>
          <View style={styles.header}></View>
          <ScrollView>
            <View style={styles.body}>
              <Text style={[styles.name, styles.white]}>Marvel's Avengers: Endgame</Text>
              <Text style={[styles.info, styles.white]}>Date de sortie: 24 avril 2019{'\n'}
                                        Produit par: Joe Russo, Anthony Russo{'\n'}
                                        Avec: Robert Downey Jr., Chris Evans, Mark Ruffalo, ...{'\n'}
                                        Genres: Action, Fantastique, Aventure{'\n'}
                                        Nationalité: Américain</Text>
              <Text style={[styles.description, styles.white]}>Synopsis:{'\n'}Thanos ayant anéanti la moitié de l’univers, les Avengers restants resserrent les rangs dans ce vingt-deuxième film des Studios Marvel, grande conclusion d’un des chapitres de l’Univers Cinématographique Marvel.</Text>
              
            </View>
          </ScrollView>
      </View>
    );
  }
}

const HomeStack = createStackNavigator({
  Home: { screen: HomeScreen },
  Films: { screen: Films },
  Avengers1: {screen: Avengers1},
  Avengers2: {screen: Avengers2},
  Avengers3: {screen: Avengers3},
  Avengers4: {screen: Avengers4},
});

const ContactStack = createStackNavigator({
  Contact: { screen: Contact },
  Films: { screen: Films},
});

export default createAppContainer(createBottomTabNavigator(
  {
    Acceuil: { screen: HomeStack },
    Films: { screen: Films },
    Contact: { screen: ContactStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 40,
    fontWeight:'bold',
    textAlign: 'center',
    margin: 10,
  },
  welcome2: {
    fontSize: 25,
    fontWeight:'bold',
    textAlign: 'justify',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navyBlue:{
    backgroundColor:"#1f4d7a",
  },
  white:{
    color:'#ffffff'
  },
  justify:{
    fontSize: 20,
    textAlign: 'justify',
    margin: 10,
  },
  itemCenter:{
    alignItems:'center',
  },
  //---STYLE POUR AVENGERS4
  header:{
    backgroundColor: "#00BFFF",
  },
  avatar: {
    width: 150,
    height: 200,
    borderWidth: 4,
    borderColor: "white",
    alignSelf:'center',
    marginTop : 100
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
    alignItems: 'center',
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    marginTop:10,
    fontWeight: "300",
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:5,
    textAlign: 'justify',
    padding: 20
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  //---STYLE POUR DETAILS
  headerText: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    fontWeight: "bold"
  },
  GridViewContainer: {
   flex:1,
   justifyContent: 'center',
   alignItems: 'center',
   height: 100,
   margin: 5,
   backgroundColor: '#003366',
},
GridViewTextLayout: {
   fontSize: 20,
   fontWeight: 'bold',
   justifyContent: 'center',
   color: '#fff',
   padding: 10,
 }
});
