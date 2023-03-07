import logo from "./logo.svg";
import "./App.css";
import Welcome from "./components/Welcome";
import Clock from "./components/Clock";

function App() {
  const userInfo = {
    firstName: "Akmal",
    lastName: "Kamarudin",
  };

  return (
    <>
      <Clock />
      {/* <Welcome user={userInfo} /> */}
    </>
  );
}

export default App;
