
export default function Hero() {
  return (
    <section className="font-josefin bg-light h-60v grid grid-cols-6 items-center gap-x-16">
        <div className="col-span-2 col-start-2 text-dark">
            <header className="text-6xl">Welcome to <span className="text-brand font-extrabold">PokeStox</span>!</header>
            <header className="text-4xl font-light">The best place to get a value <br /> for your pokemon card collection!</header>
        </div>
        <div className="col-span-2 text-dark flex flex-col gap-y-4">
            {/* <p className="text-3xl font-light">Simply enter in your card to find the value:</p>
            <form className="flex flex-col align-center gap-y-1" action="">
                <input type="text" className="rounded-md p-1 w-full border border-dark text-dark focus:outline-none" />
                <button className="py-2 bg-brand text-light rounded-md w-2/6" type="submit">Find Pokemon!</button>
            </form> */}
            <header className="text-4xl">So how does it work?</header>
            <p className="text-2xl">It's easy!</p>
            <p className="font-light text-lg">All you need to do is look up your card and find the price. 
            You can also save your collection to get a cumulative value for your entire collection!</p>
        </div>
    </section>
  )
}
