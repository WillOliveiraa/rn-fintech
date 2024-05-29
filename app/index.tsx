import { useAssets } from "expo-asset";
import { ResizeMode, Video } from "expo-av";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../constants/Colors";
import { defaultStyles } from "../constants/Styles";

const Page: React.FC = () => {
  const [assets] = useAssets([require("@/assets/videos/intro.mp4")]);

  return (
    <View style={styles.container}>
      {assets && (
        <Video
          isMuted
          isLooping
          shouldPlay
          source={{ uri: assets[0].uri }}
          resizeMode={ResizeMode.COVER}
          style={styles.video}
        />
      )}
      <View style={{ marginTop: 80, padding: 20 }}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>

      <View style={styles.button}>
        <Link
          href={"/login"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flexGrow: 1, backgroundColor: Colors.dark },
          ]}
        >
          <TouchableOpacity>
            <Text style={[styles.buttonText, { color: "white" }]}>Log in</Text>
          </TouchableOpacity>
        </Link>
        <Link
          href={"/signup"}
          asChild
          style={[
            defaultStyles.pillButton,
            { flexGrow: 1, backgroundColor: "white" },
          ]}
        >
          <TouchableOpacity>
            <Text style={[styles.buttonText]}>Sign up</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
  },
  video: { width: "100%", height: "100%", position: "absolute" },
  header: {
    fontSize: 36,
    fontWeight: "900",
    textTransform: "uppercase",
    color: "white",
  },
  button: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 60,
    paddingHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
  },
});

export default Page;
