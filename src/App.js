import Search from "./components/Search";
import Info from './components/Info';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { useState } from 'react'
import Footer from './components/Footer';



function App() {
  const [button, setButton] = useState(false);
  window.onscroll = () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
      setButton(true);
    }
  }
  return (

    <Provider store={store}>
      <div className="start">
        <Search />

      </div>

      <Info />
      {button ? <a href="#start" className="button">UP</a> : null}

      <Footer />


    </Provider>



  );
}

export default App;
