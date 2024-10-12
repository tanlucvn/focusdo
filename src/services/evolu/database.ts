import { database } from "@evolu/react"

import { TodoTable } from "./schema"

export const Database = database({
  todo: TodoTable,
})
export type Database = typeof Database.Type
