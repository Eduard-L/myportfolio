import { useEffect, useMemo, useRef, useState } from 'react'




export const useIsInVeiwPort = (element, percentOfTheScreen) => {
    const [isVisible, setIsVisible] = useState(false);

    const options = useMemo(() => {
        return {
            root: null,
            rootMargin: '0px',
            threshold: percentOfTheScreen
        }
    }, [])
    function handleObserverCallBack(entries) {
        const entry = entries[0];

        setIsVisible(entry.isIntersecting)

    }
    useEffect(() => {
        if (!element) return
        // console.log(element.current)
        const observer = new IntersectionObserver(handleObserverCallBack, options);
        const currentElement = element.current;
        if (currentElement) {
            observer.observe(currentElement);
        }
        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        }
    }, [element])


    return { isVisible }

}


