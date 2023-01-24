import * as S from './styles';

interface Props {
  title: string,
  description: string,
  image: string
}

export default function Card({title, description, image}: Props) {
	return (
		<S.Container>
			<S.IconContainer>
				<img src={image} />
			</S.IconContainer>
			<S.Content>
				<S.Title>
					{title}
				</S.Title>
				<S.Description>
					{description}
				</S.Description>
			</S.Content>
		</S.Container>
	);
}
