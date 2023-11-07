import { Itask } from '@/types/task'
import React from 'react'
import Tasks from './Tasks'

type Props = {
    tasks: Itask[]
}

const TodoList = ({tasks}: Props) => {
  return (
    <div className="overflow-x-auto w-[95%] mx-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Tasks</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {
        tasks?.map((task)=>(
            <Tasks key={task.id} task={task} />
        ))
      }
      
    </tbody>
  </table>
</div>
  )
}

export default TodoList