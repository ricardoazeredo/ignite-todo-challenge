import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Switch } from 'react-native';

import { Header } from '../components/Header';
import { MyTasksList } from '../components/MyTasksList';
import { TodoInput } from '../components/TodoInput';

interface Task {
  id: number;
  title: string;
  done: boolean;
}

export function Home() {
  const [ tasks, setTasks] = useState<Task[]>([]);
  const [isDone, setIsDone] = useState(false);
  const [changeTheme, setChangeTheme ] = useState(false);
  const eventSwitcher = () => {
    setChangeTheme(previousState => !previousState)
  };

  function handleAddTask(newTaskTitle: string) {
    //TODO - add new task if it's not empty
    if(newTaskTitle === ''){
      return;
    }
    const data = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false,
    }
    
    setTasks(oldState => [...oldState, data]);
    return data;
  }

  function handleMarkTaskAsDone(id: number) {
    //TODO - mark task as done if exists           
    tasks.map(item => {
      (item.id === id && item.done === false) ? item.done = true: item.done = false; 
       
      setIsDone(item.done);
    })
  }

  function handleRemoveTask(id: number) {
    //TODO - remove task from state
    setTasks(oldState => oldState.filter(
      task => task.id !== id
    ));
  } 
  
  return (
    <View style={(changeTheme)? styles.containerDark : styles.container}>
      <Header theme={changeTheme} />
      <TodoInput addTask={handleAddTask} theme={changeTheme} />
      <Switch
        trackColor={{ false: '#95a5a6', true: '#2c3e50'}}
        thumbColor={!changeTheme ? '#7f8c8d' : '#67E480'} 
        onValueChange={eventSwitcher}
        value={changeTheme}
        style={{ 
          transform:[{ scaleX: 1 }, { scaleY: 1.4 }], 
          marginTop: 15,           
        }}                
      />

      <MyTasksList 
        tasks={tasks}
        theme={changeTheme} 
        onPress={(task) => handleMarkTaskAsDone(task)} 
        onLongPress={(task) => handleRemoveTask(task)} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  containerDark: {   
    flex: 1, 
    backgroundColor: '#1F1F1F',
  },
});