import ItemPortfolio from "../components/ItemPortfolio"
import { useEffect, useState } from "react";
import { portfolio } from "../data/data"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import { motion } from 'framer-motion'
import ItemPortadas from "../components/ItemPortadas";

const Portfolio = () => {

  const [arrayPortfolio, setArrayPortfolio] = useState([])
  const [page, setPage] = useState(0)
  const [isPhone, setIsPhone] = useState( window.innerWidth > 768 ? false : true )
  const mql = window.matchMedia('(max-width:768px)')
    
  const handleNavigate = (route) =>{
    window.open(route, '_blank')
  }
  
  const handleResize = (e) => {
    window.innerWidth < 900 ? setIsPhone(true) : setIsPhone(false)
  }
  
  const handlePage = (operator) => {
    if(operator === '-'){
      page > 0 && setPage(page - 1)
    }
    if(operator === '+'){
      page < (arrayPortfolio.length - 1) && setPage(page + 1)
    }
  }
  
  useEffect(() => {
    setArrayPortfolio(portfolio)
  }, []
  )
  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, []);
  
  return (
    <div className="w-full h-screen flex flex-col pt-8 sm:pt-16 sm:justify-center justify-start items-center text-white gap-2 sm:gap-1">
        <motion.h2 
          initial={{opacity: 0, y: -50}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1}}
          className='text-center text-shadow text-3xl sm:text-4xl font-semibold'
        >
          Portfolio
        </motion.h2>
        <motion.div 
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 2.5}}
          className="pt-8 sm:pt-0 w-full flex justify-center items-center"
        >
          <button
            onClick={() => handlePage('-')}
            disabled={page === 0}
            className='hidden sm:inline'
          >
            <FaArrowAltCircleLeft className={`text-4xl ${page === 0 ? 'text-[grey]' : 'text-white'}`}/>
          </button>
          <div className="flex flex-col items-center sm:w-[740px]">
            { arrayPortfolio.length && <ItemPortfolio  item={arrayPortfolio[page]} />}
          </div>
          <button
            onClick={() => handlePage('+')}
            disabled={page === arrayPortfolio.length - 1}
            className='hidden sm:inline'
          >
            <FaArrowAltCircleRight className={`text-4xl ${page === arrayPortfolio.length - 1 ? 'text-[grey]' : 'text-white'}`}/>
          </button>
        </motion.div>
        <div className="relative flex justify-evenly w-full h-28 mt-8 sm:mt-0" >
          {
            arrayPortfolio.map((item, idx) => (
              <ItemPortadas key={item.id} item={item} page={page} idx={idx} isPhone={isPhone} setPage={setPage} />
            ))
          }
        </div>
    </div>
  )
}
export default Portfolio