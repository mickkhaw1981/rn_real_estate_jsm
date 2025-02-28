import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "react-native";
import { Card, FeaturedCard } from "@/components/Cards";

export default function Index() {
  
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex-1 items-center justify-center">
        <Text>Home Screen</Text>
        <FeaturedCard />
        <Card />
      </View>
    </SafeAreaView>
  );
}