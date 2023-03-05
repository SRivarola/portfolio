import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-start sm:justify-center items-center sm:gap-8 sm:py-10 text-white">
      <motion.h2 
        initial={{opacity: 0, y: -50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 1}}
        className='text-center py-8 text-shadow text-3xl sm:text-4xl font-semibold'
      >
        Un poco sobre mí
      </motion.h2>
      {/* <div className="relative flex flex-col sm:flex-row justify-center gap-10 sm:gap-20">
        <motion.div 
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
          className='relative sm:w-[30%] flex justify-center sm:justify-end items-center'
        >
          <img 
            className='w-[55%] rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.702)]' 
            src='https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fperfil2.png?alt=media&token=2b8330ab-0708-43fd-b3bf-15ab349b3224' 
            alt="foto de perfil"
          />
        </motion.div>
        <motion.div
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
          className='mx-5 sm:mx-0 sm:w-[30%] text-lg mb-10 sm:mb-0'
        >
          <h3 className='font-semibold'>Me dicen Santi,</h3>
          <p className='indent-5 text-justify leading-7'>
            Soy una persona <span className="text-blue italic font-semibold">organizada,</span> con una gran <span className="text-blue italic font-semibold">motivación</span> y apasionada por el <span className="font-semibold italic">diseño</span> y la <span className="font-semibold italic">tecnología</span>. Emprendo cada desafío con ánimo y ganas de aprender, tomo cada obstáculo como una oportunidad de mejora. Me gusta <span className="text-blue italic font-semibold">trabajar en equipo</span> y alcanzar metas en común. 
          </p>
          <p className='indent-5 text-justify leading-7'>
            Siempre tuve curiosidad por la tecnología. Actualmente me encuentro desarrollando proyectos, en los que pueda aplicar los conocimientos adquiridos y estudiando <span className="font-semibold italic">desarrollo fullstack</span>, donde me encuentro adquiriendo nuevas herramientas dentro de la programación y con muchas ganas de seguir aprendiendo. Mi propósito es desarrollar mi carrera profesional en una empresa donde pueda aplicar mis conocimientos e incrementar mi experiencia en el rubro.
          </p>
        </motion.div>
      </div> */}
      <div className='relative w-[90%] sm:flex sm:justify-center sm:gap-16'>
        <motion.div 
          className='sm:w-[50%] sm:flex sm:justify-end'
          initial={{opacity: 0, x: -50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1.5}}
        >
          <img 
                className='float-left sm:float-none mr-3 sm:mr-0 w-[40%] sm:w-[35%] rounded-[5px] shadow-[0_0_10px_rgba(0,0,0,0.702)]' 
                src='https://firebasestorage.googleapis.com/v0/b/fixturewolrdcup2022.appspot.com/o/portfolio%2Fperfil2.png?alt=media&token=2b8330ab-0708-43fd-b3bf-15ab349b3224' 
                alt="foto de perfil"
              />
        </motion.div>
        <motion.div 
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 1.5, delay: 0.75}}
          className='text-justify sm:w-[50%] text-lg pr-3 sm:pr-36'
        >
          <h3 className='font-semibold'>Me dicen Santi,</h3>
          <p className='indent-5 text-justify leading-6 sm:leading-7'>
            Soy una persona <span className="text-primary italic font-semibold">organizada,</span> con una gran <span className="text-primary italic font-semibold">motivación</span> y apasionada por el <span className="font-semibold italic">diseño</span> y la <span className="font-semibold italic">tecnología</span>. Emprendo cada desafío con ánimo y ganas de aprender, tomo cada obstáculo como una oportunidad de mejora. Me gusta <span className="text-primary italic font-semibold">trabajar en equipo</span> y alcanzar metas en común. 
          </p>
          <p className='indent-5 text-justify leading-6 sm:leading-7'>
            Siempre tuve curiosidad por la tecnología. Actualmente me encuentro desarrollando proyectos, en los que pueda aplicar los conocimientos adquiridos y estudiando <span className="font-semibold italic">desarrollo fullstack</span>, donde me encuentro adquiriendo nuevas herramientas dentro de la programación y con muchas ganas de seguir aprendiendo. Mi propósito es desarrollar mi carrera profesional en una empresa donde pueda aplicar mis conocimientos e incrementar mi experiencia en el rubro.
          </p>
        </motion.div>
      </div>
    </div>
  )
}
export default About