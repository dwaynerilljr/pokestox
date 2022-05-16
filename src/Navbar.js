import { BsSearch, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export default function Navbar() {
  return (
    <nav className="p-16 text-dark font-josefin text-2xl flex gap-x-6 items-center">
        <a className='hover:text-brand' href="">Pok&#233;Stox</a>
        <a className='hover:text-brand' href="">About</a>
        <a className='hover:text-brand' href="">Cards</a>
        <BsSearch size={16} />
        <div className='flex gap-x-6 ml-auto text-lg items-center'>
            <a className='bg-brand border border-brand hover:bg-light hover:text-brand text-light px-6 py-2 rounded-md' href="">Login</a>
            <a className='bg-dark text-light hover:bg-light hover:text-dark border border-dark px-6 py-2 rounded-md' href="">Sign Up</a>
        </div>
    </nav>
  )
}
