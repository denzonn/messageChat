import { FC, useState } from "react";

interface DetailChatProps {
  typeChat: boolean;
  content?: string;
  time?: string;
  color1?: string;
  color2?: string;
  name?: string;
  setReply?: ((value: boolean) => void) | undefined;
  reply?: string;
}

const DetailChat: FC<DetailChatProps> = ({
  typeChat,
  content,
  time,
  color1,
  color2,
  name,
  setReply,
  reply,
}) => {
  const [showOption, setShowOption] = useState<boolean>(false);

  const toggleOption = () => {
    setShowOption(!showOption);
  };

  return typeChat === true ? (
    <div className="text-right text-sm w-full">
      <div className="text-chatPurpleDark font-bold">You</div>
      {reply ? (
        <div className="flex justify-end mb-1">
            <div className=" text-left bg-four p-2 max-w-[28vw] rounded-md text-xs">{reply}</div>
        </div>
      ) : null}
      <div className="flex gap-x-2 justify-end relative z-0">
        <div>
          <i className="fa-solid fa-ellipsis" onClick={toggleOption}></i>
        </div>
        {showOption === true ? (
          <div className="relative z-20">
            <div
              className={`absolute flex flex-col items-center border rounded-md px-5 py-1 bg-white z-50`}
              style={{
                top: "20px",
                left: "-50%",
                transform: "translateX(-20%)",
              }}
            >
              <button className="bg-transparent w-full hover:border-transparent text-second py-1">
                Share
              </button>
              <button
                className="bg-transparent w-full hover:border-transparent text-second py-1"
                onClick={() => setReply && setReply(true)}
              >
                Reply
              </button>
              <button className="bg-transparent w-full hover:border-transparent text-primary py-1">
                Edit
              </button>
              <button className="bg-transparent w-full hover:border-transparent text-red-500 py-1">
                Delete
              </button>
            </div>
          </div>
        ) : null}
        <div className="bg-chatPurple rounded-md p-2 max-w-[26vw]  w-fit text-left text-second ">
          <div>{content}</div>
          <div>{time}</div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-left text-sm w-full mt-2">
      <div className={`text-${color1} font-bold`}>{name}</div>
      <div className="flex gap-x-2 relative z-0">
        <div
          className={`bg-${color2} rounded-md p-2 max-w-[26vw]  w-fit text-left text-second`}
        >
          <div>{content}</div>
          <div>{time}</div>
        </div>
        <div>
          <i className="fa-solid fa-ellipsis" onClick={toggleOption}></i>
        </div>
        {showOption === true ? (
          <div className="relative z-20">
            <div
              className={`absolute flex flex-col items-center border rounded-md px-5 py-1 bg-white`}
              style={{
                top: "20px",
                left: "-50%",
                transform: "translateX(-20%)",
              }}
            >
              <button className="bg-transparent w-full hover:border-transparent text-second py-1">
                Share
              </button>
              <button
                className="bg-transparent w-full hover:border-transparent text-second py-1"
                onClick={() => setReply && setReply(true)}
              >
                Reply
              </button>
              <button className="bg-transparent w-full hover:border-transparent text-primary py-1">
                Edit
              </button>
              <button className="bg-transparent w-full hover:border-transparent text-red-500 py-1">
                Delete
              </button>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default DetailChat;
