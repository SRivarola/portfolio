import { IoLogoHtml5, IoLogoCss3, IoLogoSass, IoLogoReact, IoLogoGithub } from "react-icons/io5"
import { SiTailwindcss, SiTypescript, SiJavascript, SiNextdotjs, SiVtex } from "react-icons/si"
import Skill from "./Skill"

const Techs = () => {
  return (
    <div className="flex flex-col p-2 bg-black/30 rounded-[60px]">
        <h3 className="text-center font-semibold text-md tracking-wide">SKILLS</h3>
        <div className="flex justify-center items-center gap-2 p-2 sm:p-4 sm:gap-6">
          <Skill skill='HTML5' >
            <IoLogoHtml5 color="#fd3e34" />
          </Skill>
          <Skill skill='CSS3'>
            <IoLogoCss3 color="#1f79ff" />
          </Skill>
          <Skill skill='SASS' >
            <IoLogoSass color="#d950b3" />
          </Skill>
          <Skill skill='JavaScript'>
            <SiJavascript color="#d7d447" />
          </Skill>
          <Skill skill='TypeScript'>
            <SiTypescript color="#1f79ff"/>
          </Skill>
          <Skill skill='React JS/Native'>
            <IoLogoReact color="#5fb9ff"/>
          </Skill>
          <Skill skill='NextJS'>
            <SiNextdotjs />
          </Skill>
          <Skill skill='VTEX'>
            <SiVtex color="#f61964" />
          </Skill>
          <Skill skill='TailwidCss'>
            <SiTailwindcss color="#38a8ff"/>
          </Skill>
          <Skill skill='GitHub'>
            <IoLogoGithub />
          </Skill>
        </div>
    </div>
  )
}
export default Techs