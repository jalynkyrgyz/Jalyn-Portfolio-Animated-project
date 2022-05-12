import About from "./sections/About";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import ScrollTop from "./components/ScrollTop";


function App() {
  return (
    <div>
      <ScrollTop/>
      <Starter />
      <About />
      <Why />
      <Testimonials/>
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
