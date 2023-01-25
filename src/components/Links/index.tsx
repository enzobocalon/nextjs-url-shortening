import Link from '../Link';
import { useContext } from 'react';
import * as S from './styles';
import { LinksContext } from '@/contexts/LinkContext';

export default function Links() {
	const { links } = useContext(LinksContext);
	return (
		<S.Container size={links.length}>
			{
				links.map(link => (
					<Link originalURL={link.originalURL} shortenedURL={link.shortenedURL} key={links.length + Math.random() * 60}/>
				))
			}
		</S.Container>
	);
}
