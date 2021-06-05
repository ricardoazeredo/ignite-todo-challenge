import React from 'react';
import { FlatList, TouchableOpacity, View, Text, StyleSheet, FlatListProps } from 'react-native';

import {FlatListHeaderComponent} from './FlatListHeaderComponent';

interface MyTasksListProps {
  tasks: {
    id: number;
    title: string;
    done: boolean;
  }[];
  onPress: (id: number) => void;
  onLongPress: (id: number) => void;
  theme: boolean;
}

export function MyTasksList({ tasks, onLongPress, onPress, theme }: MyTasksListProps) {
  
  return (
    <FlatList
      data={tasks}
      keyExtractor={item => String(item.id)}
      renderItem={({ item, index }) => {
        return (
          <TouchableOpacity
            testID={`button-${index}`}
            activeOpacity={0.7}
            //TODO - use onPress, onLongPress and style props\
            style={item.done ? styles.taskButtonDone :styles.taskButton}
            onPress={() =>onPress(item.id)}
            onLongPress={()=>onLongPress(item.id)}
          >
            <View 
              testID={`marker-${index}`}
              //TODO - use style prop 
              style={(theme)? 
                (item.done ? styles.taskMarkerDarkDone : styles.taskMarkerDark)
                :(item.done ? styles.taskMarkerDone : styles.taskMarker)
              }
            />
            <Text 
              //TODO - use style prop
              style={
                (theme)? 
                (item.done ?styles.taskTextDarkDone : styles.taskTextDark) 
                :(item.done ?styles.taskTextDone : styles.taskText)
              }
            >
              {item.title}
            </Text>
          </TouchableOpacity>
        )
      }}
      ListHeaderComponent={<FlatListHeaderComponent theme={theme} />}
      ListHeaderComponentStyle={{
        marginBottom: 20
      }}
      style={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: {    
    marginHorizontal: 24,
    marginTop: 32
  },
  taskButton: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskMarkerDark: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#3D3D4D',
    marginRight: 10
  },
  taskText: {
    color: '#3D3D4D',
  },
  taskTextDark: {
    color: '#67E480',
  },
  taskButtonDone: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: 'rgba(25, 61, 223, 0.1)',
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#273FAD',
    marginRight: 10
  },
  taskTextDone: {
    color: '#A09CB1',
    textDecorationLine: 'line-through'
  },
  taskMarkerDarkDone: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: '#67E480',
    marginRight: 10
  },
  taskTextDarkDone: {
    color: '#E1E1E6',
    textDecorationLine: 'line-through'
  }
})