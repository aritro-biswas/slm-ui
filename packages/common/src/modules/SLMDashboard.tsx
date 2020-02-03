import * as React from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import {DispSalineLevel} from "../ui/dashboard/Dashboard"


const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 10,
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
      padding: 10

    },
    topRowText: {
      fontSize: 16,
      textAlign: 'center'
    },

  });

interface Props {}

export const SalineLevel: React.FC<Props> = () => {
    return(
        <View>
            <Text style={styles.topRowText}> Saline Level Monitoring System</Text>
            <DispSalineLevel salineLevel = {1} bedNo = {2} wardNo = {3} floorNo = {4} >

            </DispSalineLevel>
            
        </View>
    );
}
