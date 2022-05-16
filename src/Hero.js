import stock from './stock.svg'
import { GrCaretDown } from 'react-icons/gr'

export default function Hero() {
  return (
    <section className="font-josefin bg-light h-60v grid grid-cols-8 items-center gap-x-4">
        <div className="col-span-3 col-start-2 text-dark flex flex-col gap-y-3">
            <header className="text-6xl">Welcome to <span className="text-brand font-extrabold">Pok&#233;Stox</span>!</header>
            <header className="text-4xl font-light">The best place to get a value <br /> for your Pok&#233;mon card collection!</header>
            <div className='flex gap-x-2 text-2xl'>
              <a href="" className="py-2 px-4 bg-light self-start border border-brand hover:bg-brand hover:text-light text-brand rounded-md">Try it</a>
              <a href="" className="py-2 px-4 bg-light border hover:bg-dark hover:text-light border-dark text-dark rounded-md">How does it work?</a>
            </div>
        </div>
        <div className="col-span-3 text-light flex flex-col gap-y-4">
            {/* <p className="text-3xl font-light">Simply enter in your card to find the value:</p>
            <form className="flex flex-col align-center gap-y-1" action="">
                <input type="text" className="rounded-md p-1 w-full border border-dark text-dark focus:outline-none" />
                <button className="py-2 bg-brand text-light rounded-md w-2/6" type="submit">Find Pokemon!</button>
            </form> */}
            <img className='w-full' src={stock} alt="" />
        </div>
    </section>
  )
}
