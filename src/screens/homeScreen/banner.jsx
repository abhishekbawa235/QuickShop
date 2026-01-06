import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
  ICarouselInstance,
  Pagination,
} from "react-native-reanimated-carousel";
 
const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;
 
function Banner({banner}) {
  const ref = React.useRef(null);
  const progress = useSharedValue(0);
  
  const onPressPagination = (index) => {
    ref.current?.scrollTo({
      /**
       * Calculate the difference between the current index and the target index
       * to ensure that the carousel scrolls to the nearest index
       */
      count: index - progress.value,
      animated: true,
    });
  };
 
  return (
    <View style={{ flex: 1 }}>
      <Carousel
        ref={ref}
        // style={{ width:width, height: width / 2 }}
          width={width}          // ✅ REQUIRED
  height={width / 2}
        data={data}
        onProgressChange={progress}
        autoPlay
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              paddingHorizontal:20
            }}
          >
            <Image  source={{uri: banner[index]}} width={'100%'} height={width/2} borderRadius={20}/>
            {/* <Text style={{ textAlign: "center", fontSize: 30 }}>{banner[index]}</Text> */}
          </View>
        )}
      />
 
      <Pagination.Basic
        progress={progress}
        data={data}
        dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
        containerStyle={{ gap: 5, marginTop: 10 }}
        onPress={onPressPagination}
      />
    </View>
  );
}
 
export default Banner;