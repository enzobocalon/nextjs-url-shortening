import Button from '../Button';
import * as S from './styles';

export default function Shortening() {
	return (
		<S.Container>
			<S.Wrapper>
				<S.Input placeholder='Shorten a link here...'/>
				<Button rounded='semi-rounded'>
          Shorten It!
				</Button>
			</S.Wrapper>
		</S.Container>
	);
}
