import About from "./sections/About";
import Starter from "./sections/Starter";
import Why from "./sections/Why";
import Testimonials from "./sections/Testimonials";
import Blogs from "./sections/Blogs";
import Footer from "./sections/Footer";
import ScrollTop from "./components/ScrollTop";
import {motion} from "framer-motion";


function App() {
  return (
    <motion.div ititial="hidden" animate="show">
      <ScrollTop/>
      <Starter />
      <About />
      <Why />
      <Testimonials/>
      <Blogs />
      <Footer />
    </motion.div>
  );
}

export default App;
