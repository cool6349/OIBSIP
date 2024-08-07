import React, { useState } from 'react'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from 'uuid';
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import './App.css'

function App() {

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [showfinished, setShowfinished] = useState(false)
  // const [pending, setPending] = useState(false)


  const toggleFinished = (e) => {
    setShowfinished(!showfinished)
  }

  // const toggleChange = () => {
  //   setPending(pending)
  // }

  const handleEdit = (e, id) => {
    let t = todos.filter(i => i.id === id)
    setTodo(t[0].todo)


    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)
  }



  const handleDelete = (e, id) => {


    let newTodos = todos.filter(item => {
      return item.id !== id
    });
    setTodos(newTodos)




  }

  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }])
    setTodo("")
    console.log(todos);


  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })

    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
  }


  return (
    <>

      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5  bg-slate-400 min-h-[80vh] md:w-1/2 ">
        <h1 className='font-bold text-center text-xl'>Manage your 'TO-DO LIST' </h1>
        <div className='addtodo my-5  flex flex-col gap-3'>
          <h2 className='text-lg font-bold'>Add Todos</h2>

          <input onChange={handleChange} value={todo} type='text' className='w-full rounded-lg px-5 py-1' />

          <button onClick={handleAdd} className='bg-slate-800  hover:bg-slate-700 py-2 p-1 text-sm font-bold text-white rounded-md w-full '>Save</button>
        </div>
       
          <input onChange={toggleFinished} type='checkbox' checked={showfinished} /> Show Finished
          {/* <input onChange={toggleChange} type='checkbox' checked={setPending} /> Pending Task */}
        
        <h2 className='text-xl font-bold my-3'>Your Todos</h2>
        <div className="todos">

          {todos.length === 0 && <div className='m-5'>"Add Your TO-DO's" </div>}

          {todos.map(item => {

            return (showfinished || !item.isCompleted) && <div key={item.id} className={"todo flex  my-3 justify-between "}>
              <div className='flex gap-5 '>
                <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id='' />
                <div className={item.isCompleted ? "line-through" : ""}>
                  {item.todo}</div>
              </div>
              <div className="buttons flex h-full">
                <button onClick={(e) => { handleEdit(e, item.id) }} className='bg-slate-800 hover:bg-slate-700 py-1 p-2 text-sm font-bold text-white rounded-md mx-1'><CiEdit /></button>
                <button onClick={(e) => { handleDelete(e, item.id) }} className='bg-slate-800 hover:bg-slate-700 py-1 p-2 text-sm font-bold text-white rounded-md mx-1'><RiDeleteBin6Line /></button>
              </div>
            </div>

 

          })}
        </div>

      </div>

    </>
  )
}

export default App
