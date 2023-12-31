import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 5,
    borderBottomColor: "black",
    borderWidth: 1,
    padding: 4,
    borderRadius: 6,
    backgroundColor: "blue",
  },
  goalText: {
    color: "white",
  },
});
