import React, { useState } from "react";

const FormSplitBill = ({selectedFriend , onSplit}) => {

  const [bill , setBill] = useState("")
  const [paidByUser , setPaidByUser] = useState('')
  const [whoIsPaying , setWhoIsPaying] = useState("user")
  const paidByFriend = bill ? bill - paidByUser : ""
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!bill || !paidByUser){
      alert("Please fill in all fields")
    }

    onSplit(whoIsPaying === "user" ? paidByFriend : -paidByUser)
  }
  return (
    <form onSubmit={handleSubmit} className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label>Bill value</label>
      <input value={bill} onChange={(e) => setBill(Number(e.target.value))} type="text" />

      <label>Your expense</label>
      <input value={paidByUser} onChange={(e) => setPaidByUser(Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} type="text" />

      <label>{selectedFriend.name}'s expense</label>
      <input value={paidByFriend} disabled type="text" />
      
      <label>Who is paying?</label>
      <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
};

export default FormSplitBill;
