import React from "react";
import Card, { CardVariant } from "./components/Card";
import EventsExample from "./components/EventsExample";

function App() {
  return (
    <div className="App">
      <Card
        width="200px"
        height="200px"
        variant={CardVariant.outline}
        onClick={(num) => console.log("click: ", num)}
      >
        <button>Кнопка</button>
      </Card>
      <EventsExample />
    </div>
  );
}

export default App;
