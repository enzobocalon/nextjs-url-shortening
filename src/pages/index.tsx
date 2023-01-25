import Header from '@/components/Header';
import theme from '../styles/theme';
import { GlobalStyle } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Shortening from '@/components/Shortening';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';
import LinksProvider from '@/contexts/LinkContext';
import Head from 'next/head';

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>URL Shortening</title>
				<meta name='description' content='URL Shortening' />
				<meta property='og:title' content='URL Shortening' />
				<meta
					property='og:description'
					content='URL Shortening from Front End Mentor'
				/>
				<meta property='og:type' content='website' />
			</Head>
			<LinksProvider>
				<Header />
				<Hero />
				<Shortening />
				<Statistics />
				<GetStarted />
				<Footer />
				<GlobalStyle />
			</LinksProvider>
		</ThemeProvider>
	);
}
