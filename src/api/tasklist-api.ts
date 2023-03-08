import axios from 'axios'


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    // headers: {
    //     // Не забываем заменить API-KEY на собственный
    //     'API-KEY': '794181ab-6d62-4cfb-bc9f-d539dfac55f1',
    // },
})


export const taskListAPI = {
    getTodoList() {
        return instance.get<TodoListType[]>(
            `todo-lists`,
        )
    },
    createTodoList(title: string) {
        return instance.post<ResponseType<{ item: TodoListType }>>(
            `todo-lists/`, {title},
        )
    },
    deleteTodolist(todoId: string) {
        return instance.delete<ResponseType>(
            `todo-lists${todoId}`,
        )
    },
    updateTodoList(todoId: string, title: string) {
        return instance.put<ResponseType>(
            `${todoId}`,
            {title: "TEST"},
        )
    }
}

type TodoListType = {
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


