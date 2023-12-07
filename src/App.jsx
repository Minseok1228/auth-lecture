import { useState } from "react";
import Pages from "./pages";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState();
  return (
    <>
      <Pages />
    </>
  );
}

export default App;
