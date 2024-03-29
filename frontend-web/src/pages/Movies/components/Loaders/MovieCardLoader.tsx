import React from "react"
import ContentLoader from "react-content-loader"
import { generateList } from "core/utils/lists";

const MovieCardLoader = () => {
    const loaderItems = generateList(3);
    return (
        <>
        {loaderItems.map(item => (
                        <ContentLoader
                        key={item}
                        speed={1}
                        width={270}
                        height={320}
                        viewBox="0 0 250 335"
                        backgroundColor="#ecebeb"
                        foregroundColor="#d6d2d2"
                    >
                        <rect x="2" y="0" rx="10" ry="10" width="245" height="320" />
                    </ContentLoader>
        
        ))}
        </>
    )
}

export default MovieCardLoader