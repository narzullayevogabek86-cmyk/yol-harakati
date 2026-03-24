import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { introHighlights, introSlides } from '../data/introSlides';
import { palette } from '../theme';

export function IntroScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.heroCard}>
        <Text style={styles.heroEyebrow}>Phase 1</Text>
        <Text style={styles.heroTitle}>React Native migratsiyasi boshlandi</Text>
        <Text style={styles.heroText}>
          Eng oson va xavfi past ekranlar alohida native qatlamga chiqarildi. Hozirgi ilova ishlashida
          uzilish yo'q.
        </Text>
      </View>

      {introSlides.map((slide) => (
        <View key={slide.id} style={styles.slideCard}>
          <Text style={styles.slideEyebrow}>{slide.eyebrow}</Text>
          <Text style={styles.slideTitle}>{slide.title}</Text>
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      ))}

      <View style={styles.highlightCard}>
        <Text style={styles.highlightTitle}>Nega shu tartib tanlandi?</Text>
        {introHighlights.map((item) => (
          <View key={item} style={styles.highlightRow}>
            <View style={styles.highlightDot} />
            <Text style={styles.highlightText}>{item}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 28,
    gap: 14,
  },
  heroCard: {
    backgroundColor: '#0e9f8b',
    borderRadius: 28,
    padding: 22,
  },
  heroEyebrow: {
    color: '#d9fff6',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '800',
    lineHeight: 31,
  },
  heroText: {
    marginTop: 10,
    color: '#eafffb',
    fontSize: 15,
    lineHeight: 22,
  },
  slideCard: {
    backgroundColor: palette.surfaceStrong,
    borderRadius: 24,
    padding: 18,
  },
  slideEyebrow: {
    color: palette.brandStrong,
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  slideTitle: {
    color: palette.ink,
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 25,
  },
  slideText: {
    marginTop: 8,
    color: palette.muted,
    fontSize: 14,
    lineHeight: 21,
  },
  highlightCard: {
    backgroundColor: palette.card,
    borderRadius: 24,
    padding: 18,
  },
  highlightTitle: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 12,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  highlightDot: {
    width: 8,
    height: 8,
    borderRadius: 999,
    backgroundColor: palette.brand,
    marginTop: 6,
    marginRight: 10,
  },
  highlightText: {
    flex: 1,
    color: palette.ink,
    fontSize: 14,
    lineHeight: 20,
  },
});
