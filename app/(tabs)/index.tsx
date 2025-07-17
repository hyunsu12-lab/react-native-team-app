// app/(tabs)/index.tsx

import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const dummyList = Array.from({ length: 4 }).map((_, i) => ({
  id: String(i),
  name: "양파",
  period: "5일",
  price: "₩3,582",
  originPrice: "₩3,980",
  off: "10% off",
}));

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* 상단 배너 */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>EATDA</Text>
      </View>

      {/* 리스트 */}
      <FlatList
        data={dummyList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
              <Text style={styles.off}>{item.off}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.period}>보관 기간 : {item.period}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.price}>{item.price}</Text>
                <Text style={styles.originPrice}>{item.originPrice}</Text>
              </View>
            </View>
            <View style={styles.thumb} />
            {/* 이미지는 추후 적용 */}
          </View>
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    width: "100%",
    height: 120,
    backgroundColor: "#FFF", // 검정 배경
    justifyContent: "flex-end",
    padding: 20,
    marginBottom: 10,
  },
  bannerTitle: {
    color: "#2268F7",
    fontSize: 30,
    fontWeight: "bold",
    lineHeight: 40,
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
  },
  off: {
    color: "#2268F7",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 2,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2,
  },
  period: {
    color: "#888",
    fontSize: 14,
    marginBottom: 2,
  },
  price: {
    color: "#2268F7",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 6,
  },
  originPrice: {
    color: "#ccc",
    textDecorationLine: "line-through",
    fontSize: 14,
  },
  thumb: {
    width: 64,
    height: 64,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginLeft: 12,
  },
});
