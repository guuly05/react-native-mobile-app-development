import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const lessons = [
  { id: 1, title: 'React Native basics', description: 'Learn how screens and components work.' },
  { id: 2, title: 'Using state', description: 'Make your app respond to user actions.' },
  { id: 3, title: 'Building a layout', description: 'Arrange text, buttons, and cards.' },
];

export default function App() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  const toggleLesson = (lessonId: number) => {
    setCompletedLessons((currentLessons) =>
      currentLessons.includes(lessonId)
        ? currentLessons.filter((id) => id !== lessonId)
        : [...currentLessons, lessonId],
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.eyebrow}>MOBILE LEARNING</Text>
        <Text style={styles.title}>Learn by building</Text>
        <Text style={styles.subtitle}>
          Complete each lesson and watch your progress grow.
        </Text>

        <View style={styles.progressCard}>
          <View>
            <Text style={styles.progressLabel}>Your progress</Text>
            <Text style={styles.progressValue}>
              {completedLessons.length} of {lessons.length} complete
            </Text>
          </View>
          <Text style={styles.progressEmoji}>🎯</Text>
        </View>

        <Text style={styles.sectionTitle}>Lessons</Text>
        {lessons.map((lesson) => {
          const isComplete = completedLessons.includes(lesson.id);

          return (
            <Pressable
              key={lesson.id}
              onPress={() => toggleLesson(lesson.id)}
              style={[styles.lessonCard, isComplete && styles.completedCard]}
            >
              <View style={[styles.check, isComplete && styles.completedCheck]}>
                <Text style={styles.checkText}>{isComplete ? '✓' : lesson.id}</Text>
              </View>
              <View style={styles.lessonText}>
                <Text style={styles.lessonTitle}>{lesson.title}</Text>
                <Text style={styles.lessonDescription}>{lesson.description}</Text>
              </View>
            </Pressable>
          );
        })}

        <Text style={styles.hint}>Tap a lesson to mark it complete.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FB',
  },
  container: {
    padding: 24,
    paddingBottom: 40,
  },
  eyebrow: {
    color: '#5964D8',
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1.5,
    marginTop: 12,
  },
  title: {
    color: '#171A2B',
    fontSize: 32,
    fontWeight: '800',
    marginTop: 8,
  },
  subtitle: {
    color: '#6B7185',
    fontSize: 16,
    lineHeight: 24,
    marginTop: 10,
  },
  progressCard: {
    alignItems: 'center',
    backgroundColor: '#5964D8',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 28,
    padding: 20,
  },
  progressLabel: {
    color: '#DDE0FF',
    fontSize: 14,
    fontWeight: '600',
  },
  progressValue: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '700',
    marginTop: 6,
  },
  progressEmoji: {
    fontSize: 34,
  },
  sectionTitle: {
    color: '#171A2B',
    fontSize: 21,
    fontWeight: '700',
    marginBottom: 14,
    marginTop: 30,
  },
  lessonCard: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E8EAF1',
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
    padding: 16,
  },
  completedCard: {
    backgroundColor: '#EEF0FF',
    borderColor: '#C7CBFF',
  },
  check: {
    alignItems: 'center',
    backgroundColor: '#E9EBF4',
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  completedCheck: {
    backgroundColor: '#5964D8',
  },
  checkText: {
    color: '#5964D8',
    fontSize: 16,
    fontWeight: '800',
  },
  lessonText: {
    flex: 1,
    marginLeft: 14,
  },
  lessonTitle: {
    color: '#171A2B',
    fontSize: 16,
    fontWeight: '700',
  },
  lessonDescription: {
    color: '#777D91',
    fontSize: 13,
    lineHeight: 19,
    marginTop: 4,
  },
  hint: {
    color: '#858A9B',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },
});
