import { LayoutList, ListChecks, PieChartIcon, TrashIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import TodoList from "./tabs/todo-list"

const AppTabs = () => {
  return (
    <Tabs defaultValue="todos">
      <TabsList className="grid w-full grid-cols-4 rounded-full">
        <TabsTrigger value="todos" className="flex gap-2 rounded-full">
          <LayoutList size={16} />
        </TabsTrigger>
        <TabsTrigger value="completed" className="flex gap-2 rounded-full">
          <ListChecks size={16} />
        </TabsTrigger>
        <TabsTrigger value="trash" className="flex gap-2 rounded-full">
          <TrashIcon size={16} />
        </TabsTrigger>
        <TabsTrigger value="progress" className="flex gap-2 rounded-full">
          <PieChartIcon size={16} />
        </TabsTrigger>
        <TabsContent value="todos" className="col-span-full">
          <TodoList />
        </TabsContent>
        <TabsContent value="completed" className="col-span-full">
          Completed
        </TabsContent>
        <TabsContent value="trash" className="col-span-full">
          Trash
        </TabsContent>
        <TabsContent value="progress" className="col-span-full">
          Progress
        </TabsContent>
      </TabsList>
    </Tabs>
  )
}

export default AppTabs
