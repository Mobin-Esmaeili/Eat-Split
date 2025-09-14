import React from 'react'

const Friend = ({friend , onSelection ,selectedFriend}) => {

    const isSelected = selectedFriend?.id === friend.id
  return (
    <li className={isSelected ? 'selected' : ''}>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && <p className="red">{friend.name} owes you ${Math.abs(friend.balance)}</p>}
        {friend.balance > 0 && <p className="green"> You owe {friend.name}  ${Math.abs(friend.balance)}</p>}
        {friend.balance === 0 && <p>You and {friend.name} are equal</p>}
        <button onClick={() => onSelection(friend)} className="button">{isSelected ? 'Close' : 'Select'}</button>
    </li>
  )
}

export default Friend