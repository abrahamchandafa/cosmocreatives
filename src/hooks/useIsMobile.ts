import { useMediaQuery } from "react-responsive";

export const useIsMobile = ():boolean => useMediaQuery({maxWidth: 767})
export const useIsTablet = ():boolean => useMediaQuery({minWidth: 768, maxWidth: 1023})
export const useIsDesktop = ():boolean => useMediaQuery({minWidth: 1024})