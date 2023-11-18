import React, { createContext, useState } from "react";

type ProviderProps = {
	children: React.ReactNode;
};

type AuthContextType = {
	isLogged: boolean;
	setAuth: (data: boolean) => void;
}


export const AuthContext = createContext<AuthContextType>({
	isLogged: false,
	setAuth: function (data: boolean): void {
		throw new Error("Function not implemented.");
	}
});

export const AuthContextProvider = (children: ProviderProps) => {
	const [isLogged, setAuth] = useState<boolean>(false);
	

	const AuthValue = { isLogged, setAuth };
	return <AuthContext.Provider value={AuthValue} {...children} />;
};