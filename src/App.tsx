import "tailwindcss/tailwind.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import FormBuilderTest from "./testComponent/FormBuilderTest";
 
function App() {
  return (
    <Router>
      <Routes>
       
        <Route
          path="/"
          element={
            <FormBuilderTest
              data={[  ]}
            />
          }
        />
        <Route
          path="/home"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
