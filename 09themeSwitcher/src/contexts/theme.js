//This is another & more better Approach bcoz we have done 2 files work in only 1 file. See Carefully. Compare this & previous project

import React, {createContext, useContext} from "react";

export const ThemeContext = createContext({     //now we are passing an object, for default values
    themeMode: 'light',  //default value
    //These 2 are methods(we have not defined their functionalities), whenever someone calls the Context then we 'll get the theme(themeMode) also & these 2 methods also. We can pass variables also & methods also.
    darkTheme: () => {},
    lightTheme: () => {}
})

export const ThemeProvider = ThemeContext.Provider 

export default function useTheme() {
    return useContext(ThemeContext)
}