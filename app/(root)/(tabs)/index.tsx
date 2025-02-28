import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import icons from "@/constants/icons";
import images from "@/constants/images";

import Search from "@/components/Search";
import Filters from "@/components/Filters";
import { Card, FeaturedCard } from "@/components/Cards";

import { useAppwrite } from "@/lib/useAppwrite";
import { useGlobalContext } from "@/lib/global-provider";
//import { getLatestProperties, getProperties } from "@/lib/appwrite";

const Home = () => {
  const { user } = useGlobalContext();

  const params = useLocalSearchParams<{ query?: string; filter?: string }>();

  // const { data: latestProperties, loading: latestPropertiesLoading } =
  //   useAppwrite({
  //     fn: getLatestProperties,
  //   });

  // const {
  //   data: properties,
  //   refetch,
  //   loading,
  // } = useAppwrite({
  //   fn: getProperties,
  //   params: {
  //     filter: params.filter!,
  //     query: params.query!,
  //     limit: 6,
  //   },
  //   skip: true,
  // });

  // useEffect(() => {
  //   refetch({
  //     filter: params.filter!,
  //     query: params.query!,
  //     limit: 6,
  //   });
  // }, [params.filter, params.query]);

  // const handleCardPress = (id: string) => router.push(`/properties/${id}`);

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="px-5">
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <Image 
              source={images.avatar} 
              className="w-12 h-12 rounded-full"
            />
            <View>
              <Text className="text-gray-500 text-base">Good Morning</Text>
              <Text className="text-xl font-semibold">Adrian Hajdin</Text>
            </View>
          </View>
          
          <TouchableOpacity>
            <Image 
              source={icons.bell} 
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>

        // Search component
        <Search />
    
        // Featured section
        <View className="flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold text-black-300">Featured</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">See all</Text>
          </TouchableOpacity>
        </View>

        <View className="flex placeholder:flex-row gap-5 my-5">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </View>

        // Featured section
        <View className="flex-row items-center justify-between mt-5">
          <Text className="text-xl font-rubik-bold text-black-300">Our Recommendation</Text>
          <TouchableOpacity>
            <Text className="text-base font-rubik-bold text-primary-300">See all</Text>
          </TouchableOpacity>
        </View>
        <Filters />

        <View className="flex flex-row gap-5 my-5">
          <Card />
          <Card />
        </View>
        
      </View>
    </SafeAreaView>
  );
};

export default Home;