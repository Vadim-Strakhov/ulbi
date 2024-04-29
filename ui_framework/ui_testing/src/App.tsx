import { MyButton, MyInput } from "ui_kit_test_lib";

const App = () => {
  return (
    <div>
      <MyButton color={"RED"}>Button</MyButton>
      <MyInput
        big={true}
        label="Инпут"
        placeholder="Введите текст..."
      ></MyInput>
    </div>
  );
};
export default App;
