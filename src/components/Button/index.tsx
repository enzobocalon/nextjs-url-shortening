import { ReactNode } from 'react';
import * as S from './styles';

interface Props {
  onClick?: () => void;
  children: ReactNode
  rounded?: 'rounded' | 'semi-rounded'
  active?: boolean
}

export default function Button({onClick, children, rounded, active}: Props) {
	return (
		<S.Button
			onClick={onClick}
			rounded={rounded}
			active={active}>
			{children}
		</S.Button>
	);
}
