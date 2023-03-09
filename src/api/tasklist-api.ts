import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    // headers: {
    //     // Не забываем заменить API-KEY на собственный
    //     'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    // },
})

const todolistId = "363d8a29-1315-48f1-b444-10f34b54b365";
export const taskListAPI = {
    getTaskList() {
        return instance.get<TaskListType[]>(
            `/todo-lists/{todolistId}/tasks`,
        )
    },
    createTaskList(title: string) {
        return instance.post<ResponseType<{ item: TaskListType }>>(
            `todo-lists/`, {title},
        )
    },
    deleteTaskList(todoId: string) {
        return instance.delete<ResponseType>(
            `todo-lists${todoId}`,
        )
    },
    updateTaskList(todoId: string, title: string) {
        return instance.put<ResponseType>(
            `${todoId}`,
            {title: "TEST"},
        )
    }
}

type TaskListType = {
    addedDate: string,
    id: string,
    order: number,
    title: string
}

type ResponseType<T = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: T
}


