import { useEffect, useRef } from "react"



export const useSEO = ({title, description}) => {
    
    const prevTitle = useRef(document.title)
    const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'))

    useEffect(() => {
        const previousTitle = prevTitle.current
        document.title = `Ver Pelicula ${title} PELICULAZ.XYZ`
    
      return () => document.title =  previousTitle
    }, [title])

    useEffect(() => {
        const metaDescription = document.querySelector('meta[name="description"]')
        const previousDescription = prevDescription.current
        description && metaDescription.setAttribute('content', `Ver ${title} pelicula completa en peliculaz.xyz Online. ${description}`) 
    
      return () =>  metaDescription.setAttribute('content', previousDescription)  
    }, [description])
    
    
}
