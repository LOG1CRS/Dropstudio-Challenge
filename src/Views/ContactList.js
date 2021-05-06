import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

const ContactList = (props) => {
  const { navigation } = props;
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users'
      );
      const data = await response.json();
      setContacts(data);
    };

    getData();
  }, []);

  const handleContactSelection = (contact) => {
    navigation.navigate('Profile', { contactId: contact.id });
  };

  return (
    <ScrollView style={styles.container}>
      {contacts ? (
        contacts.map((item, index) => (
          <View key={index} style={styles.contact}>
            <View style={{ flexGrow: 1, justifyContent: 'center' }}>
              <TouchableOpacity onPress={() => handleContactSelection(item)}>
                <Text style={styles.contactName}>{item.name}</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity>
                <Icon
                  name="phone"
                  type="FontAwesome"
                  color="blue"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="message"
                  type="MaterialIcons"
                  color="blue"
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Icon
                  name="dots-three-vertical"
                  type="entypo"
                  color="blue"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.activityIndicatorContainer}>
          <ActivityIndicator color="blue" size="large" />
        </View>
      )}
    </ScrollView>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  indicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contact: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  contactName: {
    fontSize: 15,
  },
  icon: {
    marginHorizontal: 5,
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
