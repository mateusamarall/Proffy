import React from "react";
import { View } from "react-native";
import PageHeader from "../../components/PageHeader";

import styles from "./styles";
function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffys Favoritos" />
    </View>
  );
}
export default TeacherList;
