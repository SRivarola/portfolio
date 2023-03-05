import ItemPortfolio from "../components/ItemPortfolio"
import { useEffect, useState } from "react";
import { portfolio } from "../data/data"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
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
    <div className="w-full h-screen flex flex-col pt-8 sm:pt-0 sm:justify-center justify-start items-center text-white gap-2">
        <h2 className='text-center text-shadow text-3xl sm:text-4xl font-semibold'>Portfolio</h2>
        <div className="w-full flex justify-center items-center">
          <button
            onClick={() => handlePage('-')}
            disabled={page === 0}
            className='hidden sm:inline'
          >
            <FaArrowAltCircleLeft className={`text-4xl ${page === 0 ? 'text-[grey]' : 'text-white'}`}/>
          </button>
          <div className="flex flex-col items-center">
            { arrayPortfolio.length && <ItemPortfolio  item={arrayPortfolio[page]} />}
          </div>
          <button
            onClick={() => handlePage('+')}
            disabled={page === arrayPortfolio.length - 1}
            className='hidden sm:inline'
          >
            <FaArrowAltCircleRight className={`text-4xl ${page === arrayPortfolio.length - 1 ? 'text-[grey]' : 'text-white'}`}/>
          </button>
        </div>
        <div className="relative flex justify-evenly w-full h-28 mt-5 sm:mt-0">
          {
            arrayPortfolio.map((item, idx) => (
              <div className={`h-full p-1 rounded-xl ${page === idx && 'border-2 border-primary'}`}>
                <img
                  onClick={() => setPage(idx)} 
                  src={isPhone ? item.imgPortada : item.imgWide} 
                  className="drop-shadow-lg h-full rounded-lg cursor-pointer" alt="foto del producto"
                />
              </div>
            ))
          }
        </div>
    </div>
  )
}
export default Portfolio