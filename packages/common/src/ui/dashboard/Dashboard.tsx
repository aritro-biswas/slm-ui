import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { FloorView} from "./FloorView"

interface Props {
    salineLevel: number;
    bedNo: number;
    wardNo: number;
    floorNo: number ;
  }

  
const styles = StyleSheet.create({
    cardContainer: {
      marginBottom: 10
    },
  });


  

  export const DispSalineLevel: React.FC<Props> = observer(
    ({ salineLevel, bedNo, wardNo, floorNo }) => {
      return (
        <View style={styles.cardContainer}>
            <FloorView salineLevel = {salineLevel} bedNo={bedNo} wardNo={wardNo} floorNo={floorNo} >

            </FloorView>
        </View>
        
      );
    }
  );