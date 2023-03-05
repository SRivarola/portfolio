import Techs from "./Techs"
import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
const Header = () => {

  return (
    <div className='flex flex-col sm:flex-row gap-8 sm:gap-0 mx-5 sm:mx-[150px]'>
        <motion.div 
            className='flex flex-col gap-8 text-xl text-center sm:text-left justify-center sm:w-[50%]'
            initial={{ x: -150, opacity: 0 }}
            animate={{ x: 0, opacity: 1, }}
            transition={{ duration: 1.5 }}
        >
            <div className="flex flex-col justify-center sm:text-5xl">
                <p>¡Hola! Soy Santiago,</p>
                <div className='flex justify-center sm:justify-start text-primary font-semibold text-shadow'>
                    <Typewriter
                        options={{
                            autoStart: true, 
                            loop: true,
                            delay: 40,
                            strings: ['Frontend React developer']
                        }}
                    />
                </div>
            </div>
            <Techs />
        </motion.div>
        <motion.div
            initial={{ x: 150, opacity: 0 }}
            animate={{ x: 0, opacity: 1, }}
            transition={{ duration: 1.5 }}
            className="sm:w-[50%] relative flex items-center justify-center">
            <img 
                className="relative w-[400px] rounded-tl-[25%] rounded-br-[25%] rounded-tr-[10%] rounded-bl-[10%] shadow-[0_0_10px_rgba(0,0,0,0.702)]"
                src='https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fperfil1.jpg?alt=media&token=9d3ca498-4161-48a6-8137-0914bfaa0c26' alt="foto de perfil" 
            />
        </motion.div>
    </div>
  )
}
export default Header