import { Dimensions, ScrollView, View } from 'react-native'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import MainPagesHeader from '../../../components/MainPagesHeader'
import { getWeather, dailyForecast, showWeather, getLocation } from 'react-native-weather-api';
import { Box, Spinner, Text, useToast } from '@gluestack-ui/themed';
import WeatherCard from '../../../components/WeatherCard';
import PlantScanCard from '../../../components/PlantScanCard';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import axios from 'axios';
import NewsCard from '../../../components/NewsCard';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { GoogleGenerativeAI } from '@google/generative-ai';
import RNFS from 'react-native-fs';
import { Context } from '../../../Context/mainContext';
// import SwiperFlatList from 'react-native-swiper-flatlist';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);




export default function HomeScreen({navigation}:any) {
    const [weatherData, setWeatherData] = useState(null)
    
    const {mimeType, setImage, aiResp, setMimeType, selectedImage, setSelectedImage, GenerateResult} = useContext(Context)
    const [newsResp, setNewsResp] = useState([])
    const carouselRef = useRef(null)
    const Toast = useToast()
    const [index, setIndex] = useState(0);


    const RenderItem = ({item}:any) => {
        return <NewsCard key={item?.url} url={item?.url} time={item?.publishedAt} title={item?.title} img={item?.urlToImage}/>
    }
    const openImagePicker1 = async () => {
        const data = await launchImageLibrary({
            includeBase64:true,
            mediaType:'photo',
        })
        // if(data?.assets[0]?.fileSize>=4000000){
        //     Toast.show({
        //         actionType: "error",
        //         title: "Error!",
        //         description:
        //           "There was an error processing your request. Please try again later.",
        //       });
        //     return
        // }
        if (data.didCancel) {
            console.log('User cancelled camera');
          } else if (data.error) {
            console.log('Camera Error: ', data.error);
          } else {
            let imageUri = data.uri || data.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        setImage(data.assets)
          }
      };
      
      const openImagePicker = async () => {
        const data = await launchCamera({
            includeBase64:true,
            mediaType:'photo',
        })

        // if(data?.assets[0]?.fileSize>=4000000){
        //     Toast.show({
        //         actionType: "error",
        //         title: "Error!",
        //         description:
        //           "There was an error processing your request. Please try again later.",
        //       });
        //     return
        // }
        if (data.didCancel) {
            console.log('User cancelled camera');
          } else if (data.error) {
            console.log('Camera Error: ', data.error);
          } else {
            let imageUri = data.uri || data.assets?.[0]?.uri;
        setSelectedImage(imageUri);
        setImage(data.assets)
          }
        
        // setSelectedImage(imageUri)
      };
      

      const GetNewsUpdates = async() => {
        await axios.get("https://newsapi.org/v2/everything?q=crops&from=2024-07-09&sortBy=publishedAt&apiKey=ba66878914b94168961c2a1d1e4ee5ae").then(res=>{
            console.log(res.data?.articles)
            setNewsResp(res.data?.articles)
        }).catch(err=>{
            console.log(err)
        })
      }

     
    useEffect(()=>{
    getLocation().then((location) => {
			
        getWeather({
        
            key: "b0e765e35d32017ea9553370254856e2",
            lat: location.coords.latitude,
            lon: location.coords.longitude,
            unit: "metric"
        
        }).then(() => {
        
            let data = new showWeather();
            // temp = data.temp;
            // wind = data.wind;
            console.log(data, "data===")
            setWeatherData(data)
            console.log(weatherData?.icon)
        });
        
        },

        GetNewsUpdates()
    )}, [])

    // useEffect(() => {
    //     if (selectedImage && mimeType) {
    //       GenerateResult();
    //     }
    //   }, [selectedImage, mimeType]);
      
    
  return (
    <SafeAreaProvider style={{backgroundColor: "white"}}>
        <MainPagesHeader hamFunc={() => navigation.openDrawer()} />
            <ScrollView style={{backgroundColor: "white"}}>
                {/* <Text>{aiResp}</Text> */}
                {/* <Text>{error}</Text> */}
                <Box flex={1} mx={"$3"} my={"$3"}>
                <Text fontSize={"$xl"} fontWeight='$bold' mb={"$3"}>Trending News</Text>
                    {/* <SwiperFlatList autoplay autoplayDelay={2} autoplayLoop index={2} showPagination> */}
                    {/* {newsResp ? newsResp.map(res=>{
                       return <NewsCard key={res?.url} url={res.url} time={res.publishedAt} title={res.title} img={res.urlToImage}/>
                    }).sort(() => 0.5 - Math.random()).slice(0, 3):<Spinner size="large" color={"#08896A"}/>} */}
                    {/* </SwiperFlatList> */}
                    {newsResp ?<Carousel ref={carouselRef} sliderWidth={SLIDER_WIDTH} useScrollView={true} inactiveSlideShift={0}
        onSnapToItem={(index) => setIndex(index)}
        itemWidth={SLIDER_WIDTH} data={newsResp.sort(() => 0.5 - Math.random()).slice(0, 3)} renderItem={RenderItem}/>:<Spinner size="large" color={"#08896A"}/>}
        <Pagination
        dotsLength={newsResp.sort(() => 0.5 - Math.random()).slice(0, 3).length}
        activeDotIndex={index}
        carouselRef={carouselRef.current}
        dotStyle={{width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 8,
            backgroundColor: '#08896A',}}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
                </Box>
                <Box mx={"$3"} my={"$3"}>
                <Text fontSize={"$xl"} fontWeight='$bold' mb={"$3"}>Be Your Crop Doctor</Text>
                    <PlantScanCard openFunc={openImagePicker} openFunc1={openImagePicker1} img={selectedImage}/>
                </Box>
                <Box backgroundColor='white' mx={"$3"} my={"$3"}>
                    <Text fontSize={"$xl"} fontWeight='$bold' mb={"$3"}>Weather Report</Text>
                    {weatherData ? <WeatherCard name={weatherData.name} feels_like={weatherData.feels_like} description={weatherData.description} temp={weatherData.temp} country={weatherData.country} icon={weatherData.icon}/> : <Spinner size="large" color={"#08896A"}/>}
                </Box>
            </ScrollView>
    </SafeAreaProvider>
  )
}