import React, { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface ChildProps {
    children: ReactNode
}

const Layout:React.FC<ChildProps> = ({ children }) => {
	return (
		<div style={{ margin: `0 auto`, maxWidth: 650, padding: `0 1rem` }}>
			<Header />
			{children}
            <Footer />
		</div>
	);
};

export default Layout;
