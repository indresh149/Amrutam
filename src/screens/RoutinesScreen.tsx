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
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import * as Progress from 'react-native-progress';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface ListItemData {
  id?: string;
  image?: any;
  name?: string;
  type?: string;
  time?: string;
}

interface ListItemDataCard {
  id?: string;
  image?: any;
  name?: string;
  type?: string;
  time?: string;
  percent: number;
  count?: any;
}

interface ListItemDataCardCompleted {
  id?: string;
  image?: any;
  name?: string;
  type?: string;
  time?: string;
  percent: number;
  count?: any;
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

const dummyDataCard: ListItemDataCard[] = [
  {
    id: '1',
    image: require('../../assets/Images/focus_card.png'),
    name: 'Focus & Work',
    percent: 80,
    count: require('../../assets/Images/47_flower.png'),
  },
  {
    id: '2',
    image: require('../../assets/Images/skin_care_card.png'),
    name: 'Skin Care Rou..',
    percent: 40,
    count: require('../../assets/Images/8_flower.png'),
  },
  {
    id: '3',
    image: require('../../assets/Images/skin_care_card.png'),
    name: 'Skin Care Rou..',
    percent: 40,
    count: require('../../assets/Images/8_flower.png'),
  },
];

const ListItemDataCardCompleted: ListItemDataCardCompleted[] = [
  {
    id: '1',
    image: require('../../assets/Images/ache_img.png'),
    name: '(Ache Reduction)',
    percent: 12,
    count: require('../../assets/Images/47_flower.png'),
  },
  {
    id: '2',
    image: require('../../assets/Images/glow_img.png'),
    name: '(Skin Glow)',
    percent: 6,
    count: require('../../assets/Images/8_flower.png'),
  },
  {
    id: '3',
    image: require('../../assets/Images/glow_img.png'),
    name: '(Skin Glow)',
    percent: 6,
    count: require('../../assets/Images/glow_img.png'),
  },
];

interface ListItem {
  id: string;
  text: string;
  selected: boolean;
}

const data: ListItem[] = [
  {id: '1', text: 'All', selected: true},
  {id: '2', text: 'Created by Dr.', selected: false},
  {id: '3', text: 'Created by me', selected: false},
  {id: '4', text: 'Imported Template', selected: false},
];

interface ListItemCardProps {
  item: ListItemDataCard;
}

const ListItemCard: React.FC<ListItemCardProps> = ({item}) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.imageCard} />
      <View style={styles.textContainerRow}>
        <Text style={styles.nameLarge}>{item.name}</Text>
        <Image source={item.count} style={styles.countImage} />
      </View>
      <Text style={styles.reminderItems}>3 Reminder Items</Text>
      <View style={styles.flowerCont}>
        <Progress.Bar
          progress={item?.percent / 100}
          borderRadius={10}
          width={deviceWidth / 3}
          height={20}
          color="#3A643B"
        />
      </View>
      <Text style={styles.typeTimeText}>{item.percent}% Finished</Text>
    </View>
  );
};

interface ListItemCardCompletedProps {
  item: ListItemDataCardCompleted;
}

const ListItemCardCompleted: React.FC<ListItemCardCompletedProps> = ({
  item,
}) => {
  return (
    <View style={[styles.card, {height: deviceHeight / 2.7}]}>
      <Image source={item.image} style={styles.imageCard} />
      <View style={styles.bigNames}>
        <Text style={styles.nameLarge}>Skin Care Routine</Text>
        <Text style={styles.nameLarge}>{item.name}</Text>
      </View>

      <View style={styles.weekCont}>
        <Image
          source={require('../../assets/icons/calender_icons.png')}
          style={styles.calIcon}
        />
        <Text style={styles.weekText}>{item.percent} Weeks</Text>
      </View>
    </View>
  );
};

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

      <Image
        style={styles.arrow_greater}
        source={require('../../assets/Images/arrow-down.png')}></Image>
    </View>
  );
};

