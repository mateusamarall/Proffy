import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, Text } from "react-native";
import { BorderlessButton } from "react-native-gesture-handler";

import BackIcon from "../../assets/images/icons/back.png";
import logoImg from "../../assets/images/logo.png";
interface PageHeaderProps {
  title: string;
}
import styles from "./styles";
const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();
  function handleGoBack() {
    navigate("Landing");
  }
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={BackIcon} resizeMode="contain" />
        </BorderlessButton>
        <Image source={logoImg} resizeMode="contain" />
      </View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default PageHeader;
