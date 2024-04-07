import { FC, useState, useEffect } from "react";
import axios from "axios";
import { IUser } from "../types/types";
import { useParams, useHistory } from "react-router-dom";

interface UserItemPageParams {
  id: string;
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useHistory();

  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      // console.log(response.data);
      setUser(response.data);
    } catch (e) {
      alert(e);
    }
  }

  return (
    <div>
      <button onClick={() => history.push("/users")} style={{ marginTop: 10 }}>
        Назад
      </button>
      <h1>Страница пользователя {user?.name} </h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};
export default UserItemPage;
