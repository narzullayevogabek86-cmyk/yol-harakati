import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import signsData from '../data/signs-static.json';
import { palette, signCategoryMeta } from '../theme';

const localizedSigns = signsData.localizedCategories?.uz || signsData.categories || {};
const categoryKeys = Object.keys(localizedSigns);

export function SignsScreen() {
  const [activeCategory, setActiveCategory] = useState(categoryKeys[0] || 'warning');
  const items = localizedSigns[activeCategory] || [];
  const meta = signCategoryMeta[activeCategory] || {
    label: activeCategory,
    tone: '#edf3f8',
  };

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.summaryCard}>
        <Text style={styles.summaryLabel}>Belgilar native preview</Text>
        <Text style={styles.summaryTitle}>{meta.label}</Text>
        <Text style={styles.summaryText}>
          Hozir kategoriya, sarlavha, kod va izohlar React Native qatlamda ishlayapti.
        </Text>
        <View style={styles.summaryStats}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{items.length}</Text>
            <Text style={styles.statLabel}>belgi</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{categoryKeys.length}</Text>
            <Text style={styles.statLabel}>kategoriya</Text>
          </View>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
        {categoryKeys.map((key) => {
          const chipMeta = signCategoryMeta[key] || { label: key, tone: '#edf3f8' };
          const active = key === activeCategory;
          return (
            <Pressable
              key={key}
              onPress={() => setActiveCategory(key)}
              style={[
                styles.categoryChip,
                { backgroundColor: active ? palette.ink : chipMeta.tone },
              ]}
            >
              <Text style={[styles.categoryChipText, active && styles.categoryChipTextActive]}>
                {chipMeta.label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      {items.map((item) => (
        <View key={item.id} style={styles.signCard}>
          <View style={styles.signCodeWrap}>
            <Text style={styles.signCode}>{item.code || 'Belgi'}</Text>
          </View>
          <Text style={styles.signTitle}>{item.title}</Text>
          {item.description ? <Text style={styles.signDescription}>{item.description}</Text> : null}
        </View>
      ))}

      <View style={styles.footerNote}>
        <Text style={styles.footerNoteText}>
          Birinchi bosqichda rasm assetlari emas, belgilar kontenti va navigatsiyasi ko'chirildi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 28,
  },
  summaryCard: {
    backgroundColor: '#122a3f',
    borderRadius: 28,
    padding: 20,
    marginBottom: 16,
  },
  summaryLabel: {
    color: '#9cc4da',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  summaryTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  summaryText: {
    marginTop: 8,
    color: '#d9ebf4',
    fontSize: 14,
    lineHeight: 21,
  },
  summaryStats: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 16,
  },
  statBox: {
    flex: 1,
    backgroundColor: '#1d3d56',
    borderRadius: 18,
    padding: 14,
  },
  statValue: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
  },
  statLabel: {
    marginTop: 4,
    color: '#a4c3d5',
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  chipsRow: {
    paddingBottom: 6,
    gap: 10,
    marginBottom: 16,
  },
  categoryChip: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },
  categoryChipText: {
    color: palette.ink,
    fontSize: 13,
    fontWeight: '700',
  },
  categoryChipTextActive: {
    color: '#ffffff',
  },
  signCard: {
    backgroundColor: palette.surfaceStrong,
    borderRadius: 22,
    padding: 18,
    marginBottom: 12,
  },
  signCodeWrap: {
    alignSelf: 'flex-start',
    backgroundColor: '#e7f4ff',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginBottom: 10,
  },
  signCode: {
    color: palette.brandStrong,
    fontSize: 12,
    fontWeight: '700',
  },
  signTitle: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
  },
  signDescription: {
    marginTop: 8,
    color: palette.muted,
    fontSize: 14,
    lineHeight: 20,
  },
  footerNote: {
    backgroundColor: palette.card,
    borderRadius: 20,
    padding: 16,
    marginTop: 4,
  },
  footerNoteText: {
    color: palette.ink,
    fontSize: 13,
    lineHeight: 19,
  },
});
