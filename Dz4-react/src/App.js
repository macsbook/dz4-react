import React, { useState, useEffect } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import TaskList from './components/TaskList/TaskList';
import * as url from "url";

function App() {
  const [ show, setShow ] = useState(false);
  const [ newTask, setNewTask ] = useState('');
  const [ inputResult, setInputResult] = useState('')
  const [ tasks, setTasks ] = useState([])

    const inputFilter = tasks.filter(item => item.title.trim().toLowerCase().includes(inputResult.trim()))

  const handleShow  = () => setShow(!show)
  
  const handleChangeCheck = (event) => {
    setNewTask(event.target.value);

  }
  // 1.Все таски 2.Выполненные 3.Не выполеннные
  const handleAddTask = () => {
     setTasks((prevState) => [...prevState, 
      {
      id: Math.floor(Math.random() * 1000),
      title: newTask,
      completed: false
     }]);
     handleShow();
  }

const handleDelete = (id) => {
  const deleted = tasks.filter(el => el.id !== id);
  setTasks([...deleted])
  /// filter
}

const handleDone = (id) => {
  // const currentIndex = tasks.findIndex(task => task.id === id )
  tasks.map(task => {
    if(task.id === id) {
      return task.completed = !task.completed
    }
    return task
  })
setTasks([...tasks])
}
const handleEdit = (editTodo) => {

 const editList = tasks.map(task => {
    if(task.id === editTodo.id) {
      return editTodo
    }
    return task
  })
  setTasks([...editList])
} 

const fetchTodos = async (url)=>{
      const todos = await fetch(url)
      return readyTodos
}

useEffect(()=>{
    fetchTodos('https://jsonplaceholder.typicode.com/todos')
        .then((data)=> data.json())
        .then((data)=> console.log(todos))
},[])
// useEffect(() => {
//   const myLocalList = JSON.parse(localStorage.getItem('tasks'));
//     if (myLocalList.length !==0) {
//         setTasks(myLocalList)
//     }
// }, [])
//
//
// useEffect(() => {
//   localStorage.setItem('tasks', JSON.stringify(tasks))
// }, [tasks])


const deleteAllTask = ()=>{
      setTasks([])
}
  return (
    <div className="App">
      {show && <Modal 
      handleChangeCheck={handleChangeCheck}
      handleAdd={handleAddTask}
      handleShow={handleShow}  />}

      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>
        <button onClick={deleteAllTask}>Удалить все таски</button>

      {/* task list */}
  <TaskList 
  handleDelete={handleDelete}
  handleDone={handleDone}
  handleEdit={handleEdit}
  list={tasks} />
    </div>
  );
}

export default App;
//-В проекте нужно добавить кнопку очистить все таски.
// При нажатии на эту кнопку таски должны очищатся отовсюду даже из localStorage
// -Попробуйте добавить сверху select обычный или можете кастомный написать )
// для фильтрации тасков.Внутри него должно быть три варианта: 1. Все таски. 2. Выполненные 3.Не выполенные
// -Нужно сделать фильтрацию  при выборе вариантов(так же через метод filter можно реализовать)
// .Ниже оставлю ссылку как работать с select в React js.Там также нужно работать с onChange
