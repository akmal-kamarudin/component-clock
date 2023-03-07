import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";

function App() {
  const userInfo = {
    firstName: "World",
    lastName: "friends",
  };

  return (
    <>
      <Welcome user={userInfo} />
      <Clock />
    </>
  );
}

export default App;
