import { useEffect, useState } from "react"
import { motion } from 'framer-motion'
import './portfolio.css'

const ItemPortfolio = ({item}) => {

    const [isPhone, setIsPhone] = useState( window.innerWidth > 768 ? false : true )
    const mql = window.matchMedia('(max-width:768px)')
    
    const handleNavigate = (route) =>{
      window.open(route, '_blank')
    }
  
    const handleResize = (e) => {
      window.innerWidth < 900 ? setIsPhone(true) : setIsPhone(false)
    }
  
    useEffect(() => {
      handleResize()
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, []);

  return (
    <div className="cards" >
        <div className="circle" style={{'--clr': item.color}}>
            <img src={item.imgLogo} className="logo_" alt="logo del producto"/>
        </div>
        <div className="content">
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <div className="flex justify-between gap-3">
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                        color: `${item.color}`
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleNavigate(item.site)}
                >
                    Visitar sitio
                </motion.button>
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.5 },
                        color: `${item.color}`
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleNavigate(item.repo)}
                >
                    Ver código
                </motion.button>
            </div>
        </div>
        <img src={isPhone ? item.imgWide : item.imgPortada} className="product_img drop-shadow-lg" alt="foto del producto"/>
    </div>
  )
}
export default ItemPortfolio