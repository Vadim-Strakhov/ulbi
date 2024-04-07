import { FC } from "react";
import { useState, useEffect } from "react";
import { IUser } from "../types/types";
import UserItem from "./UserItem";
import axios from "axios";
import List from "./List";
import { useHistory } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useHistory();

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      // console.log(response.data);
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <UserItem
          onClick={(user) => history.push("/users/" + user.id)}
          user={user}
          key={user.id}
        />
      )}
    />
  );
};
export default UserPage;
