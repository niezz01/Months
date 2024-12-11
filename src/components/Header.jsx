export default function Header() {
    return (
        <div className='bg-hatter h-56 relative p-0 m-auto bg-cover'>
            <p className='py-5 px-32 text-8xl text-white font-serif'>Hatter</p>
            <nav className=' bg-white bg-opacity-50 inline-block text-white absolute bottom-0 left-0 right-0 m-0'>
                <ul className='m-0 shadow-sm'>
                    <li className='inline'><a href="#osz" className="inline-block p-4 text-orange-400 text-2xl uppercase font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow hover:bg-orange-500 hover:text-white">Ősz</a></li>
                    <li className='inline'><a href="#tel" className="inline-block p-4 text-orange-400 text-2xl uppercase font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow hover:bg-orange-500 hover:text-white">Tél</a></li>
                    <li className='inline'><a href="#tavasz" className="inline-block p-4 text-orange-400 text-2xl uppercase font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow hover:bg-orange-500 hover:text-white">Tavasz</a></li>
                    <li className='inline'><a href="#nyar" className="inline-block p-4 text-orange-400 text-2xl uppercase font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:drop-shadow hover:bg-orange-500 hover:text-white">Nyár</a></li>
                </ul>
            </nav>
        </div>
    )
}