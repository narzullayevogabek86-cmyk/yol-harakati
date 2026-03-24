import { StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme';

export function PageHeader({ title, subtitle }) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.kickerRow}>
        <View style={styles.kickerDot} />
        <Text style={styles.kickerText}>YHQ Native Preview</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 18,
    paddingHorizontal: 20,
    paddingBottom: 14,
  },
  kickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  kickerDot: {
    width: 10,
    height: 10,
    borderRadius: 999,
    backgroundColor: palette.accent,
    marginRight: 8,
  },
  kickerText: {
    color: '#b6d5e6',
    fontSize: 12,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '800',
    lineHeight: 34,
  },
  subtitle: {
    marginTop: 8,
    color: '#c6d9e4',
    fontSize: 14,
    lineHeight: 20,
  },
});
