import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { finesPreview } from '../data/finesPreview';
import { palette } from '../theme';

export function FinesScreen() {
  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>UI migration</Text>
        <Text style={styles.heroTitle}>Jarima moduli uchun native karta tizimi</Text>
        <Text style={styles.heroText}>
          Birinchi bosqichda ro'yxat, karta, summa va meta-chiplar native usulga ko'chirildi.
        </Text>
      </View>

      {finesPreview.map((item) => (
        <View key={item.id} style={styles.fineCard}>
          <View style={styles.metaRow}>
            <Text style={styles.articlePill}>{item.article}</Text>
            <Text style={styles.notePill}>{item.note}</Text>
          </View>
          <Text style={styles.fineSummary}>{item.summary}</Text>
          <Text style={styles.fineAmount}>{item.fine}</Text>
        </View>
      ))}

      <View style={styles.footerCard}>
        <Text style={styles.footerTitle}>Keyingi bosqich</Text>
        <Text style={styles.footerText}>
          To'liq parser va barcha moddalar ro'yxati keyingi iteratsiyada web moduldan ajratib olinadi.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 28,
    gap: 12,
  },
  heroCard: {
    backgroundColor: '#152f2b',
    borderRadius: 28,
    padding: 20,
    marginBottom: 14,
  },
  heroLabel: {
    color: '#a6e8db',
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 10,
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 30,
  },
  heroText: {
    marginTop: 8,
    color: '#d7f7f0',
    fontSize: 14,
    lineHeight: 20,
  },
  fineCard: {
    backgroundColor: palette.surfaceStrong,
    borderRadius: 22,
    padding: 18,
    marginBottom: 12,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 12,
  },
  articlePill: {
    flexShrink: 1,
    backgroundColor: '#eef4ff',
    color: palette.brandStrong,
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  notePill: {
    backgroundColor: '#fff1db',
    color: '#a56400',
    fontSize: 12,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  fineSummary: {
    color: palette.ink,
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
  },
  fineAmount: {
    marginTop: 10,
    color: palette.danger,
    fontSize: 24,
    fontWeight: '800',
  },
  footerCard: {
    backgroundColor: palette.card,
    borderRadius: 20,
    padding: 16,
    marginTop: 2,
  },
  footerTitle: {
    color: palette.ink,
    fontSize: 17,
    fontWeight: '800',
    marginBottom: 8,
  },
  footerText: {
    color: palette.muted,
    fontSize: 14,
    lineHeight: 20,
  },
});
