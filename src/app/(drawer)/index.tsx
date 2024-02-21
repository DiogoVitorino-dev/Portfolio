import { StyleSheet } from 'react-native';

import { ComfortaaText, HumaneText, QuantumText, RadialGradient } from '@/components/shared';
import Colors from '@/constants/Colors';

export default function TabOneScreen() {
  return (
    <RadialGradient colors={[Colors.primary, Colors.background]} style={{ flex: 1 }}>
      <ComfortaaText style={styles.title}>Tab One</ComfortaaText>
      <QuantumText style={styles.title}>Tab One</QuantumText>
      <HumaneText style={styles.title}>Tab One</HumaneText>
    </RadialGradient>
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
    color: 'black',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
