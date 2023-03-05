import { motion } from "framer-motion"

const ContactForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.form[0].value)
        console.log(e.target.form[1].value)
        console.log(e.target.form[2].value)
    }

  return (
    <motion.div  
        initial={{opacity: 0, x: 50}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 1, delay: 0.5}}
        className="flex w-full sm:w-[50%] h-[50vh] sm:h-fit sm:px-20"
    >
        <form className="flex flex-col justify-between p-2 w-full gap-5 sm:gap-10 text-lg border-2 border-primary rounded-lg">
            <div className="flex flex-col gap-2">
                <label>Nombre:</label>
                <input
                    className="w-full bg-transparent placeholder:italic border-b-2 border-white outline-none px-2"
                    placeholder="Ingrese su nombre" 
                    type='text'
                />
            </div>
            <div className="flex flex-col">
                <label>Email:</label>
                <input 
                    className="w-full bg-transparent placeholder:italic border-b-2 border-white outline-none px-2"
                    placeholder="Ingrese su email"
                    type='mail'
                />
            </div>
            <div className="flex flex-col">
                <label>Mensaje:</label>
                <textarea
                    className="w-full h-28 bg-transparent placeholder:italic border-b-2 border-white outline-none px-2" 
                    placeholder="Ingrese un mensaje..."
                />
            </div>
            <div className="flex justify-center">
                <button type="submit" onClick={(e) => handleSubmit(e)} className="bg-primary/60 py-1 px-6 rounded font-semibold">ENVIAR</button>
            </div>
        </form>
    </motion.div>
  )
}
export default ContactForm