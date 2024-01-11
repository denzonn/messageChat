import { FC, useState } from "react";
import Button from "./Button";

interface TaskContentProps {
  content: string;
  done?: boolean;
  bookmark?: string[];
}

const TaskContent: FC<TaskContentProps> = ({ content, done, bookmark }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [addBookmark, setAddBookmark] = useState<boolean>(false);

  return (
    <div>
      <div className="flex flex-row gap-x-3 items-center mt-2 px-3">
        <div>
          <i className="fa-regular fa-clock text-primary"></i>
        </div>
        <div className="flex flex-row gap-x-3 justify-between w-full">
          <input
            type="date"
            className="bg-transparent px-4 py-1 border rounded-md"
          />
          {done === false ? (
            <Button
              placeholder="Delete"
              classname="bg-transparent outline-1 outline-gray-200 outline mr-2 hover:outline-gray-400 hover:border-gray-100 px-4 py-[6px] rounded-md text-red-500"
            />
          ) : null}
        </div>
      </div>
      <div className="flex flex-row gap-x-3 mt-2 px-3">
        <div className="py-1">
          <i
            className="fa-solid fa-pencil text-primary"
            onClick={() => setEdit(!edit)}
          ></i>
        </div>
        <div className="px-0">
          {edit === true ? (
            <textarea
              className="border bg-transparent p-2 rounded-md"
              placeholder="Deskripsi"
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  setEdit(false);
                }
              }}
            >
              {content}
            </textarea>
          ) : (
            <div>{content}</div>
          )}
        </div>
      </div>
      <div className="w-full flex flex-row gap-x-3 mt-2 bg-[#F9F9F9] rounded-md items-center p-3 relative">
        <div>
          <i
            className="fa-regular fa-bookmark text-primary"
            onClick={() => setAddBookmark(!addBookmark)}
          ></i>
        </div>
        <div className="flex flex-row gap-x-3">
          {bookmark &&
            bookmark?.map((item: string, index: number) => {
              return (
                <div
                  className={`p-2 rounded-md font-semibold text-xs ${
                    item === "Important ASAP"
                      ? "bg-b1"
                      : item === "Offline Meeting"
                      ? "bg-b2"
                      : item === "Virtual Meeting"
                      ? "bg-b3"
                      : item === "ASAP"
                      ? "bg-b4"
                      : item === "Client Related"
                      ? "bg-b5"
                      : item === "Self Task"
                      ? "bg-b6"
                      : item === "Appointments"
                      ? "bg-b7"
                      : "bg-b8"
                  }`}
                  key={index}
                >
                  {item}
                </div>
              );
            })}
        </div>
        {addBookmark === true ? (
          <div className="absolute top-16 left-0 p-2 bg-white border rounded-md text-left w-1/2 z-50 flex flex-col gap-y-2 text-xs">
            <div className="p-2 bg-b1 rounded-md">Important ASAP</div>
            <div className="p-2 bg-b2 rounded-md">Offline Meeting</div>
            <div className="p-2 bg-b3 rounded-md">Virtual Meeting</div>
            <div className="p-2 bg-b4 rounded-md">ASAP</div>
            <div className="p-2 bg-b5 rounded-md">Client Related</div>
            <div className="p-2 bg-b6 rounded-md">Self Task</div>
            <div className="p-2 bg-b7 rounded-md">Appointments</div>
            <div className="p-2 bg-b8 rounded-md">Court Related</div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TaskContent;
