"use client";

import Image from "next/image";
import { IoMdMenu } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";
import React, { useState } from "react";
import person1 from "../../public/person1.jpg";
import person2 from "../../public/person2.jpg";
import person3 from "../../public/person3.jpg";
import person4 from "../../public/person4.jpg";
import person5 from "../../public/person5.jpg";
import person6 from "../../public/person6.jpg";
import person7 from "../../public/person7.jpg";
import mei from "../../public/MEI.png";

const imageStyle: object = {
  minWidth: "100%",
  maxWidth: "140%",
  minHeight: "100%",
  maxHeight: "150%",
  objectFit: "cover",
};

const Chats = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen w-full flex flex-col p-4 overflow-hidden">
      <div className="w-full h-[4rem] flex">
        <div className="rounded-full flex items-center justify-center p-2 h-[3rem] w-[3rem] bg-[#494949]">
          <IoMdMenu className="text-white h-[2rem] w-[2rem]" />
        </div>
        <h1 className="grow text-white font-bold text-[1.6rem] pl-4 pt-1">
          Chats
        </h1>
        <div className="rounded-full flex items-center justify-center p-2 h-[3rem] w-[3rem] bg-[#494949]">
          <BsPencilSquare className="text-white h-[1.6rem] w-[1.6rem]" />
        </div>
      </div>

      <div className="w-full h-[3rem] flex items-center justify-center">
        <input
          type="string"
          value={search}
          className="rounded-[2rem] w-full h-[2rem] bg-[#494949] pl-4 pr-2 outline-none border-none"
          placeholder="Search for a person"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-nowrap overflow-x-scroll items-center justify-start h-[5.4rem] w-auto mt-2">
        <div className="flex flex-col justify-start items-center">
          <div className=" relative rounded-full h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden flex justify-center items-start ml-[.5rem] mr-[.5rem]">
            <Image src={person1} alt="" style={imageStyle} />
          </div>
          <p className="mt-[5px] text-[.7rem]">Adam</p>
        </div>

        <div className="flex flex-col justify-start items-center">
          <div className=" relative rounded-full h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden flex justify-center items-start ml-[.5rem] mr-[.5rem]">
            <Image src={person2} alt="" style={imageStyle} />
          </div>
          <p className="mt-[5px] text-[.7rem]">Brittany</p>
        </div>

        <div className="flex flex-col justify-start items-center">
          <div className=" relative rounded-full h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden flex justify-center items-start ml-[.5rem] mr-[.5rem]">
            <Image src={person3} alt="" style={imageStyle} />
          </div>
          <p className="mt-[5px] text-[.7rem]">Lilly</p>
        </div>

        <div className="flex flex-col justify-start items-center">
          <div className=" relative rounded-full h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden flex justify-center items-start ml-[.5rem] mr-[.5rem]">
            <Image src={person4} alt="" style={imageStyle} />
          </div>
          <p className="mt-[5px] text-[.7rem]">David</p>
        </div>

        <div className="flex flex-col justify-start items-center">
          <div className=" relative rounded-full h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden flex justify-center items-start ml-[.5rem] mr-[.5rem]">
            <Image src={person5} alt="" style={imageStyle} />
          </div>
          <p className="mt-[5px] text-[.7rem]">Brian</p>
        </div>

        <div className="flex flex-col justify-start items-center">
          <div className=" relative rounded-full h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden flex justify-center items-start ml-[.5rem] mr-[.5rem]">
            <Image src={person6} alt="" style={imageStyle} />
          </div>
          <p className=" mt-[5px] text-[.7rem]">Brooke</p>
        </div>

        <div className="flex flex-col justify-start items-center">
          <div className=" relative rounded-full h-[4rem] w-[4rem] min-w-[4rem] overflow-hidden flex justify-center items-start ml-[.5rem] mr-[.5rem]">
            <Image src={person7} alt="" style={imageStyle} />
          </div>
          <p className=" mt-[5px] text-[.7rem]">Evelyn</p>
        </div>
      </div>



      <div className="h-[4.2rem] flex w-full justify-start items-center mt-4 rounded-xl shadow-xl border-b-[#de41de78] border-b-[1px] border-r-[#de41de78] border-r-[1px]">
        <div className="rounded-full overflow-hidden w-[3.6rem] h-[3.6rem] min-w-[3.6rem] flex justify-center items-start mr-4">
          <Image src={mei} alt="" style={imageStyle} />
        </div>

        <div className="flex items-start flex-col justify-center grow h-[4rem]">
          <div>
            <p className="font-bold">Gym Bro Chat</p>
          </div>
          <div className="flex">
            <p className="text-[.8rem] text-[#dadada] overflow-hidden w-[70%] h-[1.1rem]">
              Brittany: What time are we meeting for the dog walk?
            </p>
            <p className="text-[.8rem] text-[#dadada] w-[30%]">... 1:26 pm</p>
          </div>
        </div>
      </div>






      <div className="h-[4.2rem] flex w-full justify-start items-center mt-4 rounded-xl shadow-xl border-b-[#54cab878] border-b-[1px] border-r-[#54cab878] border-r-[1px]">
        <div className="rounded-full overflow-hidden w-[3.6rem] h-[3.6rem] min-w-[3.6rem] flex justify-center items-start mr-4">
          <Image src={person7} alt="" style={imageStyle} />
        </div>

        <div className="flex items-start flex-col justify-center grow h-[4rem]">
          <div>
            <p className="font-bold">Evelyn Thomas</p>
          </div>
          <div className="flex">
            <p className="text-[.8rem] text-[#dadada] overflow-hidden w-[70%] h-[1.1rem]">
              Hey Steve! I was wondering if you and your room mate would want to
            </p>
            <p className="text-[.8rem] text-[#dadada] w-[30%]">... 11:54am</p>
          </div>
        </div>
      </div>





      <div className="h-[4.2rem] flex w-full justify-start items-center mt-2 rounded-xl shadow-xl border-b-[#54cab878] border-b-[1px] border-r-[#54cab878] border-r-[1px]">
        <div className="rounded-full overflow-hidden w-[3.6rem] h-[3.6rem] min-w-[3.6rem] flex justify-center items-start mr-4">
          <Image src={person4} alt="" style={imageStyle} />
        </div>

        <div className="flex items-start flex-col justify-center grow h-[4rem]">
          <div>
            <p className="font-bold">David Smith</p>
          </div>
          <div className="flex">
            <p className="text-[.8rem] text-[#dadada] overflow-hidden w-[70%] h-[1.1rem]">
              What was it you called me for the other day?
            </p>
            <p className="text-[.8rem] text-[#dadada] w-[30%]">... 9:01 am</p>
          </div>
        </div>
      </div>







      <div className="h-[4.2rem] flex w-full justify-start items-center mt-2 rounded-xl shadow-xl border-b-[#54cab878] border-b-[1px] border-r-[#54cab878] border-r-[1px]">
        <div className="rounded-full overflow-hidden w-[3.6rem] h-[3.6rem] min-w-[3.6rem] flex justify-center items-start mr-4">
          <Image src={person2} alt="" style={imageStyle} />
        </div>

        <div className="flex items-start flex-col justify-center grow h-[4rem]">
          <div>
            <p className="font-bold">Brittany Eddings</p>
          </div>
          <div className="flex">
            <p className="text-[.8rem] text-[#dadada] overflow-hidden w-[70%] h-[1.1rem]">
              Guess what? at the park the other day we met a guy
            </p>
            <p className="text-[.8rem] text-[#dadada] w-[30%]">... Jun 5</p>
          </div>
        </div>
      </div>









      <div className="h-[4.2rem] flex w-full justify-start items-center mt-2 rounded-xl shadow-xl border-b-[#54cab878] border-b-[1px] border-r-[#54cab878] border-r-[1px]">
        <div className="rounded-full overflow-hidden w-[3.6rem] h-[3.6rem] min-w-[3.6rem] flex justify-center items-start mr-4">
          <Image src={person5} alt="" style={imageStyle} />
        </div>

        <div className="flex items-start flex-col justify-center grow h-[4rem]">
          <div>
            <p className="font-bold">Brain Barker</p>
          </div>
          <div className="flex">
            <p className="text-[.8rem] text-[#dadada] overflow-hidden w-[70%] h-[1.1rem]">
              What time are you going to be off tomorrow?
            </p>
            <p className="text-[.8rem] text-[#dadada] w-[30%]">... Jun 1</p>
          </div>
        </div>
      </div>









      <div className="h-[4.2rem] flex w-full justify-start items-center mt-2 rounded-xl shadow-xl border-b-[#54cab878] border-b-[1px] border-r-[#54cab878] border-r-[1px]">
        <div className="rounded-full overflow-hidden w-[3.6rem] h-[3.6rem] min-w-[3.6rem] flex justify-center items-start mr-4">
          <Image src={person1} alt="" style={imageStyle} />
        </div>

        <div className="flex items-start flex-col justify-center grow h-[4rem]">
          <div>
            <p className="font-bold">Adam Truesdale</p>
          </div>
          <div className="flex">
            <p className="text-[.8rem] text-[#dadada] overflow-hidden w-[70%] h-[1.1rem]">
              Sorry for getting back so late.
            </p>
            <p className="text-[.8rem] text-[#dadada] w-[30%]">... May 29</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chats;
