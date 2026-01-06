import { View, Text } from 'react-native'
import React from 'react'
import Header from './header'
import Banner from './banner'
const HomeScreen = () => {
    const bannerArray = [
        "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg",
  "https://images.pexels.com/photos/2232/vegetables-italian-pizza-restaurant.jpg",
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg",
  "https://images.pexels.com/photos/262897/pexels-photo-262897.jpeg",
  "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
  "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg",
  "https://images.pexels.com/photos/302680/pexels-photo-302680.jpeg",
    ]
  return (
    <View style={{flex:1}}>
        <Header/>
        <Banner banner={bannerArray}/>
            </View>
  )
}

export default HomeScreen