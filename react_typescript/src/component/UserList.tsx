import { IUser } from "../types/types";
import UserItem from "./UserItem";
import { FC } from "react";

interface UserListProps {
  users: IUser[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {/* {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))} */}
    </div>
  );
};
export default UserList;
