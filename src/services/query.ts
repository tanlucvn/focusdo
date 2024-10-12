import { evolu } from "@/services/evolu/client"
import { cast, ExtractRow, type NotNull } from "@evolu/react"

export const todoQuery = evolu.createQuery((db) =>
  db
    .selectFrom("todo")
    .select(["id", "title", "note", "priority"])
    .where("isDeleted", "is not", cast(true))
    .where("title", "is not", null)
    .$narrowType<{ title: NotNull }>()
    .orderBy("createdAt")
)

export type TodoRow = ExtractRow<typeof todoQuery>
