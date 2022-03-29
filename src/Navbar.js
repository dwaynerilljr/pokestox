import { BsSearch, BsTwitter, BsInstagram, BsFacebook } from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'

export default function Navbar() {
  return (
    <nav className="p-16 text-dark font-josefin text-2xl flex gap-x-6 items-center">
        <a className='hover:text-brand' href="">PokeStox</a>
        <a className='hover:text-brand' href="">About</a>
        <a className='hover:text-brand' href="">Cards</a>
        <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
            <BsSearch size={16} />
        </IconContext.Provider>
        <div className='flex gap-x-6 ml-auto items-center'>
            <a className='bg-brand border border-brand hover:bg-dark hover:border-dark text-light px-6 py-2 rounded-md' href="">Login</a>
            <a className='border border-dark text-dark hover:text-brand px-6 py-2 rounded-md' href="">Sign Up</a>
            <header>Connect</header>
            <BsTwitter size={16} />
            <BsInstagram size={16} />
            <BsFacebook size={16} />
        </div>
    </nav>
  )
}
