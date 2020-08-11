import React from "react";
import { View, Image, Text } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { RectButton } from "react-native-gesture-handler";

import styles from "./styles";
import landingImg from "../../assets/images/landing.png";
import StudyIcon from "../../assets/images/icons/study.png";
import GiveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

function Landing() {
  const { navigate } = useNavigation();

  function handleNavigationToGiveClassesPage() {
    navigate("GiveClasses");
  }

  function handleNavigateTOStudyPages() {
    navigate("Study");
  }
  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo,{"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>
      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateTOStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={StudyIcon} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigationToGiveClassesPage}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={GiveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>
      <Text style={styles.totalConnections}>
        Total de 285 conexões realizadas <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
