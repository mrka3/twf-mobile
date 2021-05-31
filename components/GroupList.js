import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { StyleSheet, Text, View } from 'react-native';

class GroupList extends React.Component {
    render() {
      return (
          <View>
        <Swiper
        spaceBetween={25}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
      </Swiper>
      <Swiper>

      </Swiper>
      </View>
      );
      }
}

export default GroupList;