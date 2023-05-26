import { useEffect, useRef } from "react";

export default function useScroll(isLoading, parentRef, childRef, callback) {
    const observer = useRef();

    useEffect(()=>{
        if (isLoading) return;
        const options = {
            root: parentRef.current,
            rootMargin: "0px",
            threshold: 0,
          };
        observer.current = new IntersectionObserver(([target]) => {
            if(target.isIntersecting) {
                callback();
            }
        }, options)

        observer.current.observe(childRef.current)

        return function(){
            observer.current.unobserve(childRef.current)
        }
    },[isLoading])

}