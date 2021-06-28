import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  //   const status = `${checkStatus(isOnline)}`

  return (
    <li className={css.item}>
      <span className={isOnline ? css.isOnline : css.isOffline}></span>
      <img src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

// function checkStatus(isOnline) {
//   switch (isOnline) {
//     case true:
//       return css.isOnline

//     case false:
//       return css.isOffline
//   }
// }
