import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import { BottomTabs } from './src/components/BottomTabs';
import { PageHeader } from './src/components/PageHeader';
import { FinesScreen } from './src/screens/FinesScreen';
import { IntroScreen } from './src/screens/IntroScreen';
import { SettingsScreen } from './src/screens/SettingsScreen';
import { SignsScreen } from './src/screens/SignsScreen';
import { palette, tabs } from './src/theme';

const screenMeta = {
  intro: {
    title: "React Native start",
    subtitle: "Eng oson ekranlar alohida native qatlamga ko'chirildi.",
  },
  signs: {
    title: 'Belgilar',
    subtitle: "Kontent oqimi React Native'da, assetlar keyingi bosqichda ulanadi.",
  },
  fines: {
    title: 'Jarima va ballar',
    subtitle: "Avval UI va karta tuzilmasi ko'chirildi.",
  },
  settings: {
    title: 'Sozlamalar',
    subtitle: "UI native bo'ldi, murakkab native bog'lanishlar keyin ulanadi.",
  },
};

function renderScreen(activeTab) {
  if (activeTab === 'signs') {
    return <SignsScreen />;
  }

  if (activeTab === 'fines') {
    return <FinesScreen />;
  }

  if (activeTab === 'settings') {
    return <SettingsScreen />;
  }

  return <IntroScreen />;
}

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');
  const currentMeta = screenMeta[activeTab] || screenMeta.intro;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.appShell}>
        <View style={styles.orbPrimary} />
        <View style={styles.orbSecondary} />

        <PageHeader title={currentMeta.title} subtitle={currentMeta.subtitle} />

        <View style={styles.screenFrame}>{renderScreen(activeTab)}</View>

        <BottomTabs activeTab={activeTab} items={tabs} onChange={setActiveTab} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.shell,
  },
  appShell: {
    flex: 1,
    backgroundColor: palette.shell,
  },
  orbPrimary: {
    position: 'absolute',
    top: -72,
    right: -48,
    width: 196,
    height: 196,
    borderRadius: 98,
    backgroundColor: palette.orbPrimary,
  },
  orbSecondary: {
    position: 'absolute',
    top: 92,
    left: -72,
    width: 156,
    height: 156,
    borderRadius: 78,
    backgroundColor: palette.orbSecondary,
  },
  screenFrame: {
    flex: 1,
    marginHorizontal: 16,
    marginBottom: 14,
    paddingHorizontal: 4,
  },
});
