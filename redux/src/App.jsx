import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  addCustomerAction,
  removeCustomerAction,
} from "./store/customerReducer";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cash.cash);
  const customers = useSelector((state) => state.customers.customers);

  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash });
  };
  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash });
  };

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    };
    dispatch(addCustomerAction(customer));
  };

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id));
  };

  return (
    <div className="App">
      <div className="cash">Баланс: {cash}</div>
      <div className="btns">
        <button onClick={() => addCash(Number(prompt()))}>
          Пополнить счет
        </button>

        <button onClick={() => getCash(Number(prompt()))}>
          Снять со счета
        </button>
      </div>
      <div className="btns">
        <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
        <button onClick={() => getCash(Number(prompt()))}>
          Удалить клиента
        </button>
      </div>
      <div className="customers">
        {customers.length > 0 ? (
          <div style={{ fontSize: "2rem" }}>
            {" "}
            Клиенты:
            {customers.map((customer) => (
              <div
                onClick={() => removeCustomer(customer)}
                style={{
                  fontSize: "2rem",
                  border: "1px solid black",
                  padding: "10px",
                  margin: "15px",
                }}
              >
                {customer.name}
              </div>
            ))}
          </div>
        ) : (
          <div style={{ fontSize: "2rem", marginTop: 20 }}>
            Клиенты отсутствуют!
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
