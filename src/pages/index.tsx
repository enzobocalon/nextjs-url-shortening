import Header from '@/components/Header';
import theme from '../styles/theme';
import { GlobalStyle } from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import Hero from '@/components/Hero';
import Statistics from '@/components/Statistics';
import Shortening from '@/components/Shortening';
import GetStarted from '@/components/GetStarted';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Hero />
			<Shortening />
			<Statistics />
			<GetStarted />
			<Footer />
			<GlobalStyle />
		</ThemeProvider>
	);
}
