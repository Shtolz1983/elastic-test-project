import { FC } from 'react';
import { IUser } from '../models/IUser';
import UserCard from './UserCard';


interface UserCardListProps {
  users: IUser[];
}

const UserCardList: FC<UserCardListProps> = ({ users }) => {
  return (
    <div className="card-container">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserCardList;
