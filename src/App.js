import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <section>
        <Hero />
      </section>
      <section>
        <Analytics />
      </section>
      <section>
        <Newsletter />
      </section>
      <section>
        <Cards />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
