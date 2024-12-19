import Sidebar from "./components/Sidebar";
import Header from "./components/Dasboard";
//import 'swiper/swiper-bundle.min.css';  // Correct import for the styles


const App = () => {
  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar />
    <main className="flex-1 overflow-y-auto">
      <Header />
    </main>
  </div>
  );
};

export default App;
