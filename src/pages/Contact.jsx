import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs"
import { motion } from "framer-motion"
import { GoMail } from "react-icons/go"
import { AiFillCopy } from "react-icons/ai"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Contact = () => {
  
  const MySwal = withReactContent(Swal)

  const handleNavigate = (route) =>{
    window.open(route, '_blank')
  }

  const handleCopy = () => {
    MySwal.fire({
      title: <p>Copiado</p>,
      color: '#000',
      icon: 'success',
      iconColor: '#17962a',
      background: '#fff',
      showConfirmButton: false,
      toast: true,
      timer: '1500',
      timerProgressBar: true,
      position: 'bottom-end',
    })
  }

  return (
    <div className="h-screen w-screen flex flex-col justify-start items-evenly text-white pt-28">
      <h2 className="text-center text-3xl text-shadow sm:text-4xl font-semibold">Contacto</h2>
      <div className="flex p-10 gap-5 w-full">
        <div className="flex flex-col w-[50%] gap-10">
          <div className="flex justify-center gap-10">
            <motion.button
              className="text-4xl"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigate('https://api.whatsapp.com/send?phone=+5460057411&text=Hola.%20Vi%20tu%20portfolio.')}
            >
              <BsWhatsapp />
            </motion.button>
            <motion.button
              className="text-4xl"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigate('https://www.linkedin.com/in/santiago-rivarola/')}
            >
              <BsLinkedin />
            </motion.button>
            <motion.button
              className="text-4xl"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },

              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigate('https://github.com/SRivarola')}
            >
              <BsGithub />
            </motion.button>
            <a className="bg-primary/60 py-2 px-6 rounded font-semibold text-xl hover:bg-primary/70" href="./Santiago Rivarola CV.pdf" download>Descargar CV</a>
          </div>
          <div className="w-full flex justify-center">
            <img
              className="w-[300px]" 
              src="https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fqrwhatsapp.png?alt=media&token=17d1bf4d-2480-455f-9b0b-4031f89c5940" alt='qr whatsapp' 
            />
          </div>
        </div>
        <div  className="bg-white/10 w-[50%]"></div>
      </div>
      {/* <div className="flex gap-20">
        <motion.button
          className="text-4xl"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.8 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate('https://www.linkedin.com/in/santiago-rivarola/')}
        >
          <BsLinkedin />
        </motion.button>
        <motion.button
          className="text-4xl"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.8 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={() => handleNavigate('https://github.com/SRivarola')}
        >
          <BsGithub />
        </motion.button>
      </div>
      <a className="bg-primary/60 py-2 px-6 rounded font-semibold text-xl hover:bg-primary/70" href="./Santiago Rivarola CV.pdf" download>Descargar CV</a>
      <div>
        <img
          className="w-[300px]" 
          src="https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fqrwhatsapp.png?alt=media&token=17d1bf4d-2480-455f-9b0b-4031f89c5940" alt='qr whatsapp' 
        />
      </div>
      <div className="flex gap-8 items-center justify-center text-4xl">
          <GoMail />
          <p className="text-xl">srivarola@gmail.com</p>
          <button onClick={handleCopy} className="text-xl">
            <CopyToClipboard text='srivarola@gmail.com'>
              <AiFillCopy />
            </CopyToClipboard>
          </button>
      </div> */}
    </div>
  )
}
export default Contact