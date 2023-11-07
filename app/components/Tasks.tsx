"use client"
import { Itask } from '@/types/task'
import {BiEdit} from "react-icons/bi"
import {AiOutlineDelete} from "react-icons/ai"
import Modal from './Modal'
import {useState ,FormEventHandler, MouseEventHandler} from "react"
import { useRouter } from 'next/navigation'
import { deleteTodo, editTodo } from '@/api'
type Props = {
    task: Itask
}

const Tasks = ({task}: Props) => {
    const [modalEditOpen , setModalEditOpen] = useState<boolean>(false)
    const [editedTaskValue, setEditedTaskValue] =useState<string>(task.work)
    const [modalDeleteOpen, setModalDeleteOpen] = useState<boolean>(false)
    const router = useRouter();
    const handleSubmitEditTodo : FormEventHandler<HTMLFormElement> = async (e ) =>{
        e.preventDefault();
        await editTodo({
          id: task.id,
          work: editedTaskValue,
        })
        // console.log(newTaskValue);
        setModalEditOpen(false);
        router.refresh();
      }
    const handleSubmitDeleteTodo : MouseEventHandler<HTMLButtonElement> = async (e ) =>{
        e.preventDefault();
        await deleteTodo(task.id)
        // console.log(newTaskValue);
        setEditedTaskValue("");
        setModalEditOpen(false);
        router.refresh();
      }

  return (

        <tr className="bg-base-200" key={task.id}>
                <td className='w-full text-lg'>{task.work}</td>
                <td className='flex'>
                    <BiEdit cursor="pointer" onClick={()=> setModalEditOpen(true)} className="text-green-500" size={25} />
                    <Modal modalOpen={modalEditOpen} setModalOpen = {setModalEditOpen}>
                    <form onSubmit={handleSubmitEditTodo} >
                        <h3 className="font-bold text-lg">Are You sure</h3>
                        <div className="modal-action">
                        <input type="text" value={editedTaskValue} onChange={(e)=> setEditedTaskValue(e.target.value)} placeholder="Type here" className="input input-bordered w-full max-w-xs m-auto" />
                        <button type="submit" className="btn btn-success">SUBMIT</button>
                        </div>
                    </form>
                    </Modal>

                    <AiOutlineDelete cursor="pointer" className="text-red-500" size={25} onClick={()=> setModalDeleteOpen(true)}/>
                    <Modal modalOpen={modalDeleteOpen} setModalOpen = {setModalDeleteOpen}>
                    
                        <h3 className="font-bold text-lg">Are You sure you want to delete !!</h3>
                        <div className="modal-action">
                        <button onClick={handleSubmitDeleteTodo} className="btn btn-error">DELETE</button>
                        </div>
                    
                    </Modal>
                </td>
            </tr>

  )
}

export default Tasks