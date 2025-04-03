import React, { useState } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function RepetitionExercise({ route, navigation }) {
  const { name, suggested } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text h3>{name}</Text>
      <Text style={{ fontSize: 32, marginVertical: 20 }}>Reps: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} containerStyle={{ marginTop: 10 }} />
      <Button
        title={`Go to Suggested: ${suggested}`}
        onPress={() =>
          navigation.navigate(
            suggested === 'Jump Rope' ? 'DurationExercise' : 'RepetitionExercise',
            { name: suggested, suggested: name }
          )
        }
        containerStyle={{ marginTop: 10 }}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} containerStyle={{ marginTop: 10 }} />
    </View>
  );
}
