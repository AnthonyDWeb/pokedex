import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

type ProviderProps = {
	children: React.ReactNode;
};

export type PageContextType = {
	pages: string | undefined;
	setUrl: (data: string) => void;
};

export const PageContext = createContext<PageContextType>({
	pages: "",
	setUrl: function (data: string): void {
		throw new Error("Function not implemented.");
	},
});

export const PageContextProvider = (children: ProviderProps) => {
	const [pages, setPages] = useState<string | undefined>();
	const navigate = useNavigate();
	const setUrl = (route: string) => {
		navigate(route, { replace: true });
		setPages(route);
	};

	// useEffect(() => {
	// 	!pages && setUrl("/auth");
	// }, []);
	
	const PageValue = { pages, setUrl };
	return <PageContext.Provider value={PageValue} {...children} />;
};
