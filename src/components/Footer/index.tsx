import * as S from './styles';
import logo from '../../assets/logo.svg';

import facebook from '../../assets/icon-facebook.svg';
import twitter from '../../assets/icon-twitter.svg';
import pinterest from '../../assets/icon-pinterest.svg';
import instagram from '../../assets/icon-instagram.svg';

export default function Footer() {
	return (
		<S.Container>
			<S.Wrapper>
				<img src={logo.src} alt='logo'/>
				<S.MenuColumn>
					<S.MenuTitle>
            Features
					</S.MenuTitle>
					<S.MenuItem>
            Link Shortening
					</S.MenuItem>
					<S.MenuItem>
            Branded Links
					</S.MenuItem>
					<S.MenuItem>
            Analytics
					</S.MenuItem>
				</S.MenuColumn>
				<S.MenuColumn>
					<S.MenuTitle>
            Resources
					</S.MenuTitle>
					<S.MenuItem>
            Blog
					</S.MenuItem>
					<S.MenuItem>
            Developers
					</S.MenuItem>
					<S.MenuItem>
            Support
					</S.MenuItem>
				</S.MenuColumn>
				<S.MenuColumn>
					<S.MenuTitle>
            Company
					</S.MenuTitle>
					<S.MenuItem>
            About
					</S.MenuItem>
					<S.MenuItem>
            Our Team
					</S.MenuItem>
					<S.MenuItem>
            Careers
					</S.MenuItem>
					<S.MenuItem>
            Contact
					</S.MenuItem>
				</S.MenuColumn>

				<S.Social>
					<img src={facebook.src} alt='facebook icon'/>
					<img src={twitter.src} alt='twitter icon'/>
					<img src={pinterest.src} alt='pinterest icon'/>
					<img src={instagram.src} alt='instagram icon'/>
				</S.Social>
			</S.Wrapper>
		</S.Container>
	);
}
