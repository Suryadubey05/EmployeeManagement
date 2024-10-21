import React from 'react'

const TaskListNumbers = ({data}) => {
    return (
        <div className='flex mt-10 justify-between gap-5 screen'>
            <div className=' w-[45%] py-6 px-9 rounded-xl bg-blue-400'>
                <h2 className='text-3xl font-semibold '>{data.taskCount.newTask}</h2>
                <h3 className='text-xl font-medium '>New Task</h3>
            </div>
            <div className=' w-[45%] py-6 px-9 rounded-xl bg-green-400'>
                <h2 className='text-3xl font-semibold'>{data.taskCount.completed}</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className=' w-[45%] py-6 px-9 rounded-xl bg-yellow-400'>
                <h2 className='text-3xl font-semibold text-black'>{data.taskCount.active}</h2>
                <h3 className='text-xl font-medium text-black'>Accepted Task</h3>
            </div>
            <div className=' w-[45%] py-6 px-9 rounded-xl bg-red-400 '>
                <h2 className='text-3xl font-semibold '>{data.taskCount.failed}</h2>
                <h3 className='text-xl font-medium '>Failed Task</h3>
            </div>

        </div>
    )
}

export default TaskListNumbers