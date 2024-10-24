import { memo, useState } from "react"
import { Database } from "@/services/evolu/database"
import { TodoRow } from "@/services/query"
import { useEvolu } from "@evolu/react"
import { motion } from "framer-motion"
import { RotateCcwIcon, TrashIcon } from "lucide-react"

import { iconSize } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"

import { Button } from "./ui/button"

const toBoolean = (value: 0 | 1 | null): boolean => value === 1

export const TodoItem = memo<{
  row: TodoRow
}>(function TodoItem({ row: { id, title, isComplete, isDeleted, remindAt } }) {
  const { update } = useEvolu<Database>()
  const [isChecked, setIsChecked] = useState<boolean>(toBoolean(isComplete))
  const delayTime = 500

  const handleToggleCompletedClick = () => {
    setIsChecked(!isChecked)

    setTimeout(() => {
      update("todo", { id, isComplete: !isComplete })
    }, delayTime)
  }

  const handleDeletedClick = () => {
    update("todo", { id, isDeleted: !isDeleted })
  }

  const handleRestoreClick = () => {
    update("todo", { id, isDeleted: !isDeleted })
  }

  return (
    <motion.div
      key={id}
      className={cn(
        "mb-2 flex shrink-0 justify-between text-clip rounded-xl border p-3"
      )}
      initial={{ opacity: 0, x: 0 }}
      animate={{
        opacity: isChecked && !toBoolean(isComplete) ? 0.5 : 1,
        x: isChecked && !toBoolean(isComplete) ? 200 : 0,
      }}
      transition={{ duration: delayTime / 1000 }}
    >
      <div className={cn("flex flex-auto items-start gap-2")}>
        <Checkbox
          className={cn("accent-foreground", toBoolean(isDeleted) && "hidden")}
          checked={isChecked}
          onCheckedChange={() => handleToggleCompletedClick()}
          name="todo"
        />
        <div className="flex flex-auto flex-col gap-2">
          <p className={cn("flex-auto leading-none text-foreground")} key={id}>
            {title}

            {/* Debug */}
            {toBoolean(isComplete).toString()}
          </p>
        </div>
      </div>
      {!toBoolean(isDeleted) ? (
        <Button
          size="icon"
          variant="outline"
          onClick={() => handleDeletedClick()}
        >
          <TrashIcon size={iconSize} />
        </Button>
      ) : (
        <Button
          size="icon"
          variant="outline"
          onClick={() => handleRestoreClick()}
        >
          <RotateCcwIcon size={iconSize} />
        </Button>
      )}
    </motion.div>
  )
})
