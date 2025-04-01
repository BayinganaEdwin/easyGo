import React, {
  createContext,
  useState,
  ReactNode,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';
import { USER_DATA } from '@utils/constants';

export type AuthContextType = {
  isAuthenticated: boolean | null;
  setIsAuthenticated: Dispatch<SetStateAction<AuthContextType['isAuthenticated']>>;
};

export const AppContext = createContext<AuthContextType>({
  isAuthenticated: false,
  setIsAuthenticated: () => null,
});

type Props = {
  children: ReactNode;
};

export const AppProvider: React.FC<Props> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem(USER_DATA);
      setIsAuthenticated(!!token);
    };
    checkAuth();
  }, []);

  return (
    <AppContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AppContext.Provider>
  );
};
