import { StyleSheet, Text, View } from "react-native";

type Props = { title: string };

const MealCard = ({ title }: Props) => {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({});
