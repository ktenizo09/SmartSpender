import NavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage";
import BudgetCalculator from "./components/BudgetCalculator";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" Component={LandingPage} />
          <Route path="/sign-in" />
          <Route path="/sign-up" />
          <Route path="/budget-calculator" Component={BudgetCalculator}/>
          <Route path="/job-portal" />
          <Route path="/forum" />
          <Route path="/about" />
          <Route path="/contact" />
          <Route path="/account/:id" />
        </Routes>
      </Router>
    </>
  )
}

export default App
