import { useState } from "react";
import "./App.css";
import Search from "./component/Search";
import Chat from "./component/Chat";
import Button from "./component/Button";

function App() {
  const [open, setOpen] = useState<boolean>(false);
  const [inbox, setInbox] = useState<boolean>(false);
  const [task, setTask] = useState<boolean>(false);

  const [show, setShow] = useState<boolean>(false);
  const [showAdmin, setShowAdmin] = useState<boolean>(false);

  const [width, setWidth] = useState<number>();
  const [height, setHeight] = useState<number>();

  const handleClick = (event) => {
    const clickedX = event.clientX;
    const clickedY = event.clientY;

    setWidth(clickedX);
    setHeight(clickedY);
  };

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
              <div className="overflow-auto h-[52vh]">
                <div className="text-right text-sm w-full">
                  <div className="text-chatPurpleDark font-bold">You</div>
                  <div className="flex gap-x-2 justify-end">
                    <div>
                      <i
                        className="fa-solid fa-ellipsis"
                        onClick={handleClick}
                      ></i>
                    </div>
                    {width ? (
                      <div
                        className={`flex flex-col justify-center items-center border rounded-md px-5 py-1 absolute w-[${width}px] h-[${height}px] z-50 bg-white`}
                      >
                        <button className="bg-transparent w-full hover:border-transparent text-primary py-1">
                          Edit
                        </button>
                        <button className="bg-transparent w-full hover:border-transparent text-red-500  py-1">
                          Delete
                        </button>
                      </div>
                    ) : null}
                    <div className="bg-chatPurple rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                      <div>
                        No worries. It will be completed ASAP. I've asked him
                        yesterday.
                      </div>
                      <div>19.20</div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-x-4 mt-4 items-center">
                  <div>
                    <hr />
                  </div>
                  <div>Today June 09, 2023</div>
                  <div>
                    <hr />
                  </div>
                </div>
                <div className="text-left text-sm w-full mt-2">
                  <div className="text-chatYellowDark font-bold">
                    Mary Hilda
                  </div>
                  <div className="flex gap-x-2 ">
                    <div className="bg-chatYellow rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                      <div>
                        Hello baidullah, I will be your case adisor for case
                        #029290. I have assigned some homework for you to fill.
                        Please keep up with the due dates. Should you have any
                        questions, you can message me anytime. Thanks
                      </div>
                      <div>19.32</div>
                    </div>
                    <div>
                      <i
                        className="fa-solid fa-ellipsis"
                        onClick={handleClick}
                      ></i>
                    </div>
                    {width ? (
                      <div
                        className={`flex flex-col justify-center items-center border rounded-md px-5 py-1 absolute w-[${width}px] h-[${height}px] z-50 bg-white`}
                      >
                        <button className="bg-transparent w-full hover:border-transparent text-primary py-1">
                          Edit
                        </button>
                        <button className="bg-transparent w-full hover:border-transparent text-red-500  py-1">
                          Delete
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="text-right text-sm w-full mt-2">
                  <div className="text-chatPurpleDark font-bold">You</div>
                  <div className="flex gap-x-2 justify-end">
                    <div>
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                    <div className="bg-chatPurple rounded-md p-2 max-w-[28vw] w-fit text-left text-second">
                      <div>
                        Please contact Mary for questions regarding the case bcs
                        she will be managing your forms now on! Thanks Mary.
                      </div>
                      <div>19.33</div>
                    </div>
                  </div>
                </div>
                <div className="text-left text-sm w-full mt-2">
                  <div className="text-chatYellowDark font-bold">
                    Mary Hilda
                  </div>
                  <div className="flex gap-x-2 ">
                    <div className="bg-chatYellow rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                      <div>Sure thing. Claren</div>
                      <div>19.33</div>
                    </div>
                    <div>
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                </div>
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
                <div className="text-left text-sm w-full mt-2">
                  <div className="text-chatGreenDark font-bold">
                    Aboidullah Amarkhil
                  </div>
                  <div className="flex gap-x-2 ">
                    <div className="bg-chatGreen rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                      <div>Good Morning. I'ii try to do them. Thanks</div>
                      <div>19.35</div>
                    </div>
                    <div>
                      <i className="fa-solid fa-ellipsis"></i>
                    </div>
                  </div>
                </div>
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
              <div className="overflow-auto h-[54vh]">
                <div className="text-left text-sm w-full mt-2">
                  <div className="text-primary font-bold">FastVisa Support</div>
                  <div className="flex gap-x-2 ">
                    <div className="bg-gray-100 rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                      <div>
                        Hey there. Welcome to your inbox! Contact us for more
                        information and help about anything! We'll send you a
                        response as soon as possible.
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
                        onClick={handleClick}
                      ></i>
                    </div>
                    <div className="bg-chatPurple rounded-md p-2 max-w-[28vw]  w-fit text-left text-second">
                      <div>Hi, I need help with something can you help me?</div>
                      <div>19.32</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute top-0 left-0 -translate-y-14 bg-bluePastel py-3 px-3 rounded-md w-full text-sm text-second text-left">
                  <link
                    rel="icon"
                    type="image/svg+xml"
                    href="./../public/loading.svg"
                    className="mr-2"
                    style={{ width: "20px", height: "20px" }}
                  />{" "}
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
                  onClick={() => setShowAdmin(!showAdmin)}
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
        </div>
      ) : null}
    </div>
  );
}

export default App;
