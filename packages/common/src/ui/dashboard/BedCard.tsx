import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { observer } from "mobx-react-lite";

interface BedProps {
    salineLevel: number;
    bedNo: number;
  }

  var color = "green"

  var styles = StyleSheet.create({
      item: {
          margin: 5,
          width: 90,
          padding: 8,
          color: 'black',
          borderRadius: 5,
          backgroundColor: "green"
  
      },
      grid: {
          marginBottom: 32,
          marginTop: 16,
          alignItems: 'center'
      },
      bedText: {
          fontSize: 17,
          color: "black",
          textAlign: 'center'
        },
      Background: {
        backgroundColor: color
      },
      rectangle: {
        margin:5,
        height: 30,
        width: 70,
        borderRadius: 5,
        padding: 8,
      }
      
  })



export const BedCard: React.FC<BedProps> = observer(
    ({ salineLevel, bedNo}) => {
      return(
        <>
                <FlatList 
                contentContainerStyle = {styles.grid}
                numColumns= {3}
                data={[salineLevel, bedNo]}
                keyExtractor={(item,index) => index.toString()}
                renderItem={
                    ({item}) => {
                        console.log(item);
                    return <Text style= {[styles.rectangle, styles.Background, styles.bedText]}>
                        {item}%
                        </Text>
                    }
                }
                />
  
        </>
    )
    }
  );    