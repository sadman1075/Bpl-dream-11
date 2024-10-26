

import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Subscribe from './Components/Subscribe/Subscribe'
import { Bounce, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setcount] = useState([])

  const handledelete = (Id) => {
    const remainingadd = count.filter(cou => cou.id !== Id);
    console.log(remainingadd)
    setcount(remainingadd)
    toast.warning('Successfully Deleted to chosen player', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });


  }

  const [isactive, setisactive] = useState({
    cart: true,
    status: "cart"
  })

  const handleisactivecart = (status) => {
    if (status == "cart") {
      setisactive({
        cart: true,
        status: "cart"
      })
    }
    else {
      setisactive({
        cart: false,
        status: "selected"
      })
    }
  }




  const [totalcoins, settotalcoin] = useState(0)
  const handlefreecoin = () => {

    let total = totalcoins + 600000;
    settotalcoin(total);

    toast.success('You Are successfully Claim Credits', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  }

  const handleplayeradd = (detail) => {


    const { price } = detail

    if (totalcoins < price) {
      toast.error('Not Enough Money to buy this player.Claim some Credits', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,

      });
    }

    else if (count.find(cou => cou.id === detail.id)) {
      toast.error('Already this player Added into your team', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    else {

      let total = totalcoins - price;
      settotalcoin(total)

      let newcount = [...count, detail]
      if (newcount.length <= 6) {
        setcount(newcount)
        toast.success('You Are successfully Claim this player', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });

      }



      else {
        toast.error('Your limit of player claimed is completed', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,

        });
      }

    }
  }

  return (
    <>
      <div className='sora '>
        <div className=" lg:ml-32 lg:mr-32">
          <Header totalcoins={totalcoins}></Header>
          <Banner handlefreecoin={handlefreecoin}></Banner>
        </div>
        <div className='lg:ml-32 lg:mr-32'>
          <Main handleplayeradd={handleplayeradd} handleisactivecart={handleisactivecart} isactive={isactive} count={count} handledelete={handledelete}></Main>
        </div>
        <div className='ml-2 mr-2 lg:ml-32 lg:mr-32'>
          <Subscribe></Subscribe>
        </div>
        <Footer></Footer>

      </div>
    </>
  )
}

export default App
