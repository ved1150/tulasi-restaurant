import React from "react";
import Header from "./Component/Layout/Header";
// import MealsSummary from "./Component/Meals/MealsSummary";
import Meals from "./Component/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}
export default App;