import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { StyleSheet, FlatList, View } from "react-native";
import MealCard from "../components/MealCard";

import { MEALS } from "../data/dummy-data";

type RootStackParamList = {
  Home: undefined;
  "Meal Overview": { categoryId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Meal Overview">;

const Meals = ({ route }: Props) => {
  const displayedMeals = MEALS.filter((meals) =>
    meals.categoryIds.includes(route.params.categoryId)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => <MealCard title={item.title} />}
      />
    </View>
  );
};

export default Meals;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
