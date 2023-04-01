import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';


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
	const router = useRouter();
	const currentRoute = router.pathname;

	const chapters = ['01', '02', '03B', '03A', '04A', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'];

	return (
		<nav className="navbar navbar-expand bg-light sticky-top">
			<div className="container">
				<span className="navbar-brand h1 mb-0">Tainted Grail</span>

				<div className="navbar-collapse">
					<div className="navbar-nav">
						{/* Full story */}
						<Link className={'nav-link' + (currentRoute == '/full-story' ? ' active' : '')} href="/full-story">
							Historia completa
						</Link>

						{/* Chapters */}
						<div className="nav-item dropdown">
							<a className={'nav-link dropdown-toggle' + (currentRoute.startsWith('/chapters/') ? ' active' : '')} 
							   href="#" role="button" data-bs-toggle="dropdown">
								Capítulos
							</a>
							<div className="dropdown-menu">
								{chapters.map((chapterId) => {
									return (
										<Link
											key={chapterId}
											className={'dropdown-item' + (currentRoute == `/chapters/${chapterId}` ? ' active' : '')}
											href={`/chapters/${chapterId}`}
										>
											Capítulo {chapterId.replace(/^0+/, '')}
										</Link>
									);
								})}
							</div>
						</div>

						{/* Appendices */}
						<div className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Apéndices</a>
							<div className="dropdown-menu">
								{/*
								<NavLink className="dropdown-item" activeClassName="active" to="/">Historia principal</NavLink>
								<NavLink className="dropdown-item" activeClassName="active" to="/">Tareas</NavLink>
								<NavLink className="dropdown-item" activeClassName="active" to="/">Los héroes de Cuanacht</NavLink>
								<NavLink className="dropdown-item" activeClassName="active" to="/">Los caballeros de la Mesa Redonda</NavLink>
								*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}