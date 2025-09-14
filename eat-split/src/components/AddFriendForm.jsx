import React, { useState } from "react";

const AddFriendForm = ({ onAddFriend}) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || image === "") alert("Fields are empty");
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name: name,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);
    setImage("https://i.pravatar.cc/48");
    setName("");
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="form-add-friend">
          <label>Friend's name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />

          <label>Image URL</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="text"
          />
          <button className="button">Add Friend</button>
        </form>
        
      
    </>
  );
};

export default AddFriendForm;
