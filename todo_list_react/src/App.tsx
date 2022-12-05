import { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

interface Itodo {
    id: number
    complete: boolean
}

function App() {
    const [todos, setTodos] = useState<Itodo[]>([])
    const todoNameRef: any = useRef()

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)!)
        if (storedTodos) {
            setTodos((prevTodos): any => [...prevTodos, ...storedTodos])
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])

    const toggleTodo = (id: any) => {
        const newTodos: Itodo[] = [...todos]
        const todo: any = newTodos.find((todo) => todo.id === id)
        todo.complete = !todo.complete
        setTodos(newTodos)
    }

    const handleAddTodo = (e: any) => {
        const name = todoNameRef.current.value
        if (name === '') {
            return
        }
        setTodos((prevTodos): any => {
            return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
        })
        console.log(name)
        todoNameRef.current.value = null
    }

    const handleClearTodos = () => {
        const newTodos = todos.filter((todo) => !todo.complete)
        setTodos(newTodos)
    }

    return (
        <>
            <TodoList todos={todos} toggleTodo={toggleTodo} />
            <input ref={todoNameRef} type='text' />
            <button onClick={handleAddTodo}>Add Todo</button>
            <button onClick={handleClearTodos}>clear completed todos</button>
            <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
        </>
    )
}

export default App
