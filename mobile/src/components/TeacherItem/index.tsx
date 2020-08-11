import React from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";
function TeacherItem() {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              "https://avatars0.githubusercontent.com/u/37390930?s=460&u=e72e2e0ce6ae28b21c775c7fbb2f97223c1b88a5&v=4",
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Mateus Amaral</Text>
          <Text style={styles.subject}>Física</Text>
        </View>
      </View>
      <Text style={styles.bio}>Estagiário Desenvolvedor na KFE SOFTWARE</Text>
      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {"   "}
          <Text style={styles.priceValue}>R$ 20,00</Text>
        </Text>
        <View style={styles.buttonContainer}>
          <RectButton style={styles.favoriteButton}>
            <Image source={heartOutlineIcon} />
          </RectButton>
          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon} />
            <Text style={styles.conctactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}

export default TeacherItem;
