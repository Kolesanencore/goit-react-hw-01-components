import css from '../FriendList/FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ items }) => {
  return (
    <ul className={css.list}>
      {items.map(item => (
        <li className={css.item} key={item.id}>
          <img src={item.avatar} alt={item.alt} />
          <p className={css.name}>{item.name}</p>
          <span className={item.isOnline ? css.true : css.false}></span>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.string,
    })
  ),
};

export default FriendList;