import { useState } from "react"
import { todoQuery } from "@/services/query"
import { useEvolu, useQuery } from "@evolu/react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function TodoList() {
  const { rows } = useQuery(todoQuery)
  const { create } = useEvolu()
  const [todoInput, setTodoInput] = useState<string>("")

  const handleAddTask = () => {
    if (todoInput) {
      create("todo", { title: todoInput })
    }
    return
  }

  return (
    <>
      <ul className="py-2">
        {rows.map((row) => (
          <li key={row.title}>{row.title}</li>
        ))}
      </ul>
      <div className="mt-3 flex items-center justify-center gap-2">
        <Input
          type="text"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
          placeholder="I want to..."
          className="rounded-full text-foreground"
        />
        <Button className="rounded-full" onClick={handleAddTask}>
          Add
        </Button>
      </div>
    </>
  )
}
