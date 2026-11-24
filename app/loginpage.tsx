import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function LoginPage() {
  return (
    <KeyboardAvoidingView
      style={styles.screen}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.decorationTop} />
      <View style={styles.decorationBottom} />

      <View style={styles.content}>
        <View style={styles.brand}>
          <View style={styles.brandMark}>
            <View style={styles.brandMarkInner} />
          </View>
          <Text style={styles.brandName}>Learnly</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to continue learning</Text>

          <View style={styles.form}>
            <View style={styles.field}>
              <Text style={styles.label}>Username</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your username"
                placeholderTextColor="#94A39B"
                autoCapitalize="none"
                accessibilityLabel="Username"
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter your password"
                placeholderTextColor="#94A39B"
                secureTextEntry
                autoCapitalize="none"
                accessibilityLabel="Password"
              />
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
              accessibilityRole="button"
            >
              <Text style={styles.buttonText}>Log in</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  decorationTop: {
    position: 'absolute',
    top: -130,
    right: -90,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: '#EAF4EE',
  },
  decorationBottom: {
    position: 'absolute',
    bottom: -170,
    left: -120,
    width: 320,
    height: 320,
    borderRadius: 160,
    backgroundColor: '#F2F8F4',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
  },
  brandMark: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: '#16864A',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  brandMarkInner: {
    width: 18,
    height: 18,
    borderRadius: 9,
    borderWidth: 4,
    borderColor: '#FFFFFF',
  },
  brandName: {
    color: '#123524',
    fontSize: 24,
    fontWeight: '800',
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#E4EEE7',
    padding: 24,
    shadowColor: '#123524',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 24,
    elevation: 5,
  },
  title: {
    color: '#123524',
    fontSize: 30,
    lineHeight: 36,
    fontWeight: '800',
  },
  subtitle: {
    color: '#6B7E73',
    fontSize: 16,
    marginTop: 6,
  },
  form: {
    marginTop: 28,
    gap: 18,
  },
  field: {
    gap: 8,
  },
  label: {
    color: '#345744',
    fontSize: 14,
    fontWeight: '700',
  },
  input: {
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: '#D9E6DE',
    borderRadius: 14,
    backgroundColor: '#FBFDFC',
    paddingHorizontal: 16,
    color: '#123524',
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    backgroundColor: '#16864A',
    marginTop: 4,
  },
  buttonPressed: {
    backgroundColor: '#106F3D',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
});
