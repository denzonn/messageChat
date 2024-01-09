import { FC } from "react";

interface NewTaskProps {
  setNewTask?: (newValue: boolean) => void;
}

const NewTask: FC<NewTaskProps> = ({ setNewTask }) => {
  const handleClick = () => {
    if (setNewTask) {
      setNewTask(false);
    }
  };

  return (
    <div className="absolute bottom-28 right-10 rounded-lg bg-white text-black w-[40vw] h-[30vh] py-4 px-6 border-t">
      <div className="flex flex-row gap-x-3 mt-2">
        <div className="w-1/12 py-[4px]">
          <input type="checkbox" className="checkbox w-5 h-5 " />
        </div>
        <div className="w-11/12 text-sm text-second">
          <div className="flex flex-row gap-x-3">
            <div className="w-11/12 text-start">
              <input
                type="text"
                className="w-1/2 bg-transparent px-4 py-1 border rounded-md"
                placeholder="Type Task Title"
              />
            </div>
            <div className="w-1/12">
              <i
                className={`fa-solid fa-angle-down mr-2 rotate-180`}
                onClick={handleClick}
              ></i>
              <i className="fa-solid fa-ellipsis"></i>
            </div>
          </div>
          <div className="content">
            <div className="flex flex-row gap-x-3 items-center mt-2">
              <div>
                <i className="fa-regular fa-clock"></i>
              </div>
              <div className="flex flex-row gap-x-3 justify-between w-full">
                <input
                  type="date"
                  className="bg-transparent px-4 py-1 border rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-row gap-x-3 mt-2">
              <div className="py-1">
                <i className="fa-solid fa-pencil"></i>
              </div>
              <div className="px-0">
                <textarea
                  className="border bg-transparent p-2 rounded-md"
                  placeholder="Deskripsi"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTask;
