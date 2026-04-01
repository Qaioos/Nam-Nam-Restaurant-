import { useState, useEffect, createContext, ReactNode } from "react";

interface MobileContextType {
    isMobile: boolean;
}
interface MobileProviderProps {
    children: ReactNode;
}

const MobileHanderContext = createContext<MobileContextType | undefined>(
    undefined,
);

function MobileProvider({ children }: MobileProviderProps) {
    const [isMobile, setMobile] = useState<boolean>(false);

    const isMobileHandler = (e: MediaQueryListEvent): void => {
        setMobile(e.matches);
    };

    useEffect(() => {
        window
            .matchMedia("(max-width:1024px)")
            .addEventListener("change", isMobileHandler);
        setMobile(window.matchMedia("(max-width:1024px)").matches);
    }, []);

    return (
        <MobileHanderContext.Provider value={{ isMobile }}>
            {children}
        </MobileHanderContext.Provider>
    );
}

export { MobileHanderContext, MobileProvider };
