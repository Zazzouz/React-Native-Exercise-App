import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

export default function DurationExercise({ route, navigation }) {
  const { name, suggested } = route.params;
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => setTime((prev) => prev + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [running]);

  const formatTime = (s) => {
    const mins = String(Math.floor(s / 60)).padStart(2, '0');
    const secs = String(s % 60).padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View style={{ padding: 20, alignItems: 'center' }}>
      <Text h3>{name}</Text>
      <Text style={{ fontSize: 32, marginVertical: 20 }}>{formatTime(time)}</Text>
      <Button title="Start" onPress={() => setRunning(true)} />
      <Button title="Pause" onPress={() => setRunning(false)} containerStyle={{ marginTop: 10 }} />
      <Button title="Reset" onPress={() => { setRunning(false); setTime(0); }} containerStyle={{ marginTop: 10 }} />
      <Button
        title={`Go to Suggested: ${suggested}`}
        onPress={() =>
          navigation.navigate(
            suggested === 'Push-ups' ? 'RepetitionExercise' : 'DurationExercise',
            { name: suggested, suggested: name }
          )
        }
        containerStyle={{ marginTop: 10 }}
      />
      <Button title="Home" onPress={() => navigation.navigate('Home')} containerStyle={{ marginTop: 10 }} />
    </View>
  );
}
