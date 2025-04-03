import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

const exercises = [
  { name: 'Push-ups', type: 'repetition', suggested: 'Running' },
  { name: 'Running', type: 'duration', suggested: 'Planks' },
  { name: 'Planks', type: 'duration', suggested: 'Swimming' },
  { name: 'Swimming', type: 'duration', suggested: 'Push-ups' },
];

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text h3 style={{ marginBottom: 20, textAlign: 'center' }}>Choose an Exercise</Text>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ alignItems: 'center' }}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === 'repetition' ? 'RepetitionExercise' : 'DurationExercise',
                { name: item.name, suggested: item.suggested }
              )
            }
            buttonStyle={styles.button}
            containerStyle={{ marginVertical: 10 }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    width: 200,
    alignSelf: 'center'
  }
});
