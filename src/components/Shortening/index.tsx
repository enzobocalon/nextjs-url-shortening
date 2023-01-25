import Button from '../Button';
import * as S from './styles';
import { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { LinksContext } from '@/contexts/LinkContext';

export default function Shortening() {
	const [error, setError] = useState('');
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { setLinks } = useContext(LinksContext);

	const handleSubmit = async () => {
		if (inputRef) {
			if (inputRef.current?.value) {
				await axios.post(`https://api.shrtco.de/v2/shorten?url=${inputRef.current.value}`)
					.then(response => {
						setLinks(prev => {
							const updatedData = [
								{
									originalURL: inputRef.current!.value,
									shortenedURL: response.data.result.short_link
								},
								...prev
							];
							return updatedData;
						});
					})
					.catch(error => {
						setError(error.response.data.error.split(',')[0]);
					});
				return;
			}
			setError('Please add a link');
			return;
		}
		return;
	};

	return (
		<S.Container>
			<S.Wrapper>
				<S.InputContainer>
					<S.Input placeholder='Shorten a link here...' ref={inputRef} error={error}/>
					<S.Error>{error}</S.Error>
				</S.InputContainer>
				<Button rounded='semi-rounded' onClick={handleSubmit}>
          Shorten It!
				</Button>
			</S.Wrapper>
		</S.Container>
	);
}
