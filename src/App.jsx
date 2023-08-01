import AiDesktop from "./components/AiDesktop";
import BotBody from "./components/BotBody";
import BotSideNav from "./components/BotSideNav";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <AiDesktop>
      <Navbar />
      <BotBody>
        <BotSideNav></BotSideNav>
      </BotBody>
      <Footer />
    </AiDesktop>
  );
}

export default App;
