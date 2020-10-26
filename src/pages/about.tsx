import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';

const about: React.FC = () => {
	return (
		<Layout>
			<div style={{ color: `teal` }}>
				<h1>About Gatsby</h1>
				<p>Such wow. Very React.</p>
			</div>
		</Layout>
	);
};

export default about;
