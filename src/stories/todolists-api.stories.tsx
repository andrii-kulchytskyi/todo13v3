import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistAPI} from "../api/todolist-api";
import {taskListAPI} from "../api/tasklist-api";

export default {
    title: 'API'
}

export const GetTodoLists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistAPI.getTodoList()
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "Test"
        todolistAPI.createTodoList(title)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todoId = "b4424d22-7b93-427b-9776-c0abf0465800"
    useEffect(() => {
        todolistAPI.deleteTodolist(todoId)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todoId = "ae1e9a1d-e0c0-429b-9f59-7e5c50a77285"
    const title = "UPDATE test"
    useEffect(() => {
        todolistAPI.updateTodoList(todoId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const GetTaskLists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        taskListAPI.getTaskList()
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTaskList = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = "Test"
        taskListAPI.createTaskList(title)
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTaskList = () => {
    const [state, setState] = useState<any>(null)
    const todoId = "b4424d22-7b93-427b-9776-c0abf0465800"
    useEffect(() => {
        taskListAPI.deleteTaskList(todoId)
            .then((res) => {
                setState(res.data)
            })

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskListTitle = () => {
    const [state, setState] = useState<any>(null)
    const todoId = "ae1e9a1d-e0c0-429b-9f59-7e5c50a77285"
    const title = "UPDATE test"
    useEffect(() => {
        taskListAPI.updateTaskList(todoId, title)
            .then((res) => {
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}