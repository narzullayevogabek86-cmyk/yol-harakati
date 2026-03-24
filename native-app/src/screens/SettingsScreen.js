import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';
import { useState } from 'react';
import { palette } from '../theme';

const fontSizes = ['Kichik', "O'rta", 'Katta'];
const languages = ["O'zbekcha", 'Русский', 'Qaraqalpaqsha', 'Тоҷикӣ'];

function SettingsRow({ label, hint, right }) {
  return (
    <View style={styles.row}>
      <View style={styles.rowBody}>
        <Text style={styles.rowLabel}>{label}</Text>
        {hint ? <Text style={styles.rowHint}>{hint}</Text> : null}
      </View>
      {right}
    </View>
  );
}

export function SettingsScreen() {
  const [isDark, setIsDark] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [instantFeedback, setInstantFeedback] = useState(true);
  const [fontSizeIndex, setFontSizeIndex] = useState(1);
  const [languageIndex, setLanguageIndex] = useState(0);

  return (
    <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.heroCard}>
        <Text style={styles.heroLabel}>Settings UI</Text>
        <Text style={styles.heroTitle}>Native sozlamalar ekran skeleti</Text>
        <Text style={styles.heroText}>
          Bu bosqichda UI va state native qilindi. Murakkab permission/native bridge ulanmasi keyin ulanadi.
        </Text>
      </View>

      <View style={styles.section}>
        <SettingsRow
          label="Tungi rejim"
          hint="Korinishi native theme bilan boshqariladi"
          right={<Switch value={isDark} onValueChange={setIsDark} trackColor={{ true: palette.brand }} />}
        />
        <SettingsRow
          label="Bildirishnomalar"
          hint="Reminder wiring keyingi bosqichda ulanadi"
          right={
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ true: palette.brand }}
            />
          }
        />
        <SettingsRow
          label="Javoblarni korsatish"
          hint="Immediate feedback"
          right={
            <Switch
              value={instantFeedback}
              onValueChange={setInstantFeedback}
              trackColor={{ true: palette.accent }}
            />
          }
        />
      </View>

      <View style={styles.section}>
        <Pressable style={styles.actionRow} onPress={() => setLanguageIndex((languageIndex + 1) % languages.length)}>
          <View style={styles.rowBody}>
            <Text style={styles.rowLabel}>Til</Text>
            <Text style={styles.rowHint}>Hozir: {languages[languageIndex]}</Text>
          </View>
          <Text style={styles.actionValue}>{languages[languageIndex]}</Text>
        </Pressable>

        <Pressable style={styles.actionRow} onPress={() => setFontSizeIndex((fontSizeIndex + 1) % fontSizes.length)}>
          <View style={styles.rowBody}>
            <Text style={styles.rowLabel}>Shrift o'lchami</Text>
            <Text style={styles.rowHint}>Quiz ekranidan oldin xavfsiz ko'chiriladigan sozlama</Text>
          </View>
          <Text style={styles.actionValue}>{fontSizes[fontSizeIndex]}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: 28,
  },
  heroCard: {
    backgroundColor: '#2f2140',
    borderRadius: 28,
    padding: 20,
    marginBottom: 16,
  },
  heroLabel: {
    color: '#d9c6ff',
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
    color: '#eee5ff',
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    backgroundColor: palette.surfaceStrong,
    borderRadius: 24,
    paddingHorizontal: 18,
    paddingVertical: 6,
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.line,
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
    paddingVertical: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: palette.line,
  },
  rowBody: {
    flex: 1,
  },
  rowLabel: {
    color: palette.ink,
    fontSize: 16,
    fontWeight: '700',
  },
  rowHint: {
    marginTop: 4,
    color: palette.muted,
    fontSize: 13,
    lineHeight: 18,
  },
  actionValue: {
    color: palette.brandStrong,
    fontSize: 13,
    fontWeight: '700',
    textAlign: 'right',
  },
});
