import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import NoteCard from '../../components/Cards/NoteCard';
import {MdAdd } from "react-icons/md";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='conatiner mx-auto'>
        <div className="grid grid-cols-3 gap-4 mt-8 mr-8 ml-14">
      <NoteCard title="Meeting on 7th April" 
      date="3rd Apr 2024"
      content ="Metting  on 7th April Meeting on 7th April"
      tags="#Meeting"
      isPinned={true}
      onEdit={()=>{}}
      onDelete={()=>{}}
      onPinNote={()=>{}}
      />
      
      </div>
    </div>
    <button className="w-16 h-16 flex items-centre justify-centre rounded-2xl bg-primary hover:bg-blue-600 absolute right-10 bottom-10" onClick={() =>{}}></button>
    <MdAdd className="text-[32px] text-white" />
     
    </>
  )
}

export default Home