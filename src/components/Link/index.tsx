import Button from '../Button';
import * as S from './styles';
import { useState } from 'react';

interface Props {
  originalURL: string,
  shortenedURL: string
}

export default function Link({originalURL, shortenedURL}: Props) {
	const [copy, setCopy] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(shortenedURL);
		setCopy(true);
	};

	return (
		<S.Container>
			<S.OriginalURL>
				<span>{originalURL}</span>
			</S.OriginalURL>
			<S.ShortenedURL>
				<span>{shortenedURL}</span>
				{
					copy ? (
						<Button rounded='semi-rounded' active={copy}>
              Copied!
						</Button>
					) : (
						<Button rounded='semi-rounded' onClick={handleCopy}>
              Copy
						</Button>
					)
				}
			</S.ShortenedURL>
		</S.Container>
	);
}
