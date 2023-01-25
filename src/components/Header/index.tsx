import * as S from './styles';
import { useState } from 'react';

import logo from '../../assets/logo.svg';
import { MdMenu } from 'react-icons/md';
import Button from '../Button';

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<S.Container>
			<img src={logo.src} alt='logo'/>
			<S.MainMenu openMenu={openMenu}>
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
				<S.UserMenu>
					<S.MenuItem>
            Login
					</S.MenuItem>
					<Button>
          Sign Up
					</Button>
				</S.UserMenu>
			</S.MainMenu>



			<MdMenu size={32} onClick={() => setOpenMenu(prev => !prev)}/>
		</S.Container>
	);
}
