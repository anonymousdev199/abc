import './App.css'
import { Content } from './component/Content'
import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const body = document.querySelector("body");
    if (body && !document.getElementById("cube-script-js")) {
      const script = document.createElement("script");
      script.src = "./js/scripts.js";
      script.id = "cube-script-js";

      body.appendChild(script);
    }
  }, []);

  return (
    <div className='elementor elementor-2'>
      <div className='elementor-element elementor-element-b55a9df e-con-full e-flex e-con e-parent e-lazyloaded'>
        <Header />
        <Content />
      </div>
      <Footer />
    </div>
  )
}

export default App
