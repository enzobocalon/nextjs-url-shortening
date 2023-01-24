import * as S from './styles';

import logo from '../../assets/logo.svg';
import { MdMenu } from 'react-icons/md';
import Button from '../Button';

export default function Header() {
	return (
		<S.Container>
			<S.MainMenu>
				<img src={logo.src} />
				<S.Menu>
					<S.MenuItem>
            Features
					</S.MenuItem>
					<S.MenuItem>
            Pricing
					</S.MenuItem>
					<S.MenuItem>
            Resources
					</S.MenuItem>
				</S.Menu>
			</S.MainMenu>

			<S.UserMenu>
				<S.MenuItem>
            Login
				</S.MenuItem>
				<Button>
          Sign Up
				</Button>
			</S.UserMenu>

			<MdMenu />
		</S.Container>
	);
}
