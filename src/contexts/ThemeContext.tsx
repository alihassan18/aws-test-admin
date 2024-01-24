import { ReactNode, createContext, useContext, useEffect } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useCookies } from 'react-cookie';

const ThemeContext = createContext({});

export function useThemeContext() {
    return useContext(ThemeContext);
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [cookies, setCookie] = useCookies(['theme']);

    useEffect(() => {
        if (!cookies.theme) {
            setCookie('theme', 'dark', { path: '/' }); // Set the default theme cookie if it doesn't exist
        }
    }, []);

    const theme = cookies.theme || 'dark';

    return (
        <NextThemeProvider defaultTheme={theme} attribute="class" enableSystem={false} storageKey="theme">
            <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
        </NextThemeProvider>
    );
};
export default ThemeProvider;
