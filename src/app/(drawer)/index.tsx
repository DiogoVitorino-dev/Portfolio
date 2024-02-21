import { StyleSheet } from 'react-native';

import { ComfortaaText, QuantumText, HumaneText } from '@/components/StyledText';
import { View } from '@/components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <ComfortaaText style={styles.title}>Tab One</ComfortaaText>
      <QuantumText style={styles.title}>Tab One</QuantumText>
      <HumaneText style={styles.title}>Tab One</HumaneText>
      <View style={styles.separator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
