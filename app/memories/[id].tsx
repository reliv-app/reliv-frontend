import { useLocalSearchParams } from "expo-router";
import { Text, View, Image} from "react-native";

const MemoryPage = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  return (
    <View>
      <Text>Memory Page - {id}</Text>
    </View>
  );
};

export default MemoryPage;