import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { BedCard} from "./BedCard"
// import { Col, Row, Grid } from "react-native-easy-grid";
import Gridlist from "../../modules/Test"

interface Props {
    salineLevel: number;
    bedNo: number;
    wardNo: number;
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
    }
  });


  

  export const WardCard: React.FC<Props> = observer(
    ({ salineLevel, bedNo, wardNo }) => {
      return (
        <View style={styles.cardContainer}>
          <ScrollView>
            <Text style={styles.topRowText}>Ward {wardNo}</Text>
            <BedCard salineLevel = {salineLevel} bedNo={bedNo}>
            </BedCard>
            {/* <Gridlist items= {bedNos} /> */}
          </ScrollView>
        </View>
        
      );
    }
  );