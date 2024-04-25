import Food from "./Food.jsx";
import Students from "./Students.jsx";
import Greeting from "./Greeting.jsx"; // Corrected import statement


function App() {
  return (
    <>
      <Food />
      <Students name="Rohit Sharama" age="64" />
      <Greeting isLoggedIn={true} username="Sanooj" /> {/* Corrected component name */}
    </>
  );
}

export default App;
