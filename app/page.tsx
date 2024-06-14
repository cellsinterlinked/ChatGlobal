import Image from "next/image"
import {useState, useEffect} from 'react'
import Chats from "./Chats/page";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center  w-full  justify-center bg-[#292929]">
      <Chats />
    </main>
  );
}
