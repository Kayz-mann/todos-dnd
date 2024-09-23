'use client'
import { useBoardStore } from '@/store/BoardStore'
import React from 'react'

const types = [
    {
        id: 'todo',
        name: 'Todo',
        description: 'A new task to be completed',
        color: 'bg-red-500',
    },
    {
        id: 'Business',
        name: '16GB',
        description: '8 description',
        color: 'bg-yellow-500',
    },
    {
        id: 'Enterprise',
        name: '32GB',
        description: '12 CPUs',
        color: 'bg-green-500',
    },
]

const TaskTypeRadioGroup = () => {
    const [setNewTaskType, newTaskType] = useBoardStore((state) => [
        state.setNewTaskType,
        state.newTaskType
    ])
    return (
        <div>TaskTypeRadioGroup</div>
    )
}

export default TaskTypeRadioGroup