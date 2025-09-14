import Friend from './Friend';



const FriendsList = ({friends , onSelection , selectedFriend}) => {
  return (
    <>
      <ul>
        {friends.map((friend) => (
          <Friend onSelection={onSelection} selectedFriend={selectedFriend} key={friend.id} friend={friend}/>
        ))}
      </ul>
    </>
  );
};

export default FriendsList;
