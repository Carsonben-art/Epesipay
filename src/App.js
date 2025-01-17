import Footer from "./components/Footer";
import Navbar from "./components/Nav";
import BusinessPage from "./pages/BusinessPage";
import HomePage from "./pages/HomePage";

import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        {/* <HomePage /> */}
        <BusinessPage />
        <Footer />      
      </div>
    </ChakraProvider>
  );
}

export default App;
