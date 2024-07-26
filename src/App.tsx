import { createSignal, createEffect } from 'solid-js'
import { Header, Main, Footer } from "./components";
import { chevronUp } from './assets/images';

function App() {
  const [scrollY, setScrollY] = createSignal(0)

  const handleScroll = () => {
    const scrollPosition = window.scrollY; // => scroll position
    setScrollY(scrollPosition);
  };

  createEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });


  return (
    <>
      <Header scrollY={scrollY()} />
      <Main />
      <Footer />

      <a
        href="#top"
        class={`back-top-btn ${scrollY() > 100 && "active"}`}
      >
        <img src={chevronUp} alt="" class="ion-icon" aria-hidden="true" />
      </a>
    </>
  );
}

export default App;
