import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="text-4xl font-bold my-10">Welcome to ReState</Text>
      <Link href="/sign-in">
        <Text>Go to Sign In</Text>
      </Link>
      <Link href="/profile">
        <Text>Go to Profile</Text>
      </Link>
      <Link href="/explore">
        <Text>Go to Explore</Text>
      </Link>
      <Link href="/properties/123">
        <Text>Go to Property</Text>
      </Link>
    </View>
  );
}
