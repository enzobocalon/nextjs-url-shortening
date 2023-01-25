import * as S from './styles';

import hero from '../../assets/illustration-working.svg';
import Button from '../Button';

export default function Hero() {
	return (
		<S.Container>
			<S.Content>
				<S.Title>
          More than just shorter links
				</S.Title>
				<S.Subtitle>
          Build your brand’s recognition and get detailed insights on how your links are performing.
				</S.Subtitle>
				<Button>
          Get Started
				</Button>
			</S.Content>
			<S.Image>
				<img src={hero.src} alt='hero working person'/>
			</S.Image>
		</S.Container>
	);
}
