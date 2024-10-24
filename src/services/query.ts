import { evolu } from "@/services/evolu/client"
import { cast, ExtractRow, type NotNull } from "@evolu/react"

export const todoQuery = evolu.createQuery((db) =>
  db
    .selectFrom("todo")
    .select([
      "id",
      "title",
      "note",
      "priority",
      "isPin",
      "isComplete",
      "location",
      "remindAt",
      "isDeleted",
    ])
    .where("title", "is not", null)
    .where("isComplete", "is not", cast(true))
    .where("isDeleted", "is not", cast(true))
    .$narrowType<{ title: NotNull }>()
    .orderBy("createdAt")
)

export const todoCompletedQuery = evolu.createQuery((db) =>
  db
    .selectFrom("todo")
    .select([
      "id",
      "title",
      "note",
      "priority",
      "isPin",
      "isComplete",
      "location",
      "remindAt",
      "isDeleted",
    ])
    .where("title", "is not", null)
    .where("isComplete", "is", cast(true))
    .where("isDeleted", "is not", cast(true))
    .$narrowType<{ title: NotNull }>()
    .orderBy("createdAt")
)

export const todoDeleteQuery = evolu.createQuery((db) =>
  db
    .selectFrom("todo")
    .select([
      "id",
      "title",
      "note",
      "priority",
      "isPin",
      "isComplete",
      "location",
      "remindAt",
      "isDeleted",
    ])
    .where("title", "is not", null)
    .where("isDeleted", "is", cast(true))
    .$narrowType<{ title: NotNull }>()
    .orderBy("createdAt")
)

export type TodoRow = ExtractRow<typeof todoQuery>
