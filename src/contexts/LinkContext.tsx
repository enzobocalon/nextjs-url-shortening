import { Links } from '@/Types/Links';
import React, { createContext, useState } from 'react';

interface IModes {
  links: Links[];
  setLinks: React.Dispatch<React.SetStateAction<Links[]>>
}

type ProviderProps = {
  children: React.ReactNode
}

export const LinksContext = createContext({} as IModes);

const LinksProvider = ({children}: ProviderProps) => {
	const [links, setLinks] = useState<Links[]>([]);
	console.log(links);

	return (
		<LinksContext.Provider
			value={{
				links,
				setLinks
			}}
		>
			{children}
		</LinksContext.Provider>
	);
};

export default LinksProvider;

