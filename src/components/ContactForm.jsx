import { useState } from 'react'
import { motion } from "framer-motion"
import { alertMessage } from '../helpers/alerts'
import emailjs from '@emailjs/browser'

const ContactForm = () => {

    const [formData, setFormData] = useState({ name: '', email: '', message: ''})

    const handleChange = (e) => {
        const key = e.target.name
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {name, email, message} = formData
        if(name !== '' && email !== '' && message !== '') {
            emailjs.send('service_ajbh50b', 'template_twzekie', formData, 'v0lNPVS6GlqJPqBF8')
            alertMessage('success', 'Mensaje enviado!', '#00b843')
            setTimeout(() => {
                setFormData({ name: '', email: '', message: ''})
            }, 1500);
        } else {
            alertMessage('error', 'Error al completar formulario!', '#ff0000')
        }

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
                    name='name'
                    className="w-full bg-transparent placeholder:italic border-b-2 border-white outline-none px-2"
                    placeholder="Ingrese su nombre" 
                    type='text'
                    autoComplete='off'
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="flex flex-col">
                <label>Email:</label>
                <input 
                    name='email'
                    className="w-full bg-transparent placeholder:italic border-b-2 border-white outline-none px-2"
                    placeholder="Ingrese su email"
                    type='mail'
                    autoComplete='off'
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="flex flex-col">
                <label>Mensaje:</label>
                <textarea
                    name='message'
                    className="w-full h-28 bg-transparent placeholder:italic border-b-2 border-white outline-none px-2" 
                    placeholder="Ingrese un mensaje..."
                    autoComplete='off'
                    value={formData.message}
                    onChange={(e) => handleChange(e)}
                />
            </div>
            <div className="flex justify-center">
                <motion.button
                    whileTap={{ scale: 0.9 }} 
                    type="submit" 
                    onClick={(e) => handleSubmit(e)} 
                    className="bg-primary/60 py-1 px-6 rounded font-semibold hover:bg-primary/70"
                >
                    ENVIAR
                </motion.button>
            </div>
        </form>
    </motion.div>
  )
}
export default ContactForm