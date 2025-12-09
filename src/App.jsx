import "./App.css";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Search from "./assets/components/Search";
import Products from "./assets/components/Products";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        <Search />
        <Products />
      </div>
    </>
  );
}

export default App;
