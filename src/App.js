import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import AboutPage from "./pages/AboutPage";
// import BusinessPage from "./pages/BusinessPage";
// import UserGuidePage from "./pages/UserGuidePage";
// import HomePage from "./pages/HomePage";


function App() {
  return (
    
      <div className="App">
        <Navbar />
        {/* <HomePage /> */}
        {/* <BusinessPage /> */}
        {/* <UserGuidePage /> */}
        <AboutPage />
        <Footer />      
      </div>
   
  );
}

export default App;
