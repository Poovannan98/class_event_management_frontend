import "./App.css";
import Login from "./Components/Authentication/Login";
// import background from "./images/elearning.jpg";

function App() {
  return (
    <>
      {/* <div
        style={{
          backgroundImage: `url(${background})`,
          height: "100vh",
          marginTop: "-35px",
          // fontSize: "50px",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1>Poo Class Event Management for Students</h1>
      </div> */}
      <Login/>
    </>
  );
}

export default App;
