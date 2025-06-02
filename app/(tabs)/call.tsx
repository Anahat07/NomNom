import React from 'react';
import { StyleSheet, View } from 'react-native';

const MyScreen: React.FC = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F6EDD9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#d166a5',
    borderRadius: 12,
  },
});

export default MyScreen;
