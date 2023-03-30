import Head from 'next/head';
import Link from 'next/link';


export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
			</Head>
			<Navbar/>
			<main>
				{children}
			</main>
		</>
	);
}


export function Navbar() {
	return (
		<nav className="navbar navbar-expand bg-light">
			<div className="container">
				<span className="navbar-brand h1 mb-0">Tainted Grail</span>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						<Link className="nav-link" href="/full-story">Historia completa</Link>

						<div className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Capítulos</a>
							<div className="dropdown-menu">
								<Link className="dropdown-item" href="/chapters/01">Capítulo 1</Link>
								<Link className="dropdown-item" href="/chapters/02">Capítulo 2</Link>
								<Link className="dropdown-item" href="/chapters/03">Capítulo 3</Link>
							</div>
						</div>

						<div className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Apéndices</a>
							<div className="dropdown-menu">
								<Link className="dropdown-item" href="/">Historia principal</Link>
								<Link className="dropdown-item" href="/">Tareas</Link>
								<Link className="dropdown-item" href="/">Los héroes de Cuanacht</Link>
								<Link className="dropdown-item" href="/">Los caballeros de la Mesa Redonda</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}