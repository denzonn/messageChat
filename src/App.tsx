import { useState } from "react";
import "./App.css";
import Search from "./component/Search";
import Chat from "./component/Chat";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [inbox, setInbox] = useState<boolean>(false);
  const [task, setTask] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);

  return (
    <div>
      <div
        className={
          inbox === true || task === true
            ? "hidden"
            : "absolute bottom-10 right-10 cursor-pointer"
        }
        onClick={() => setOpen(!open)}
      >
        <img src="./../public/chat.png" alt="" />
      </div>

      {inbox === true || task === true ? (
        <div className="absolute bottom-10 right-11 bg-[#4f4f4f] w-14 h-14 rounded-full"></div>
      ) : null}

      {open && open === true ? (
        <div
          className={
            inbox === true || task === true
              ? "absolute bottom-10 right-10 flex flex-row gap-x-5"
              : "absolute bottom-10 right-28 flex flex-row gap-x-5"
          }
        >
          {inbox === true ? (
            <>
              <div>
                {inbox === true ? null : (
                  <div className="text-sm mb-1">Task</div>
                )}
                <img
                  src="./../public/task.png"
                  alt=""
                  onClick={() => setTask(!task)}
                />
              </div>
              <div>
                {inbox === true ? null : (
                  <div className="text-sm mb-1">Inbox</div>
                )}
                <img
                  src="./../public/inboxChoose.png"
                  alt=""
                  onClick={() => setInbox(!inbox)}
                />
              </div>
            </>
          ) : (
            <>
              <div>
                {task === true ? null : (
                  <div className="text-sm mb-1">Inbox</div>
                )}
                <img
                  src="./../public/inbox.png"
                  alt=""
                  onClick={() => setInbox(!inbox)}
                />
              </div>
              <div>
                {task === true ? null : (
                  <div className="text-sm mb-1">Task</div>
                )}
                <img
                  src={
                    task === true
                      ? "./../public/taskChoose.png"
                      : "./../public/task.png"
                  }
                  alt=""
                  onClick={() => setTask(!task)}
                />
              </div>
            </>
          )}
        </div>
      ) : null}

      {inbox === true ? (
        <div className="absolute bottom-28 right-10 rounded-lg bg-white text-black w-[40vw] h-[70vh] py-4 px-6">
          {show === true ? (
            <div className=" w-full">
              <div className="flex flex-row gap-x-2 items-center w-full justify-between">
                <div>
                  <i
                    className="fa-solid fa-arrow-left-long"
                    onClick={() => setShow(false)}
                  ></i>
                </div>
                <div className="text-left">
                  <div className="text-primary">
                    I-589 - AMARKHIL, Obaudullah [Affirmative Filing with ZHN]
                  </div>
                  <div className="font-light text-sm text-third">
                    3 Participants
                  </div>
                </div>
                <div>
                  <i
                    className="fa-solid fa-circle-xmark"
                    onClick={() => setShow(false)}
                  ></i>
                </div>
              </div>
              <div className="overflow-auto h-[65vh] ">
                <div className="text-right text-sm w-full">
                  <div>You</div>
                  <div className="flex justify-end">
                    <div className="bg-chatPurple rounded-md p-2 w-fit text-left">
                      <div>
                        No worries. It will be completed ASAP. I've asked him
                        yesterday.
                      </div>
                      <div>19.20</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <Search />
              <div className="overflow-auto h-[60vh]">
                <div
                  className="flex flex-row gap-x-5 items-center justify-center py-6"
                  onClick={() => setShow(!show)}
                >
                  <div className="relative w-1/12">
                    <div className="absolute top-1/2 left-1/6 -translate-y-1/2 bg-four px-3 py-2 rounded-full text-third">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/6 bg-primary px-3 py-2 rounded-full text-white">
                      <i className="fa-regular fa-user"></i>
                    </div>
                  </div>
                  <div className="w-11/12 text-left">
                    <div className="text-primary text-base font-bold">
                      109220-Naturalization{" "}
                      <span className="ml-2 text-third text-xs">
                        January 1, 2021 19:10
                      </span>
                    </div>
                    <div className="font-bold text-sm text-second">
                      Cameroon Philips
                    </div>
                    <div className="font-light text-sm text-third">
                      Please check this out!
                    </div>
                  </div>
                </div>
                <hr />
                <div
                  className="flex flex-row gap-x-5 items-center justify-center py-6"
                  onClick={() => setShow(!show)}
                >
                  <div className="relative w-1/12">
                    <div className="absolute top-1/2 left-1/6 -translate-y-1/2 bg-four px-3 py-2 rounded-full text-third">
                      <i className="fa-regular fa-user"></i>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/6 bg-primary px-3 py-2 rounded-full text-white">
                      <i className="fa-regular fa-user"></i>
                    </div>
                  </div>
                  <div className="w-11/12 text-left">
                    <div className="text-primary text-base font-bold">
                      109220-Naturalization{" "}
                      <span className="ml-2 text-third text-xs">
                        January 1, 2021 19:10
                      </span>
                    </div>
                    <div className="font-bold text-sm text-second">
                      Cameroon Philips
                    </div>
                    <div className="font-light text-sm text-third">
                      Please check this out!
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export default App;
