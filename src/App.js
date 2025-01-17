import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import BusinessPage from "./pages/BusinessPage";
// import HomePage from "./pages/HomePage";


function App() {
  return (
    
      <div className="App">
        <Navbar />
        {/* <HomePage /> */}
        <BusinessPage />
        <Footer />      
      </div>
   
  );
}

export default App;
