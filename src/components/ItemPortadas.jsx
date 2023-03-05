import { motion } from "framer-motion"

const ItemPortadas = ({item, page, idx, isPhone, setPage}) => {

    const delay = idx * 0.25

  return (
    <motion.div
        initial={{opacity: 0, y: 50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: .8, delay: delay}}
        className={`h-full p-1 rounded-xl ${page === idx && 'border-2 border-primary'}`}
    >
        <img
        onClick={() => setPage(idx)} 
        src={isPhone ? item.imgPortada : item.imgWide} 
        className="drop-shadow-lg h-full rounded-lg cursor-pointer" alt="foto del producto"
        />
    </motion.div>
  )
}
export default ItemPortadas