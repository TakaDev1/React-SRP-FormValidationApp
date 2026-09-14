import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col bg-gray-800 justify-center items-center">
        <h1>React-SRP-FormValidationApp</h1>
        <UserForm />
      </div>
    </>
  );
}

export default App;
