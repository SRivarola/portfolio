import { IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoReact, IoLogoGithub } from "react-icons/io5"
import { SiTailwindcss, SiTypescript, SiJavascript, SiNextdotjs, SiMui } from "react-icons/si"

const Techs = () => {
  return (
    <div className="flex flex-col p-2 bg-[#000]/30 rounded-[60px]">
        <h3 className="text-center font-semibold text-md tracking-wide">SKILLS</h3>
        <div className="flex justify-center items-center gap-2 p-2 sm:p-4 sm:gap-6 text-3xl">
            <IoLogoHtml5 color="#fd3e34" />
            <IoLogoCss3 color="#1f79ff"/>
            <IoLogoSass color="#d950b3"/>
            <SiJavascript color="#d7d447"/>
            <SiTypescript color="#1f79ff"/>
            <IoLogoReact color="#5fb9ff"/>
            <SiNextdotjs />
            <SiMui color="#1f79ff"/>
            <SiTailwindcss color="#38a8ff"/>
            <IoLogoGithub />
        </div>
    </div>
  )
}
export default Techs