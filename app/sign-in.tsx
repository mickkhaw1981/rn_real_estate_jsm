import { Text, View, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import images from "@/constants/images";
import icons from "@/constants/icons";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";

const SignIn = () => {
    const { refetch, loading, isLogged } = useGlobalContext();

    // if not loading and logged in redirect to home
    if (!loading && isLogged) {
        return <Redirect href="/" />;
    }

  const handleSignIn = async () => {
    const result = await login();
    if (result) {
      refetch();
    } else {
      Alert.alert("Sign in failed");
    }
  };

  return (
    <SafeAreaView className="h-full bg-white">
      <View className="h-full">
          <Image source={images.onboarding} className="w-full h-4/6" resizeMode="contain" />

          <View className="px-10">
            <Text className="text-base text-center uppercase font-rubik text-black-200">
                Welcome to ReState
            </Text>
            <Text className="text-center text-3xl font-rubik-bold text-black-300 mt-1">
                Lets Get You Closer to {"\n"}
                <Text className="text-primary-300">Your Ideal Home</Text>
            </Text>
            <Text className="text-lg font-rubik text-black-200 text-center mt-6">
                Login to your account
            </Text>
            <TouchableOpacity onPress={handleSignIn} className="bg-white shadow-md shadow-zinc-300 rounded-full mt-5 py-4 px-6 flex-row items-center justify-center space-x-3">
                <Image
                    source={icons.google}
                    className="w-5 h-5"
                    resizeMode="contain"
                />
                <Text className="text-black-200 font-rubik px-2">Continue with Google</Text>
            </TouchableOpacity>
          </View>
      </View>
    </SafeAreaView>
  );
}

export default SignIn;
