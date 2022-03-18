import { StyleSheet, Text, SafeAreaView } from 'react-native';

import AuthRoutes from './src/Routes/AuthRoutes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AuthRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
