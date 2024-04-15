import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { numberSlice } from "./store/reducers/NumberSlice";
import { useEffect } from "react";
import { fetchUsers } from "./store/reducers/ActionsCreators";
import PostContainer from "./components/PostContainer";
import PostContainer2 from "./components/PostContainer_2";

const App = () => {
  const dispatch = useAppDispatch();

  const { users, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  const { count } = useAppSelector((state) => state.numberReducer);
  const { increment, decrement } = numberSlice.actions;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div>
      <h2 className="text-center m-5">
        Счетчик <span className="badge text-bg-secondary">{count}</span>
      </h2>
      <div>
        <div className="d-flex m-5 justify-content-around">
          <button
            className="btn btn-primary m-1"
            onClick={() => dispatch(increment(1))}
          >
            Инкремент
          </button>
          <button
            className="btn btn-primary m-1"
            onClick={() => dispatch(decrement(1))}
          >
            Декремент
          </button>
        </div>
      </div>
      <div className="m-5">
        {isLoading && (
          <div
            className="spinner-border text-secondary"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          ></div>
        )}
        {error && <h1>{error}</h1>}
        <ul className="list-group list-group-numbered w-50">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              {user.name} <br /> {user.email}
            </li>
          ))}
        </ul>
      </div>
      <div className="d-flex">
        <PostContainer />
        {/* <PostContainer2 /> */}
      </div>
    </div>
  );
};
export default App;
