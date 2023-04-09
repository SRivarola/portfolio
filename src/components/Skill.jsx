import { Tooltip as ReactTooltip } from 'react-tooltip'
import { MdArrowDropDown } from "react-icons/md"

const Skill = ({skill, children}) => {
  return (
    <div
        className='text-2xl sm:text-3xl'
        data-tooltip-id={skill}
    >
        {children}
        <ReactTooltip
            id={skill}
            className="absolute font-semibold text-base text-black bg-white px-3 py-1 rounded"
        >
            {skill}
            <div className='relative w-full h-0 flex justify-center'>
                <span className='mt-[-5px] text-xl text-white'><MdArrowDropDown /></span>
            </div>
        </ReactTooltip>
    </div>
  )
}
export default Skill