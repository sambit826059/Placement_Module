import React, { useState } from 'react'

export default function JobPostingByHR() {
  const [AddPosting, setAddPosting] = useState(false)

  
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    setAddPosting(false)

    if (task.trim() !== '') {
      if (editIndex !== null) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = { text: task, completed: false };
        setTodos(updatedTodos);
        setEditIndex(null);
      } else {
        // Add new task
        setTodos([...todos, { text: task, completed: false }]);
      }
      setTask('');
    }
  };

  const editTodo = (index) => {
    setAddPosting(true)
    const taskToEdit = todos[index];
    setTask(taskToEdit.text);
    setEditIndex(index);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
    setEditIndex(null); // Clear the edit index if a task is deleted
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  
  return (
    <>
      <div className=' overflow-hidden h-[100vh]   rounded-md'>
        <div className="   fit-content h-[100vh] grid   p-2 ">
          <div className=" bg-yellow-200 rounded-xl px-12 py-20 overflow-y-scroll">

            {/* things started from here  */}
            <div className='grid  grid-cols-[20%,80%]  justify-evenly gap-8'>
              <div>
              <button onClick={()=>(setAddPosting(!AddPosting))} className='bg-gray-100 rounded-3xl px-10 py-2'> {AddPosting ? 'Discard' : 'Add Posting'}</button>

              </div>

             {AddPosting &&
              <div className='bg-gray-400 p-10 rounded '>
                <form className='grid grid-cols-[28%,50%] justify-start gap-4 ' onSubmit={(e) => e.preventDefault()}>
                  
                  <div className=''>
                    <label htmlFor="JobTitle">job title</label><br />
                    <input className='rounded h-10 w-[15vw] p-2 'value={task} onChange={(e) => setTask(e.target.value)} type="text" name="JobTitle" id="JobTitle"  placeholder=''/>
                  </div>

                  <div>
                  <label htmlFor="EmploymentType<">Employment Type</label><br />
                  <input className='rounded h-10 w-[15vw] p-2' type="text" name="JobTitle" id="EmploymentType<"  placeholder=''/>
                  </div>

                  <div>
                    <label htmlFor="JobDisc">Job discription</label>
                    <textarea className='rounded max-h-[12vw] p-2' rows={'4'} cols={'72'} name="text" id="JobDisc" ></textarea>
                  </div>

                  <div>
                  <label htmlFor="Qualifications<">Qualifications</label><br />
                  <input className='rounded h-10 w-[15vw] p-2' type="text" name="text" id="Qualifications<"  placeholder=''/>
                  </div>

                 { task&&  <button className='bg-gray-100 rounded-3xl  py-2' onClick={addTodo} type='submit'>{editIndex !== null ? 'Update' : 'Add'}</button> }

                </form>
              </div>           
             }
                
            </div>

            {/* --------------------------- */}
                                       
                                  <ul >
                                    {todos.slice().reverse().map((todo, index) => (
                                      <li  key={index} className={` group flex ${todo.completed ? 'completed' : ''}`}>
                                        <span className='bg-gray-200 p-12 mt-5 border' onClick={() => toggleComplete(index)}>Your Post:- {todo.text}</span>
                                        <button className='bg-green-400 m-4 px-5 hidden group-hover:block' onClick={() => editTodo(index)}>Edit</button>
                                        <button className='bg-red-400 m-4 px-5 hidden group-hover:block ' onClick={() => deleteTodo(index)}>Delete</button>
                                      </li>
                                    ))}
                                  </ul>
          </div>
        </div>
        
    </div>
    </>
  )
}
