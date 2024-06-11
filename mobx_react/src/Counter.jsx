import counter from "./store/counter";
import { observer } from "mobx-react-lite";

const Counter = observer(() => {
  return (
    <div className="d-flex m-5 justify-content-evenly align-items-center">
      <button
        className="btn btn-primary fs-3"
        onClick={() => counter.decrement()}
      >
        -
      </button>
      <h2>
        Count <span className="badge text-bg-secondary">{counter.total}</span>
      </h2>
      <button
        className="btn btn-primary fs-3"
        onClick={() => counter.increment()}
      >
        +
      </button>
    </div>
  );
});
export default Counter;