function RoutinesScreen(): React.JSX.Element {
  const navigation = useNavigation();

  const [items, setItems] = useState<ListItem[]>(data);

  const handleSelectItem = (itemId: string) => {
    const updatedItems = items.map(item =>
      item.id === itemId
        ? {...item, selected: true}
        : {...item, selected: false},
    );
    setItems(updatedItems);
  };

  const renderItem = ({item}: {item: ListItem}) => (
    <TouchableOpacity
      style={[styles.item, item.selected && styles.selectedItem]}
      onPress={() => handleSelectItem(item.id)}>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.mainContainer}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home' as never);
        }}
        style={styles.upperView}>
        <Image
          source={require('../../assets/icons/back_icon.png')}
          style={styles.backIcon}
        />
        <Text style={styles.upperViewText}>Routines</Text>
      </TouchableOpacity>

      <View style={styles.todayRoutineTextCont}>
        <Text style={styles.todayText}>Today’s Routines</Text>
        <Text style={styles.todayTextSub}>
          You have 4 Routines remaining for the day
        </Text>
      </View>

      <FlatList
        data={dummyData}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
        renderItem={({item}) => <ListItem item={item} />}
        scrollEnabled={false}
      />

      <TouchableOpacity style={styles.moreRoutinesCont} onPress={() => {}}>
        <Text style={styles.moreRoutinesText}>More Routines (2)</Text>
        <Image
          style={styles.downArrow}
          source={require('../../assets/icons/arrow-down.png')}></Image>
      </TouchableOpacity>

      <View style={[styles.todayRoutineTextCont, {marginTop: 5}]}>
        <Text style={styles.todayText}>My Routine</Text>
      </View>

      <FlatList
        data={dummyDataCard}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
        renderItem={({item}) => <ListItemCard item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.ViewMoreTextCont}>
        <Text style={styles.todayText}>Explore</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.seeMoreText}>See More</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <LinearGradient
        colors={['#F5F5F5', '#91A8FA78']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.skinCareCard}>
        <View style={styles.leftView}>
          <Text style={styles.skinCareTextTitle}>Skin Care Routine</Text>
          <Text style={styles.skinCareSubTitle}>Glass Skin</Text>
          <TouchableOpacity style={styles.exploreNowButton}>
            <Text>Explore Now</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.absoluteImageContainer}>
          <Image
            source={require('../../assets/Images/girl_img.png')}
            style={styles.imageGirl}
          />
        </View>
      </LinearGradient>

      <FlatList
        data={ListItemDataCardCompleted}
        keyExtractor={(item, index) => item?.id ?? index.toString()}
        renderItem={({item}) => <ListItemCardCompleted item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
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
    marginLeft: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  todayText: {
    fontSize: 20,
    fontWeight: '500',
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
  backIcon: {
    width: 22,
    height: 22,
    marginLeft: 20,
    marginTop: 20,
  },
  upperView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 0,
  },
  upperViewText: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 15,
    color: 'black',
  },
  card: {
    height: deviceHeight / 2.6,
    alignSelf: 'center',
    marginLeft: deviceWidth / 25,
    marginStart: deviceWidth / 22,
    marginEnd: deviceWidth / 40,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#ddd',
    padding: 10,
    marginTop: 10,
    width: deviceWidth / 2.2,
    marginBottom: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  imageCard: {
    width: 150,
    height: 150,
    borderRadius: 25,
    alignSelf: 'center',
  },
  typeTimeText: {
    marginTop: 5,
    color: '#888',
  },
  textContainerRow: {
    flexDirection: 'row',
    marginTop: 20,
  },
  nameLarge: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  flowerCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 8,
  },
  countImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10,
  },
  reminderItems: {
    color: '#888',
    marginTop: 5,
    marginBottom: 5,
  },
  ViewMoreTextCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  seeMoreText: {
    color: '#3A643B',
    fontWeight: 'bold',
  },
  item: {
    height: 40,
    padding: 10,
    marginTop: 10,
    marginStart: 20,
    marginLeft: 10,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  selectedItem: {
    backgroundColor: '#EAF2EA',
  },
  skinCareCard: {
    overflow: 'visible',
    width: deviceWidth - 20,
    height: deviceHeight / 3.6,
    flexDirection: 'row',

    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
  },
  leftView: {
    width: deviceWidth / 2,
  },
  rightView: {
    width: deviceWidth / 2,
  },
  skinCareTextTitle: {
    marginTop: 20,
    fontSize: RFPercentage(3),
    color: 'black',
    fontWeight: 'bold',
  },
  skinCareSubTitle: {
    marginTop: 5,
    fontSize: RFPercentage(2),
    color: 'black',
    fontWeight: 'bold',
  },
  exploreNowButton: {
    marginTop: 20,
    width: deviceWidth / 3,
    height: deviceHeight / 20,
    borderRadius: 8,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 5,
    paddingLeft: 20,
  },
  imageGirl: {
    marginRight: 20,
    width: deviceWidth / 2,
    height: deviceHeight / 3,
    borderRadius: 50,

    resizeMode: 'contain',
    overflow: 'hidden',
  },
  absoluteImageContainer: {
    position: 'absolute',
    top: -35,
    left: '65%',
    transform: [{translateX: -50}],
  },
  bigNames: {
    marginTop: 10,
  },
  weekCont: {
    flexDirection: 'row',
    marginTop: 20,
  },
  calIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  weekText: {
    color: '#888',
  },
});

export default RoutinesScreen;
