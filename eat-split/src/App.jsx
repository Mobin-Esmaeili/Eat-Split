import FriendsList from "./components/FriendsList";
import AddFriendForm from "./components/AddFriendForm";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleAddFriend = (newFriend) => {
    setFriends((friend) => [...friend, newFriend]);
    setIsOpen(false);
  };

  const handleSelectedFriend = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setIsOpen(false);
  };

  const handleSplitBill = (value) => {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  };
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          onSelection={handleSelectedFriend}
          selectedFriend={selectedFriend}
          friends={friends}
        />
        {isOpen && (
          <AddFriendForm
            isOpen={() => setIsOpen(!isOpen)}
            onAddFriend={handleAddFriend}
          />
        )}

        <button onClick={() => setIsOpen(!isOpen)} className="button">
          {isOpen ? "Close" : "Add friend"}
        </button>
      </div>

      {selectedFriend && (
        <FormSplitBill
          onSplit={handleSplitBill}
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
