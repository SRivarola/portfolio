import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs"
import { SiGmail } from 'react-icons/si'
import { motion } from "framer-motion"
import { CopyToClipboard } from 'react-copy-to-clipboard'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ContactForm from "../components/ContactForm"

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
    <div className="h-screen w-screen flex flex-col justify-start items-evenly text-white pt-5 sm:pt-28">
      <motion.h2 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className="text-center text-3xl text-shadow sm:text-4xl font-semibold"
      >
        Contacto
      </motion.h2>
      <div className="flex flex-col sm:flex-row p-6 sm:p-8 gap-5 w-full">
        <div className="flex flex-col w-full sm:w-[50%] p-2 sm:gap-10 ">
          <motion.div 
            initial={{opacity: 0, x: -50}}
            animate={{opacity: 1, x: 0}}
            transition={{duration: 1, delay: 0.5}}
            className="flex justify-center flex-wrap sm:flex-nowrap gap-6 sm:gap-10"
          >
            <motion.button
              className="text-4xl"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleNavigate('https://api.whatsapp.com/send?phone=+541160057411&text=Hola.%20Vi%20tu%20portfolio.')}
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
              onClick={() => handleNavigate('https://api.whatsapp.com/send?phone=+541160057411&text=Hola.%20Vi%20tu%20portfolio.')}
            >
              <SiGmail />
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
          </motion.div>
          <motion.div
            initial={{opacity: 0, y: 50}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, delay: 1}}
            className="hidden w-full sm:flex justify-center"
          >
            <img
              className="w-[300px]" 
              src="https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fqrwhatsapp.png?alt=media&token=17d1bf4d-2480-455f-9b0b-4031f89c5940" alt='qr whatsapp' 
            />
          </motion.div>
        </div>
        <ContactForm />
      </div>
    </div>
  )
}
export default Contact