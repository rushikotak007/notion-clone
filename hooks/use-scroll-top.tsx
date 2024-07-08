import { useState, useEffect } from "react";

export const useScrollTop = (threshold = 10)=>{
    const[scrolled, setScrolled] = useState(false);
    
    useEffect(()=>{
        const handleScroll = () => {
            const offset = window.scrollY;
            if(offset > threshold){
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[threshold])
    return scrolled;
}