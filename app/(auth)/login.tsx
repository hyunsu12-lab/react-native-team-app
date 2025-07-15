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
        <TouchableOpacity style={styles.googleBtn}>
          <View style={styles.btnInner}>
            <Image
              source={{
                uri: "https://img.icons8.com/?size=100&id=17949&format=png&color=000000",
              }}
              style={styles.icon}
            />
            <Text style={styles.googleBtnText}>구글 계정으로 로그인</Text>
          </View>
        </TouchableOpacity>

        {/* 카카오 로그인 버튼 */}
        <TouchableOpacity style={styles.kakaoBtn}>
          <View style={styles.btnInner}>
            <Image
              source={{
                uri: "https://www.svgrepo.com/show/368252/kakao.svg",
              }}
              style={styles.icon}
            />
            <Text style={styles.kakaoBtnText}>카카오톡으로 로그인</Text>
          </View>
        </TouchableOpacity>

        {/* 회원가입 버튼 */}
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupBtnText}>회원가입</Text>
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
