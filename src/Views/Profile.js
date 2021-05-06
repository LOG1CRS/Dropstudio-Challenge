import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const Profile = (props) => {
  const { route } = props;
  const { contactId } = route.params;

  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    const getContactData = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${contactId}`
      );
      const data = await response.json();
      setContactData(data);
    };

    getContactData();
  }, []);

  return (
    <View style={styles.container}>
      {contactData ? (
        <ScrollView style={{ flex: 1, paddingTop: 20 }}>
          <View style={styles.mainInfoContainer}>
            <Avatar
              rounded
              title={contactData.name[0]}
              titleStyle={{ color: 'white' }}
              containerStyle={{ backgroundColor: 'gray', marginBottom: 20 }}
              size={100}
            />
            <Text style={styles.name}>{contactData.name}</Text>
            <Text style={styles.phone}>{contactData.phone}</Text>
          </View>
          <View style={styles.contactActions}>
            <TouchableOpacity>
              <Icon name="video" type="foundation" color="blue" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="phone" type="FontAwesome" color="blue" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="message"
                type="MaterialIcons"
                color="blue"
                size={30}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.extraInformation}>
            <Text style={styles.extraInfoTitle}>
              More About {contactData.name}
            </Text>
            <Text style={styles.extraInfoContent}>
              Email: {contactData.email}
            </Text>
            <Text style={styles.extraInfoContent}>
              Address:{' '}
              {`${contactData.address.street} ${contactData.address.suite}`}
            </Text>
            <Text style={styles.extraInfoContent}>
              Website: {contactData.website}
            </Text>
            <Text style={styles.extraInfoContent}>
              Company: {contactData.company.name}
            </Text>
          </View>
        </ScrollView>
      ) : (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color="blue" size="large" />
        </View>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  mainInfoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 28,
    marginVertical: 10,
  },
  phone: {
    fontSize: 20,
  },
  contactActions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 40,
    width: '100%',
  },
  extraInformation: {
    paddingTop: 30,
  },
  extraInfoTitle: {
    fontSize: 22,
    marginBottom: 10,
  },
  extraInfoContent: {
    fontSize: 16,
    marginVertical: 4,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
