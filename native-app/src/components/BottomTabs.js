import { Pressable, StyleSheet, Text, View } from 'react-native';
import { palette } from '../theme';

export function BottomTabs({ activeTab, items, onChange }) {
  return (
    <View style={styles.wrapper}>
      {items.map((item) => {
        const active = item.key === activeTab;
        return (
          <Pressable
            key={item.key}
            accessibilityRole="button"
            onPress={() => onChange(item.key)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Text style={[styles.badge, active && styles.badgeActive]}>{item.badge}</Text>
            <Text style={[styles.label, active && styles.labelActive]}>{item.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 18,
    padding: 8,
    borderRadius: 22,
    backgroundColor: palette.shellSoft,
    borderWidth: 1,
    borderColor: '#18384a',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 16,
  },
  tabActive: {
    backgroundColor: '#ffffff',
  },
  badge: {
    color: '#87a7b9',
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 4,
  },
  badgeActive: {
    color: palette.brandStrong,
  },
  label: {
    color: '#d7e7f1',
    fontSize: 12,
    fontWeight: '700',
  },
  labelActive: {
    color: palette.ink,
  },
});
