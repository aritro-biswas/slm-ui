import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { WardCard} from "./WardCard"

interface Props {
    salineLevel: number;
    bedNo: number;
    wardNo: number;
    floorNo: number ;
  }

  
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


  

  export const FloorView: React.FC<Props> = observer(
    ({ salineLevel, bedNo, wardNo, floorNo }) => {
      return (
        <View style={styles.cardContainer}>
           
              <Text style={styles.topRowText}>Floor {floorNo}</Text>
            
            <WardCard salineLevel = {salineLevel} bedNo={bedNo} wardNo={wardNo}  >

            </WardCard>
        </View>
        
      );
    }
  );