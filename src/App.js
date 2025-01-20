import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [work, setWork] = useState('')
  const [todos, setTodos] = useState([])

  const handleAdd = () => {
    if (todos?.some(item => item.id === work?.replace(/\s/g, ''))) {
      toast.error('The job already exists')
      setWork('')
    } else {
      setTodos(prev => [...prev, { id: work?.replace(/\s/g, ''), job: work }])
      toast.success('Job added successfully')
      setWork('')
    }
  }
  const handleDelete = (id) => {
    setTodos(prev => prev.filter(item => item.id !== id))
  }

  return (
    <>
      <div className="flex flex-col h-screen items-center border border-red-500 justify-center">
        <div className="flex gap-8">
          <input
            type="text"
            className="outline-none border border-blue-600 px-4 py-2 w-[400px]"
            value={work}
            onChange={e => setWork(e.target.value)}
          />
          <button
            type="button"
            className="outline-none px-4 py-2 bg-blue-500 rounded-md text-white"
            onClick={handleAdd}
          >
            ADD
          </button>
        </div>
        <div>
          <h3 className="font-bold text-xl">Content: </h3>
          <ul>
            {todos?.map((item) => {
              return (
                <li key={item.id} className="flex gap-10 items-center">
                  <span className="my-2">{item.job}</span>
                  <span onClick={() => handleDelete(item.id)} className="my-2 cursor-pointer p-2">X</span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
