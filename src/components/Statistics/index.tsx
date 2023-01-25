import * as S from './styles';
import brandRecognition from '../../assets/icon-brand-recognition.svg';
import detailedRecords from '../../assets/icon-detailed-records.svg';
import fullyCustomizable from '../../assets/icon-fully-customizable.svg';

import Card from '../Card';
import Links from '../Links';

export default function Statistics() {
	return (
		<S.Container>
			<S.Wrapper>
				<Links />
				<S.Title>
          Advanced Statistics
				</S.Title>
				<S.Description>
          Track how your links are performing across the web with our advanced statistics dashboard.
				</S.Description>

				<S.Cards>
					<Card
						title="Brand Recognition"
						description="Boost your brand recognition with each click.
          Generic links don’t mean a thing.
          Branded links help instil confidence in your content."
						image={brandRecognition.src}/>
					<Card
						title="Detailed Records"
						description="Gain insights into who is clicking your links.
            Knowing when and where people engage with your content helps inform better decisions."
						image={detailedRecords.src}/>
					<Card
						title="Fully Customizable"
						description="Improve brand awareness and content discoverability through customizable links,
            supercharging audience engagement."
						image={fullyCustomizable.src}/>
				</S.Cards>

			</S.Wrapper>
		</S.Container>
	);
}
