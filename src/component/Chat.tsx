import { FC, useState } from "react";
import Button from "./Button";
import DetailChat from "./DetailChat";

interface ChatProps {
  setShow?: ((value: boolean) => void) | undefined;
}

const Chat: FC<ChatProps> = ({setShow}) => {
  const [showReply, setShowReply] = useState<boolean>(false);

  return (
    <div className=" w-full">
      <div className="flex flex-row gap-x-2 items-center w-full justify-between">
        <div>
          <i
            className="fa-solid fa-arrow-left-long"
            onClick={() => setShow && setShow(false)}
          ></i>
        </div>
        <div className="text-left">
          <div className="text-primary">
            I-589 - AMARKHIL, Obaudullah [Affirmative Filing with ZHN]
          </div>
          <div className="font-light text-sm text-third">3 Participants</div>
        </div>
        <div>
          <i
            className="fa-solid fa-circle-xmark"
            onClick={() => setShow && setShow(false)}
          ></i>
        </div>
      </div>
      <div className="overflow-auto h-[52vh]">
        <DetailChat
          typeChat={true}
          content="No worries. It will be completed ASAP. I've asked him yesterday."
          time="19.20"
          setReply={setShowReply}
        />
        <div className="grid grid-cols-3 gap-x-4 mt-4 items-center">
          <div>
            <hr />
          </div>
          <div>Today June 09, 2023</div>
          <div>
            <hr />
          </div>
        </div>
        <DetailChat
          typeChat={false}
          content="Hello baidullah, I will be your case adisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks"
          time="19.32"
          color1="chatYellowDark"
          color2="chatYellow"
          name="Mary Hilda"
          setReply={setShowReply}
        />
        <DetailChat
          typeChat={true}
          content="Please contact Mary for questions regarding the ."
          time="19.33"
          setReply={setShowReply}
        />
        <DetailChat
          typeChat={false}
          content="Sure thing. Claren"
          time="19.33"
          name="Mary Hilda"
          color1="chatYellowDark"
          color2="chatYellow"
          setReply={setShowReply}
        />
        <div className="grid grid-cols-3 gap-x-4 mt-4 items-center text-red-500 font-bold">
          <div>
            <hr className="border-red-400 border" />
          </div>
          <div>
            New Message{" "}
            <i className="fa-solid fa-arrow-down text-gray-100 ml-2"></i>
          </div>
          <div>
            <hr className="border-red-400 border" />
          </div>
        </div>
        <DetailChat
          typeChat={false}
          name="Aboidullah Amarkhil"
          color1="chatGreenDark"
          color2="chatGreen"
          content="Good Morning. I'ii try to do them. Thanks"
          time="19.35"
          setReply={setShowReply}
        />
        <DetailChat
          typeChat={true}
          content="Hai Mary"
          reply="Hello baidullah, I will be your case adisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks"
        />
      </div>

      <div className="relative">
        {showReply === true ? (
          <div className="absolute bottom-0 left-0 -translate-y-9 w-[80.2%] bg-four py-3 px-3 rounded-tl-md rounded-tr-md text-second text-left flex flex-col items-center gap-x-3 text-xs">
            <div className="flex flex-row gap-x-3 justify-between items-center w-full">
              <div>Replying to Mary Hilda</div>
              <div>
                <i
                  className="fa-regular fa-circle-xmark"
                  onClick={() => setShowReply(false)}
                ></i>
              </div>
            </div>
            <div>
              Hello baidullah, I will be your case adisor for case #029290. I
              have assigned some Hello baidullah, I will be your case adisor for
              case #029290. I have assigned some Hello baidullah, I will be your
              case adisor for case #029290. I have assigned some
            </div>
          </div>
        ) : null}
        <div className="flex flex-row gap-x-5 mt-3">
          <div className="w-10/12">
            <input
              type="text"
              placeholder="Type a New Message"
              className="px-5 py-[6px] bg-transparent border rounded-md w-full"
            />
          </div>
          <div className="w-2/12">
            <Button placeholder="Send" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
