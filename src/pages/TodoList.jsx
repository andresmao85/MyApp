import { getTodos } from "../api/todos"
import { useLoaderData } from "react-router-dom"
import { TodoItem } from "../components/TodoItem"

function TodoList() {
  const todos = useLoaderData()
  return (
    <>
      <h1 className="page-title">To-Do's list</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  )
}

function loader({ request: { signal } }) {
  return getTodos({ signal })
}

export const todoListRoute = {
  loader,
  element: <TodoList />,
}
