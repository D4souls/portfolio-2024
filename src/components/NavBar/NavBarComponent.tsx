function NavBar() {
	return (
		<>
			<nav className='fixed bottom-0 w-full flex flex-col justify-center items-center'>
				<div className='flex flex-row justify-between items-center w-1/3 p-2 bg-color-4 rounded-full mb-2 drop-shadow-md'>
					<a className='text-white/90 px-2 hover:bg-slate-400/50 hover:scale-110 rounded-full cursor-pointer transition ease-in-out duration-300'>
						Home
					</a>
					<a className='text-white/90 px-2 hover:bg-slate-400/50 hover:scale-110 rounded-full cursor-pointer transition ease-in-out duration-300'>
						Sobre mí
					</a>
					<a className='text-white/90 px-2 hover:bg-slate-400/50 hover:scale-110 rounded-full cursor-pointer transition ease-in-out duration-300'>
						Estudios
					</a>
					<a className='text-white/90 px-2 hover:bg-slate-400/50 hover:scale-110 rounded-full cursor-pointer transition ease-in-out duration-300'>
						Proyectos
					</a>
				</div>
			</nav>
		</>
	);
}

export default NavBar;
