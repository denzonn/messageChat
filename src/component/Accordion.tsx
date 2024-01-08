import { FC, useState } from "react";
import TaskContent from "./TaskContent";

interface AccordionProps {
  title: string;
  days: number;
  date: string;
  content: string;
  done?: boolean;
}

const Accordion: FC<AccordionProps> = ({
  title,
  days,
  date,
  content,
  done,
}) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return done === true ? (
    <div className="flex flex-row gap-x-3 mt-2">
      <div className="w-1/12 py-[2px]">
        <input
          type="checkbox"
          className="checkbox w-5 h-5 "
          checked
        />
      </div>
      <div className="w-11/12 text-sm text-second">
        <div className="flex flex-row gap-x-3">
          <div className="w-11/12 font-semibold text-start">
            <div className="flex flex-row gap-x-2">
              <div className="w-8/12 line-through text-third">{title}</div>
              <div className="w-2/12 text-[12px] font-light"></div>
              <div className="w-2/12 text-[12px] font-light">{date}</div>
            </div>
          </div>
          <div className="w-1/12">
            <i
              className={`fa-solid fa-angle-down mr-2 ${
                showContent ? "rotate-180" : ""
              }`}
              onClick={toggleContent}
            ></i>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        {showContent && (
          <div className="content">
            <TaskContent content={content} done={done}/>
          </div>
        )}
      </div>
    </div>
  ) : (
    <div className="flex flex-row gap-x-3 mt-2">
      <div className="w-1/12 py-[2px]">
        <input
          type="checkbox"
          className="checkbox w-5 h-5 "
        />
      </div>
      <div className="w-11/12 text-sm text-second">
        <div className="flex flex-row gap-x-3">
          <div className="w-11/12 font-semibold text-start">
            <div className="flex flex-row gap-x-2">
              <div className="w-8/12">{title}</div>
              <div className="w-2/12 text-[12px] font-light text-red-500">{days} Days Left</div>
              <div className="w-2/12 text-[12px] font-light">{date}</div>
            </div>
          </div>
          <div className="w-1/12">
            <i
              className={`fa-solid fa-angle-down mr-2 ${
                showContent ? "rotate-180" : ""
              }`}
              onClick={toggleContent}
            ></i>
            <i className="fa-solid fa-ellipsis"></i>
          </div>
        </div>
        {showContent && (
          <div className="content">
            <TaskContent content={content} done={done}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
