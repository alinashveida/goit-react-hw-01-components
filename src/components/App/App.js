import Profile from "../Profile/profile";
import user from "../../user.json";

import Statistics from "../Statistics/Statistics";
import statisticalData from "../../statistical-data.json";
//3
import FriendList from "../FriendList/FriendList";
import friends from "../../friends.json";
//4
import TransactionHistory from "../TransactionHistory/TransactionHistory";
import transactions from "../../transactions.json";

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory transactions={transactions} />
    </>
  );
}
