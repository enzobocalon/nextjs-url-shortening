import { ReactNode } from 'react';
import * as S from './styles';

interface Props {
  onClick?: () => void;
  children: ReactNode
  rounded?: 'rounded' | 'semi-rounded'
}

export default function Button({onClick, children, rounded}: Props) {
	return (
		<S.Button
			onClick={onClick}
			rounded={rounded}>
			{children}
		</S.Button>
	);
}
