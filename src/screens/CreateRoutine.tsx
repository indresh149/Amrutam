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
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFPercentage} from 'react-native-responsive-fontsize';

function CreateRoutineScreen(): React.JSX.Element {
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);

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
      </TouchableOpacity>

      <View style={styles.todayRoutineTextCont}>
        <Text style={styles.todayText}>Routines</Text>
        <Text style={styles.todayTextSub}>You have two routines currently</Text>
      </View>

      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={styles.greenButton}>
        <Text style={styles.buttonText}>Add Routine</Text>
      </TouchableOpacity>

      {showModal && (
        <Modal
          transparent
          animationType="fade"
          visible={showModal}
          onRequestClose={() => setShowModal(false)}>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <TouchableOpacity
                onPress={() => setShowModal(false)}
                style={styles.closeView}>
                <Image
                  source={require('../../assets/icons/close-circle.png')}
                  style={styles.crossImage}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowModal(true)}
                style={styles.greenButtonModel}>
                <Text style={styles.buttonText}>Create New Routine</Text>
              </TouchableOpacity>

              <View style={styles.listView}>
                <Text style={styles.listItem}>
                  . Your own personalized routine
                </Text>
                <Text>. Add upto 7 reminders</Text>
              </View>
              <Image
                style={styles.orView}
                source={require('../../assets/icons/or_line.png')}
              />

              <TouchableOpacity
                onPress={() => setShowModal(true)}
                style={styles.whiteButtonModel}>
                <Text style={styles.buttonTextgreen}>
                  Import From Templates
                </Text>
              </TouchableOpacity>

              <View style={styles.listView}>
                <Text style={styles.listItem}>
                  . Multiple templates created by us
                </Text>
                <Text>. Customize according to your need</Text>
              </View>

              <Text style={styles.viewSample}>view sample templates</Text>
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
}

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  upperView: {
    alignItems: 'flex-start',
  },
  todayRoutineTextCont: {
    marginVertical: 10,
  },
  todayText: {
    fontSize: RFPercentage(4),
    fontWeight: '400',
    color: 'black',
    marginBottom: 10,
  },
  todayTextSub: {
    fontSize: RFPercentage(2.1),
    color: '#ccc',
  },
  greenButton: {
    height: 50,
    marginTop: deviceHeight / 1.5,
    backgroundColor: '#3A643B',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '400',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    width: '95%',
    maxHeight: '60%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  closeView: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  crossImage: {
    width: 40,
    height: 40,
  },
  backIcon: {
    width: 30,
    height: 30,
    marginVertical: 20,
  },
  greenButtonModel: {
    marginTop: 40,
    width: '85%',
    height: 50,
    backgroundColor: '#3A643B',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  listView: {
    marginTop: 20,
    marginRight: 50,
  },
  listItem: {
    fontSize: RFPercentage(2.1),
    marginBottom: 10,
  },
  orView: {
    width: 200,
    height: 50,
    marginTop: 10,
    resizeMode: 'contain',
  },
  whiteButtonModel: {
    marginTop: 20,
    width: '85%',
    height: 50,
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    borderColor: '#3A643B',
    borderWidth: 1,
  },
  buttonTextgreen: {
    color: '#3A643B',
    fontWeight: '500',
  },
  viewSample: {
    borderBottomWidth: 2,
    borderBottomColor: '#333333CC',
    marginTop: 20,
    color: 'black',
  },
});

export default CreateRoutineScreen;
