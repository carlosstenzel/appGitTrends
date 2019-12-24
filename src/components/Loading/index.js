import React from 'react';
import {ActivityIndicator, View, StyleSheet, Modal} from 'react-native';

export default function Loading({loading}) {
  return (
    <Modal visible={loading}>
      <View style={[loaders.container, loaders.horizontal]}>
        <ActivityIndicator size="large" color="#8e44ad" />
      </View>
    </Modal>
  );
}

const loaders = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
