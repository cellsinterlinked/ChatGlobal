'use client'
import createCalendar from '../../Components/Functions/CalendarCreate'
import { IoMdMenu } from "react-icons/io";
import { BsPencilSquare } from "react-icons/bs";

console.log(createCalendar(2, 2022))

const Planner = () => {
    return(
        <div className="min-h-screen w-full flex flex-col p-4 justify-start items-center bg-[#292929]">
     <div className="w-full h-[4rem] flex">
        <div className="rounded-full flex items-center justify-center p-2 h-[3rem] w-[3rem] bg-[#494949]">
          <IoMdMenu className="text-white h-[2rem] w-[2rem]" />
        </div>
        <h1 className="grow text-white font-bold text-[1.6rem] pl-4 pt-1">
          Planner
        </h1>
        <div className="rounded-full flex items-center justify-center p-2 h-[3rem] w-[3rem] bg-[#494949]">
          <BsPencilSquare className="text-white h-[1.6rem] w-[1.6rem]" />
        </div>
      </div>
        </div>
    )
}

export default Planner;