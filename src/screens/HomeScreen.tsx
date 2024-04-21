/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface ListItemData {
  id: string;
  image: any;
  name: string;
  type: string;
  time: string;
}

interface ListItemProps {
  item: ListItemData;
}

const dummyData: ListItemData[] = [
  {
    id: '1',
    image: require('../../assets/Images/drinking_water.png'),
    name: 'Drinking Water',
    type: 'Consumable',
    time: '09:30 AM',
  },
  {
    id: '2',
    image: require('../../assets/Images/Amrutam_care.png'),
    name: 'Amrutam Kuntal Care Hair S..',
    type: 'Application Based',
    time: '12:45 PM',
  },
];

function HomeScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

  const ListItem: React.FC<ListItemProps> = ({item}) => {
    return (
      <View style={styles.routineCards}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.typeAndTimeCont}>
            <Text style={{color: '#888'}}>{item.type}</Text>

            <View style={styles.clockAndTimeCont}>
              <Image
                source={require('../../assets/icons/clock.png')}
                style={{width: 15, height: 15, marginLeft: 10}}
              />
              <Text style={styles.timeText}>{item.time}</Text>
            </View>
          </View>
        </View>

        <TouchableOpacity onPress={() => setShowModal(true)}>
          <Image
            style={styles.arrow_greater}
            source={require('../../assets/Images/arrow-down.png')}></Image>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.mainContainer}>
      <View style={styles.upperBackgroundPic}>
        <ImageBackground
          source={require('../../assets/Images/upperBackground.png')}
          style={styles.imageBackground}>
          <View style={styles.titleAndIconCont}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>Namaste Indresh</Text>
              <Text style={styles.textSmall}>Welcome to Amrutam</Text>
            </View>
            <View style={styles.upperIconsCont}>
              <Image
                style={styles.notificationIcons}
                source={require('../../assets/icons/notification_icon.png')}
              />
              <Image
                style={styles.notificationIcons}
                source={require('../../assets/icons/profile_icon.png')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.searchContainer}>
        <Image
          style={styles.searchIcon}
          source={require('../../assets/icons/search_icon.png')}
        />
        <TextInput></TextInput>
      </View>

      <View style={styles.middleContainer}>
        <View>
          <Text style={styles.middleContainerHead}>You have taken</Text>
          <Text style={styles.middleContainerHead}>5000 steps today</Text>
          <Text style={styles.middleContSubHead}>
            Check out your Health Activity
          </Text>
        </View>
        <View style={styles.middleLowerContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Create' as never);
            }}
            style={styles.healthButton}>
            <Text style={styles.myHealthText}>My Health</Text>
            <Image
              style={styles.greaterIcon}
              source={require('../../assets/icons/greater_icon.png')}></Image>
          </TouchableOpacity>
          <Progress.Circle
            size={80}
            indeterminate={false}
            progress={0.5}
            borderColor="#3A643B"
            unfilledColor="#fff"
            borderWidth={2}
            thickness={10}
            strokeCap="round"
            color="#806BDA">
            <Text
              style={{
                color: 'white',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: [{translateX: -15}, {translateY: -8}],
              }}>
              {`${Math.round(0.5 * 100)}%`}
            </Text>
          </Progress.Circle>
        </View>
      </View>
      <View style={styles.todayRoutineTextCont}>
        <Text style={styles.todayText}>Today’s Routines</Text>
        <Text style={styles.todayTextSub}>
          You have 4 Routines remaining for the day
        </Text>
      </View>

      <FlatList
        scrollEnabled={false}
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ListItem item={item} />}
      />

      <TouchableOpacity
        style={styles.moreRoutinesCont}
        onPress={() => {
          navigation.navigate('Routines' as never);
        }}>
        <Text style={styles.moreRoutinesText}>More Routines (2)</Text>
        <Image
          style={styles.downArrow}
          source={require('../../assets/icons/arrow-down.png')}></Image>
      </TouchableOpacity>

      {showModal && (
        <View style={styles.modal}>
          <View style={styles.tabView}></View>
          <TouchableOpacity
            onPress={() => {
              setShowModal(false);
            }}
            style={styles.crossView}>
            <Image
              style={styles.iwaa}
              source={require('../../assets/icons/iwwa_option.png')}
            />
          </TouchableOpacity>

          <View style={styles.clockView}>
            <Image
              style={styles.clockIcon}
              source={require('../../assets/icons/clock.png')}
            />
            <Text style={styles.Eighteen}>18 min left</Text>
          </View>
          <Text style={styles.routineName}>Amrutam Skinkey Malt</Text>
          <Text style={styles.routineSub}>Skin Care Routine</Text>

          <Text style={styles.tbsCount}>Usage Quantity: 1 tbs</Text>

          <View style={styles.timeCont}>
            <View style={styles.greenBack}>
              <Text style={styles.beforetext}>Beforemeal</Text>
            </View>
            <Text style={styles.Eightam}>8:00 am </Text>
            <Text style={styles.line}>|</Text>
            <Text style={styles.ninepm}>9:00 pm</Text>
          </View>

          <TouchableOpacity style={styles.greenButton}>
            <Text style={styles.buttonText}>Mark as Complete</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.whiteButton}>
            <Text>Snooze for 10min</Text>
          </TouchableOpacity>

          <Text style={styles.skip}>Skip</Text>
        </View>
      )}
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  upperBackgroundPic: {
    height: deviceHeight / 4,
    overflow: 'hidden',
  },
  imageBackground: {
    resizeMode: 'cover',
    height: deviceHeight / 3.2,
  },
  titleAndIconCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  textContainer: {
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A643B',
  },
  textSmall: {
    fontSize: 16,
    color: '#3A643B',
  },
  upperIconsCont: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  notificationIcons: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: '#F0F0F0',
    borderRadius: 25,
    width: deviceWidth - 40,
    alignSelf: 'center',
    marginTop: 15,
  },
  searchIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  searchContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    marginTop: 10,
  },
  middleContainer: {
    alignSelf: 'center',
    width: deviceWidth - 40,
    height: deviceHeight / 3,
    backgroundColor: '#3A643B',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 10,
    borderRadius: 40,
  },
  middleContainerHead: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  middleContSubHead: {
    marginTop: 10,
    fontSize: 14,
    color: '#fff',
  },
  healthButton: {
    width: deviceWidth / 2.5,
    height: deviceHeight / 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 20,
  },
  myHealthText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3A643B',
  },
  greaterIcon: {
    width: 30,
    height: 30,
  },
  middleLowerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  todayRoutineTextCont: {
    marginTop: 20,
    marginLeft: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  todayText: {
    fontSize: 20,
    color: 'black',
  },
  todayTextSub: {
    marginTop: 5,
    fontSize: 14,
    color: '#A0A0A0',
  },
  cardImage: {
    width: 50,
    height: 50,
  },
  arrow_greater: {
    width: 20,
    height: 20,
  },
  routineCards: {
    width: deviceWidth - 20,
    height: deviceHeight / 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignSelf: 'center',
  },
  itemName: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  typeAndTimeCont: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 5,
  },
  clockAndTimeCont: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },
  timeText: {
    color: '#888',
    marginLeft: 5,
  },
  moreRoutinesCont: {
    flexDirection: 'row',
    width: deviceWidth - 20,
    height: deviceHeight / 16,
    justifyContent: 'space-between',
    marginLeft: 20,
    borderRadius: 20,
    marginTop: 10,
  },
  moreRoutinesText: {
    fontSize: 16,
    color: '#A0A0A0',
    marginTop: 10,
    marginLeft: 10,
  },
  downArrow: {
    width: 20,
    height: 20,
    marginTop: 10,
    marginRight: 20,
  },
  modal: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 2,
    width: '100%',
    height: '50%',
    position: 'absolute',
    borderRadius: 20,
    top: deviceHeight / 1.7,

    flexDirection: 'column',
    padding: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  crossView: {
    position: 'absolute',
    top: 40,
    right: 10,
  },
  iwaa: {
    width: 30,
    height: 30,
  },
  tabView: {
    position: 'absolute',
    width: 50,
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: deviceHeight / 1.8,
    top: 10,
    left: deviceWidth / 2.3,
  },
  clockView: {
    flexDirection: 'row',
    position: 'absolute',
    top: 40,
    left: 40,
  },
  clockIcon: {
    width: 25,
    height: 25,
  },
  Eighteen: {
    fontSize: RFPercentage(2),
    color: '#3A643B',
    marginLeft: 10,
    fontWeight: 'bold',
  },
  routineName: {
    fontSize: RFPercentage(2),
    marginTop: 50,
    color: 'black',
    marginLeft: 20,
  },
  routineSub: {
    marginTop: 5,
    fontSize: RFPercentage(1.8),
    color: '#A0A0A0',
    marginLeft: 20,
  },
  tbsCount: {
    marginTop: 20,
    fontSize: RFPercentage(2),
    color: 'black',
    marginLeft: 20,
    fontWeight: '600',
  },
  greenBack: {
    backgroundColor: '#E4FFE4',
    width: 100,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

    marginLeft: 20,
  },
  timeCont: {
    flexDirection: 'row',
    marginTop: 10,
  },
  Eightam: {
    color: '#3A643B',
    fontSize: RFPercentage(1.7),
    marginLeft: 5,
    marginTop: 5,
  },
  line: {
    marginTop: 5,
    marginLeft: 5,
  },
  ninepm: {
    color: 'black',
    fontSize: RFPercentage(1.7),
    marginLeft: 5,
    marginTop: 5,
  },
  beforetext: {
    color: '#3A643B',
    fontSize: RFPercentage(1.9),
  },
  greenButton: {
    width: deviceWidth - 40,
    height: deviceHeight / 16,
    backgroundColor: '#3A643B',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: RFPercentage(2),
  },
  whiteButton: {
    width: deviceWidth - 40,
    height: deviceHeight / 16,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10,
    borderColor: '#3A643B',
    borderWidth: 1,
  },
  skip: {
    color: '#3A643B',
    fontSize: RFPercentage(2),
    marginTop: 40,
    alignSelf: 'center',
  },
});

export default HomeScreen;
