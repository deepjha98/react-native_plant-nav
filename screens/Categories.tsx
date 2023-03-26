import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { FlatList, StyleSheet } from "react-native";

import CategoryCardTitle from "../components/CategoryCardTitle";
import { CATEGORIES } from "../data/dummy-data";
import { Category } from "../ts/interface";

const Categories = ({ navigation }: NativeStackScreenProps<any>) => {
  const handlePress = (category: Category) => {
    navigation.navigate("Meal Overview", {
      categoryId: category.id,
    });
  };
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(category) => category.id}
      renderItem={({ item: category }) => (
        <CategoryCardTitle
          category={category}
          onPress={() => handlePress(category)}
        />
      )}
      numColumns={2}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
