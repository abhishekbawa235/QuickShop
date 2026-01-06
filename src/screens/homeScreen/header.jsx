import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTranslation } from 'react-i18next';
const Header = () => {
    const {t} = useTranslation()

  return (
    <View style={styles.box}>
      <Text style={styles.text}>{t('QuickShop')}</Text>
<MaterialIcons name="shopping-cart" size={24} color="#000" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    box: {
        width:'100%',
        height: 60,
        backgroundColor: '#ffffff',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        paddingHorizontal:20,
          // 🔥 Shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,

    // 🔥 Shadow (Android)
    elevation: 4,
    },
    text:{
        fontSize:20,
        fontWeight:'800',
    }
})