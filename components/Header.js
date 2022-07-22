import Link from 'next/link';
import Toggle from './Toggle';
import { IconContext } from 'react-icons';
import { AiOutlineGithub } from "react-icons/ai";

export default function Header() {
  return (
    <header>
      <div className="bg-primary p-4 mb-8 flex justify-center items-center font-['Montserrat']">
        <Link href="/" passHref>
          <h1 className="font-bold text-neutral-content text-lg sm:text-xl md:text-3xl pr-8 hover:opacity-80 transition-opacity ml-auto">HackGwinnett Blog</h1>
        </Link>
        <Toggle />
        <IconContext.Provider value={{}}>
          <a className="ml-auto" href="https://github.com/hackgwinnett/blog" target="_blank">
            <AiOutlineGithub className="fill-neutral-content w-8 h-8" />
          </a>
        </IconContext.Provider>
      </div>
    </header>
  )
}
