// app/(auth)/login.tsx

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Save Food{"\n"}
        Share Value
      </Text>

      <View style={{ marginTop: "auto", marginBottom: 130, width: "100%" }}>
        {/* 구글 로그인 버튼 */}
        <TouchableOpacity style={styles.googleBtn} activeOpacity={0.8}>
          <View style={styles.btnInner}>
            <Image
              source={require("../../assets/images/google.png")}
              style={styles.icon}
            />
            <Text style={styles.googleBtnText}>구글 계정으로 계속하기</Text>
          </View>
        </TouchableOpacity>

        {/* 카카오 로그인 버튼 */}
        <TouchableOpacity style={styles.kakaoBtn} activeOpacity={0.8}>
          <View style={styles.btnInner}>
            <Image
              source={require("../../assets/images/kakao_logo.png")}
              style={styles.icon}
            />
            <Text style={styles.kakaoBtnText}>카카오톡으로 계속하기</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const BTN_RADIUS = 12;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3479E6",
    alignItems: "center",
    paddingTop: 120,
    paddingHorizontal: 24,
  },
  headtitle: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    transform: [{ translateX: 15 }, { translateY: 45 }],
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
    alignSelf: "flex-start",
    transform: [{ translateX: 15 }, { translateY: 45 }],
  },
  rowCenter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  btnInner: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between", // ← 이게 핵심!
  width: "100%",
  paddingHorizontal: 16,
  },
  googleBtn: {
    backgroundColor: "#fff",
    borderRadius: BTN_RADIUS,
    paddingVertical: 14,
    marginBottom: 12,
    width: "100%",
    shadowColor: "#222",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 2,
  },
  googleBtnText: {
    flex: 1,
    textAlign: "center",
    color: "#222",
    fontSize: 16,
    fontWeight: "600",
  },
  kakaoBtn: {
    backgroundColor: "#FEE500",
    borderRadius: BTN_RADIUS,
    paddingVertical: 14,
    marginBottom: 12,
    width: "100%",
    borderWidth: 1,
    borderColor: "#E3D21A",
  },
  kakaoBtnText: {
    flex: 1,
    textAlign: "center",
    color: "#222",
    fontSize: 16,
    fontWeight: "600",
  },
  naverBtn: {
    backgroundColor: "#03C75A",
    borderRadius: BTN_RADIUS,
    paddingVertical: 14,
    marginBottom: 12,
    width: "100%",
  },
  naverBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  signupBtn: {
    borderWidth: 1,
    borderColor: "#5B99EE",
    borderRadius: BTN_RADIUS,
    paddingVertical: 14,
    marginTop: 8,
    width: "100%",
    backgroundColor: "rgba(52,121,230,0.1)",
  },
  signupBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});
