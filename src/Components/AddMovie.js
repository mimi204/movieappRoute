import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AddMovie = ({ handleAdd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  // const [name, setName] = useState("");
  // const [imageUrl, setImageURL] = useState("");
  // const [date, setDate] = useState("");
  // const [rate, setRate] = useState(1);
  const [form, setForm] = useState({
    name: "",
    date: "",
    image: "",
    rating: 1,
  });
  // handle change in the form input
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  // handle rating
  const handleRate = (rate) => setForm({ ...form, rating: rate });
  return (
    <div  >
      <button  onClick={openModal}>
        Add movie
      </button>
      <Modal
        style={customStyles}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <form className="modal"
          onSubmit={(e) => {
            e.preventDefault();
            let newMovie = {
              ...form,
              id: Math.random(),
            };
            handleAdd(newMovie);
            closeModal();
          }}
        >
          <div className="container-2">
            
          <label className="text">Name</label>
          <input id="search"
              type="text"
             placeholder="Enter movie name"
            value={form.name}
            name="name"
            onChange={handleChange}
            // required
            />
            <br /><br />
            

          <label className="text"> Date of release </label>
            <input
                  id="search"
              type="date"
              placeholder="Enter date"
            value={form.date}
            name="date"
            onChange={handleChange}
            // required
            />
                     
 <br /><br />
  
          <label className="text" >Image</label>
            <input
                  id="search"
              type="url"
              placeholder="Enter URL"
            value={form.image}
            name="image"
            onChange={handleChange}/> 
          
              <br /><br /> 
              
              
              
            < StarRating rate={form.rating} handleRating={handleRate} />

           
            



            <div>
              
            <button className="button" type="submit">
              Add
            </button>
            <button className="button" onClick={closeModal}>
              Cancel
            </button>
            </div>
            </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;