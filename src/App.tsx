import { useEffect, useState } from "react";
import "./App.css";
import Search from "./component/Search";
import Button from "./component/Button";
import Accordion from "./component/Accordion";
import NewTask from "./component/NewTask";
import Chat from "./component/Chat";
import TaskData from "./data/task.json";
import { motion } from "framer-motion";
import Navbar from "./component/Navbar";

interface AccordionProps {
  title: string;
  days: number;
  date: string;
  content: string;
  done?: boolean;
  bookmark?: string[];
}

const backdrop = {
  visible: {
    x: 0,
    opacity: 1,
    originX: 0,
    transition: {
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
  },
};

const popup = {
  visible: {
    y: 0,
    opacity: 1,
    originY: 0,
    transition: {
      delay: 0.5,
    },
  },
  hidden: {
    opacity: 0,
    y: 30,
  },
};

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [inbox, setInbox] = useState<boolean>(false);
  const [task, setTask] = useState<boolean>(false);
  const [newTask, setNewTask] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoadingTask, setIsLoadingTask] = useState<boolean>(true);
  const [isLoadingAdmin, setIsLoadingAdmin] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoadingTask(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const loadingAdminChat = () => {
    const timeout = setTimeout(() => {
      setIsLoadingAdmin(false);
    }, 4000);

    return () => clearTimeout(timeout);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row gap-x-3">
        <div className="text-[10vh] text-left w-full font-bold">
          Simple <br /> Web Design
          <div className="text-base font-medium">
            Welcome to the PT. Techno Astra Terapan
          </div>
        </div>
        <div>
          <img src="./../public/home.svg" alt="" className="w-[50vw] h-auto"/>
        </div>
      </div>
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
        <motion.div
          variants={backdrop}
          exit="hidden"
          animate="visible"
          initial="hidden"
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
                  onClick={() => {
                    setTask(true), setInbox(false);
                  }}
                />
              </div>
              <div>
                {inbox === true ? null : (
                  <div className="text-sm mb-1">Inbox</div>
                )}
                <img
                  src="./../public/inboxChoose.png"
                  alt=""
                  onClick={() => {
                    setInbox(false), setTask(false);
                  }}
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
                  onClick={() => {
                    setInbox(true), setTask(false);
                  }}
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
                  onClick={() => {
                    setTask(true), setInbox(false);
                  }}
                />
              </div>
            </>
          )}
        </motion.div>
      ) : null}

      {inbox === true ? (
        <motion.div
          variants={popup}
          exit="hidden"
          animate="visible"
          initial="hidden"
          className="absolute bottom-28 right-10 rounded-lg bg-white text-black w-[40vw] h-[70vh] py-4 px-6"
        >
          {isLoading ? (
            <div>
              <Search />
              <div className="w-full h-full grid place-items-center mt-44">
                <div>
                  <span className="loading loading-spinner loading-lg"></span>
                </div>
                <div>Loading Chats...</div>
              </div>
            </div>
          ) : show === true ? (
            <Chat setShow={setShow} />
          ) : showAdmin === true ? (
            <div className=" w-full">
              <div className="flex flex-row gap-x-2 items-center w-full justify-between">
                <div>
                  <i
                    className="fa-solid fa-arrow-left-long"
                    onClick={() => setShowAdmin(false)}
                  ></i>
                </div>
                <div className="text-left">
                  <div className="text-primary">FastVisa Support</div>
                </div>
                <div>
                  <i
                    className="fa-solid fa-circle-xmark"
                    onClick={() => setShowAdmin(false)}
                  ></i>
                </div>
              </div>
              {isLoadingAdmin ? (
                <div>
                  <div className="overflow-auto h-[54vh]"></div>
                  <div className="relative">
                    <div className="absolute top-0 left-0 -translate-y-14 bg-bluePastel py-3 px-3 rounded-md w-full text-sm text-second text-left flex flex-row items-center gap-x-3">
                      <span className="loading loading-spinner loading-xs"></span>
                      Please wait while we connect you with one of our team
                    </div>
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
              ) : (
                <div>
                  <div className="overflow-auto h-[54vh]">
                    <div className="text-left text-sm w-full mt-2">
                      <div className="text-primary font-bold">
                        FastVisa Support
                      </div>
                      <div className="flex gap-x-2 ">
                        <div className="bg-gray-100 rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                          <div>
                            Hey there. Welcome to your inbox! Contact us for
                            more information and help about anything! We'll send
                            you a response as soon as possible.
                          </div>
                          <div>19.32</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-right text-sm w-full">
                      <div className="text-chatPurpleDark font-bold">You</div>
                      <div className="flex gap-x-2 justify-end">
                        <div>
                          <i
                            className="fa-solid fa-ellipsis"
                            // onClick={handleClick}
                          ></i>
                        </div>
                        <div className="bg-chatPurple rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                          <div>
                            Hi, I need help with something can you help me?
                          </div>
                          <div>19.32</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
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
              )}
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
                <div
                  className="flex flex-row gap-x-5 items-center justify-center py-6"
                  onClick={() => {
                    setShowAdmin(!showAdmin), loadingAdminChat();
                  }}
                >
                  <div className="relative w-1/12">
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -translate-x-1/6 bg-primary px-4 py-2 rounded-full text-white">
                      F
                    </div>
                  </div>
                  <div className="w-11/12 text-left">
                    <div className="text-primary text-base font-bold">
                      FashVisa Support
                      <span className="ml-2 text-third text-xs">
                        01/06/2021 12:19
                      </span>
                    </div>
                    <div className="font-light text-sm text-third">
                      Hey there! Welcome to your inbox
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      ) : null}

      {task === true ? (
        <motion.div
          variants={popup}
          exit="hidden"
          animate="visible"
          initial="hidden"
          className="absolute bottom-28 right-10 rounded-lg bg-white text-black w-[40vw] h-[70vh] py-4 px-6"
        >
          <div className="grid grid-cols-2 gap-x-4">
            <div>
              <select
                name=""
                id=""
                className="bg-transparent py-2 px-3 border rounded-md w-fit focus:border"
              >
                <option value="" selected>
                  My Task
                </option>
                <option value="Personal Errands">Personal Errands</option>
                <option value="Urgent To Do">Urgent To Do</option>
              </select>
            </div>
            <div className="flex justify-end">
              <Button
                placeholder="New Task"
                onClick={() => setNewTask(!newTask)}
              />
            </div>
          </div>
          {isLoadingTask ? (
            <div className="w-full grid place-items-center mt-36">
              <div>
                <span className="loading loading-spinner loading-lg"></span>
              </div>
              <div>Loading Task Lists...</div>
            </div>
          ) : (
            <div className="overflow-auto h-[58vh] mt-4">
              {TaskData?.accordion &&
                TaskData?.accordion?.map(
                  (item: AccordionProps, index: number) => (
                    <Accordion
                      key={index}
                      title={item.title}
                      days={item.days}
                      date={item.date}
                      content={item.content}
                      done={item.done}
                      bookmark={item?.bookmark}
                    />
                  )
                )}
            </div>
          )}
        </motion.div>
      ) : null}

      {newTask === true ? <NewTask setNewTask={setNewTask} /> : null}
    </div>
  );
}

export default App;
