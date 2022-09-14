import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, LogBox } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import { SliderBox } from "react-native-image-slider-box";

LogBox.ignoreLogs([
  "exported from 'deprecated-react-native-prop-types'.",
  ])

import kakao from './assets/home/카카오필통.jpg';
import nike from './assets/home/나이키모자1.jpg'
import handCream from './assets/home/핸드크림.jpg'



export default class HomeDetailScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('./assets/home/토익1.jpg'),
        require('./assets/home/토익2.jpg'),
        require('./assets/home/토익3.jpg'),
      ]
    };
  }

    render() {

      const { navigate } = this.props.navigation;

    return (
    <View style={styles.container}>




    <ScrollView style={styles.thrd}>
    <View>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={450}

        />
      </View>


      <View style={{marginLeft:20,marginTop:25,}}>
        <Text style={{fontSize:25,fontWeight:'700'}}>토익 단어 책 나눔합니다!</Text>
        <Text style={{fontSize:17,marginTop:7,color:'grey',fontWeight:'500'}}>돈암동 · 1분 전</Text>
      </View>


      <View style={{marginLeft:20,marginTop:35,}}>
        <Text style={styles.DetailText}>토익 단어책 나눔합니다~</Text>
        <Text style={styles.DetailText}>원하는 점수 받아서 나눔해요!</Text>
        <Text style={styles.DetailText}>깨끗하게 써서 상태는 양호합니다</Text>
        <Text style={styles.DetailText}>성여입이나</Text>
        <Text style={styles.DetailText}>정문에서 거래 희망해요!</Text>
      </View>


      <View>


        <View style={{backgroundColor:'#F2F2F2',marginTop:70, height:1.3,marginLeft:15, marginRight:15, marginBottom:5,}}></View>

        <View style={{flexDirection:'row'}}>
         <Ionicons name="person-circle-outline" size={45} color="grey" style={{marginTop:15, marginLeft:20}} />
         <View style={{flexDirection:'column'}}>
          <Text style={{marginTop:22, marginLeft:10, fontSize:17, fontWeight:'800'}}>
            쿨나눔해요
          </Text>
          <Text style={{marginTop:5, marginLeft:10, fontSize:14,}}>
            #돈암동 #U등급
          </Text>
         </View>
        </View>

        <View style={{backgroundColor:'#F2F2F2',marginTop:20, height:1.3,marginLeft:15, marginRight:15,}}></View>

        <Text style={{marginTop:50, marginLeft:20, fontSize:21, fontWeight:'600'}}>
          #쿨나눔해요님의 다른 게시물
        </Text>

        <View style={{flexDirection:'row',marginTop:20,  marginBottom:30,}}>
          <TouchableOpacity onPress={() => navigate('HomeDetailScreen7')} activeOpacity={0.5}>
            <Image source={nike} style={{height: 175, width:175, marginBottom:20,marginLeft:20,borderRadius:10,}}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigate('HomeDetailScreen9')} activeOpacity={0.5}>
            <Image source={handCream} style={{height: 175, width:175, marginBottom:20,marginLeft:20,borderRadius:10,}}/>
          </TouchableOpacity>        
        </View>


      </View>

    </ScrollView>

    

    <View style={styles.four}>
      <View style={{marginLeft:26,marginTop:10,color:'grey',flexDirection:'row'}}>
       <Feather name="heart" size={37} color="#078C74" style={{marginTop:5,}}/>      
         <TouchableOpacity onPress={() => navigate('ChatDetailScreen')} style={{backgroundColor:'#078C74',flex:0.91,marginLeft:23, borderRadius:10,marginBottom:-5}}>
           <Text style={{fontSize:22,fontWeight:'600',marginLeft:115, color:'white',marginTop:13,}}>채팅하기</Text>
         </TouchableOpacity>
      </View>
    </View>



    </View>
  );
}


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  Text:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  DetailText:{
    fontSize:18,
    fontWeight:'600',
    marginTop:5,
    color:'#2E2E2E'
  },
  fst:{
    flex:0.28,
  },
  secnd:{
    flex:1.4,
    backgroundColor:'white',
  },
  thrd:{
    flex:0.8,
    backgroundColor:'white',
  },

  four:{
    flex:0.12,
    backgroundColor:'white'
  }
});
