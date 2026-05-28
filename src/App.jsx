import Counter from "./components/Counter";
import Invite from "./pages/Invite";
import { UserProvider } from "./context/userContext";
import { LangProvider } from "./context/LangContext";

function App() {
  return (
    <UserProvider>
      <LangProvider>
        <Invite />
        <Counter />
      </LangProvider>
    </UserProvider>
  );
}

export default App;
