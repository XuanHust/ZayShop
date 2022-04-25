
import './App.scss';
import Footer from './Components/Footer/footer';
import Header from './Components/Header/header';
import Nav from './Components/Navigator/nav';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react'
import Loading from './Components/Loading/loading';


function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoading(true)
    }, 100)

  }, []);

  return (
    <div className="App">

      {
        loading ?
          <>
            <Header />
            <Nav />
            <Footer />
          </>
          :
          <Loading />
      }

      <ToastContainer
        position="top-center"
        autoClose={500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
