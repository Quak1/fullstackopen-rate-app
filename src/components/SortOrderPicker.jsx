import { Picker } from "@react-native-picker/picker";

const SortOrderPicker = ({ state }) => {
  return (
    <Picker
      style={{ margin: 10 }}
      selectedValue={state.get}
      onValueChange={(itemValue) => state.set(itemValue)}
      mode="dropdown"
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  );
};

export default SortOrderPicker;
