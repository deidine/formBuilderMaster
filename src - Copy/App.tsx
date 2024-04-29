import "tailwindcss/tailwind.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Home
        data={[
          {
            name: "password",
            placeholder: "",
            label: "password",
            type: "password",
          },
          {
            name: "username",
            placeholder: "",
            label: "username",
            type: "text",
          },
          { name: "dd", placeholder: "", element: "textarea" },
          {
            name: "email",
            required: true,
            placeholder: "email",
            type: "email",
            label: "email",
          },
          {
            name: "exampleInput",
            element: "select",
            values: [
              { displayValue: "Dede", value: "dede" },
              { displayValue: "Dedsse", value: "dedssse" },
            ],
          },
        ]}
      />
    </Router>
  );
}

export default App;
