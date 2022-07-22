import { View, Image, StyleSheet } from "react-native";

import theme from "../../theme";
import Text from "../Text";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  info: {
    paddingLeft: 10,
    alignItems: "flex-start",
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  language: {
    color: "white",
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5,
  },
  text: {
    marginBottom: 5,
  },
});

const Description = ({ avatar, name, description, language }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: avatar }} />
      <View style={styles.info}>
        <Text fontWeight="bold" fontSize="subheading" style={styles.text}>
          {name}
        </Text>
        <Text color="textSecondary" style={styles.text}>
          {description}
        </Text>
        <Text style={[styles.text, styles.language]}>{language}</Text>
      </View>
    </View>
  );
};

export default Description;
