import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Notecard from '../../components/Cards/Notecard';
import './Home.css'
import { FaPlus } from "react-icons/fa";
import AddeditNotes from '../../components/Inputes/AddeditNotes';
import Modal from 'react-modal'
const Home = () => {

  const [openaddisShown, setopenaddIsShown] = useState({
    isShown: false,
    type: 'add',
    data: null
  })
  return (
    <>
      <Navbar />
      <div className="container mt-8 px-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Notecard
            title="Sample Note 1"
            date="Nov 20, 2024"
            content="This is a short description of the note."
            tags={["React", "JavaScript", "CSS"]}
            isPinned={false}
            onEdit={() => alert("Edit clicked!")}
            onDelete={() => alert("Delete clicked!")}
            onPinnote={() => alert("Pin/Unpin clicked!")}
          />
          <Notecard
            title="Sample Note 2"
            date="Nov 19, 2024"
            content="This is another short description of the note."
            tags={["Node.js", "HTML"]}
            isPinned={false}
            onEdit={() => alert("Edit clicked!")}
            onDelete={() => alert("Delete clicked!")}
            onPinnote={() => alert("Pin/Unpin clicked!")}
          />
          <Notecard
            title="Sample Note 3"
            date="Nov 18, 2024"
            content="Here is yet another description of the note."
            tags={["API", "MongoDB"]}
            isPinned={true}
            onEdit={() => alert("Edit clicked!")}
            onDelete={() => alert("Delete clicked!")}
            onPinnote={() => alert("Pin/Unpin clicked!")}
          />
          <Notecard
            title="Sample Note 4"
            date="Nov 18, 2024"
            content="Here is yet another description of the note."
            tags={["Express", "Node.js"]}
            isPinned={true}
            onEdit={() => alert("Edit clicked!")}
            onDelete={() => alert("Delete clicked!")}
            onPinnote={() => alert("Pin/Unpin clicked!")}
          />
        </div>
      </div>

      <Modal
        isOpen={openaddisShown.isShown} // Use the state variable here
        onRequestClose={() => setopenaddIsShown({ isShown: false, type: '', data: null })} // Proper close handler
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
          },
        }}
        contentLabel=""
        className="w-[40%] max-h-3/4 bg-white mx-auto mt-20 "
      >
        <AddeditNotes
          setopenaddIsShown={setopenaddIsShown}
        />

      </Modal>

      <div className='editButton'>
        <button onClick={() => setopenaddIsShown({
          isShown: true, type: 'add',
          data: null
        })}><FaPlus /></button>
      </div>
    </>
  );
};

export default Home;
