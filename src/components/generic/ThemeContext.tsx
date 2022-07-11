import React, {useState} from "react";

type TThemeContext = {
    fullscreen: boolean, // enable/disable footer
    setFullscreen: (arg1: boolean) => void,

    persistentBg: string,
    setPersistentBg: (arg1: string) => void,
}

const ThemeContext = React.createContext<TThemeContext>({
    fullscreen: false,
    setFullscreen: (arg1: boolean) => {},

    persistentBg: "black",
    setPersistentBg: (arg1: string) => {},
})

export function useTheme() {
    return React.useContext(ThemeContext)
}

function ThemeProvider(props: {
    children: any,
}) {
    const [fullscreen, setFullscreen] = useState(false)
    const [persistentBg, setPersistentBg] = useState("black")

    return <ThemeContext.Provider value={{
        fullscreen: fullscreen,
        setFullscreen: setFullscreen,

        persistentBg: persistentBg,
        setPersistentBg: setPersistentBg,
    }}>
        {props.children}
    </ThemeContext.Provider>
}

export default ThemeProvider;
