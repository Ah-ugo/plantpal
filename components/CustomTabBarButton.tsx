import { StyleSheet, View } from "react-native";
import React from "react"
import { Center, Pressable } from "@gluestack-ui/themed";

export function CustomTabBarButton({ children, onPress }: any) {
    return (
        <View>
      <Pressable
        style={styles.customButtonContainer}
        onPress={onPress}
      >
        <View style={styles.customButton}>
        <Center mt={"$3"}>
          {children}
          </Center>
        </View>
      </Pressable>
      </View>
    );
  }

  const styles = StyleSheet.create({
    tabBar: {
      position: 'absolute',
      height: 60,
      borderTopWidth: 0,
      backgroundColor: '#ffffff',
      elevation: 5,
    },
    customButtonContainer: {
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
    },
    customButton: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#08896A',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    },
  });
  