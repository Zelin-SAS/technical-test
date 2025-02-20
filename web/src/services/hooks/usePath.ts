import { useState, useEffect } from "react";

export default function useReactPath(): string {
    const [path, setPath] = useState<string>(window.location.pathname);

    const listenToPopstate = (): void => {
        const winPath = window.location.pathname;
        setPath(winPath);
    };

    useEffect(() => {
        window.addEventListener("popstate", listenToPopstate);
        return () => {
            window.removeEventListener("popstate", listenToPopstate);
        };
    }, []);

    return path;
}