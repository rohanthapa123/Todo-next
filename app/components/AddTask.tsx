"use client"
import {AiOutlinePlusCircle} from "react-icons/ai"
import {useState ,FormEventHandler} from 'react'
import Modal from "./Modal"
import { addTodo } from "@/api"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from "uuid";
const AddTask = () => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [newTaskValue, setNewTaskValue] = useState<string>("");
  
  const handleSubmitTodo: FormEventHandler<HTMLFormElement> = async (e ) =>{
    e.preventDefault();
    await addTodo({
      id: uuidv4(),
      work: newTaskValue,
    })
    // console.log(newTaskValue);
    setNewTaskValue("");
    setModalOpen(false);
    router.refresh();
  }
  
  return (
    <div className="">
        <button onClick={() => setModalOpen(true)} className="btn btn-success w-1/3">Add Task <AiOutlinePlusCircle size={15} /></button>
        <Modal modalOpen={modalOpen} setModalOpen = {setModalOpen}>
          <form onSubmit={handleSubmitTodo}>
            <h3 className="font-bold text-lg">Add new Task</h3>
            <div className="modal-action">
            <input type="text" value={newTaskValue} onChange={(e)=> setNewTaskValue(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs m-auto" />
            <button type="submit" className="btn btn-success">SUBMIT</button>
            </div>
          </form>
        </Modal>
    </div>
  )
}

export default AddTask