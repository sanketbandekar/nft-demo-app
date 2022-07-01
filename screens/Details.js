import { Text, View, SafeAreaView, Image, StatusBar, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants'
import { CircleButton, ReactButton, SubInfo, FocusedStatusBar,
DetailsDesc, DetailsBid } from '../components'

const Details = ({ route, navigation }) => {
  const { data } = route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>

    </SafeAreaView>
  )
}

export default Details
