import React, { useEffect, useState } from 'react';

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
    <>
      <Header />

      <TodoInput addTask={handleAddTask} />

      <MyTasksList 
        tasks={tasks} 
        onPress={(task) => handleMarkTaskAsDone(task)} 
        onLongPress={(task) => handleRemoveTask(task)} 
      />
    </>
  )
}