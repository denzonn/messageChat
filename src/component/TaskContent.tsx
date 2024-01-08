import { FC } from "react";
import Button from "./Button";

interface TaskContentProps {
    content: string;
    done?: boolean;
}

const TaskContent: FC<TaskContentProps> = ({
    content,
    done
}) => {
  return (
    <div>
      <div className="flex flex-row gap-x-3 items-center mt-2">
        <div>
          <i className="fa-regular fa-clock text-primary"></i>
        </div>
        <div className="flex flex-row gap-x-3 justify-between w-full">
          <input
            type="date"
            className="bg-transparent px-4 py-1 border rounded-md"
          />
          {done === false ? <Button placeholder="Delete" classname="bg-transparent outline-1 outline-gray-200 outline mr-2 hover:outline-gray-400 hover:border-gray-100 px-4 py-[6px] rounded-md text-red-500"/> : null}
        </div>
      </div>
      <div className="flex flex-row gap-x-3 mt-2">
        <div className="py-1">
          <i className="fa-solid fa-pencil text-primary"></i>
        </div>
        <div className="px-0">
          {content}
        </div>
      </div>
    </div>
  );
};

export default TaskContent;
