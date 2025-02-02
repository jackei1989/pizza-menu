import "./App.css";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Pizza />
      <Pizza />
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="Pizzas/spinaci.jpg" alt="pizza" />
      <h2>Pizza Spinaci</h2>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

export default App;
