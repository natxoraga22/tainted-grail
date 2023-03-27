import { useEffect } from 'react';
import Layout from '@/components/layout';

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Font Awesome */
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;


export default function App({ Component, pageProps }) {
	useEffect(() => {
		import('bootstrap/dist/js/bootstrap.bundle.min.js');
	}, []);

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
