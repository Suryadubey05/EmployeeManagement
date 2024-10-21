import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)


    return (
        <div id='AllTask' className='bg-[#1c1c1c] p-5 mt-5 rounded   '>
            <div className='bg-red-400 mb-2 py-2 px-4 flex justify-between rounded'>
                <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
                <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
                <h5 className='w-1/5 text-lg font-medium '>Active task</h5>
                <h5 className='w-1/5 text-lg font-medium '>Completed</h5>
                <h5 className='w-1/5 text-lg font-medium '>Failed</h5>
            </div>
            <div className=' overflow-auto'>
            {userData.map(function (elem, idx) {
                return <div key={idx} className=' border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded'>
                    <h2 className='w-1/5 text-lg font-medium text-white-600'>{elem.firstName}</h2>
                    <h3 className='w-1/5 text-lg font-medium text-blue-500'>{elem.taskCount.newTask}</h3>
                    <h5 className='w-1/5 text-lg font-medium text-yellow-300'>{elem.taskCount.active}</h5>
                    <h5 className='w-1/5 text-lg font-medium text-green-500'>{elem.taskCount.completed}</h5>
                    <h5 className='w-1/5 text-lg font-medium text-red-400'>{elem.taskCount.failed}</h5>
                </div>
            })}
            </div>
        </div>
    )
}

export default AllTask
