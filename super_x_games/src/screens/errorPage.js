import React from 'react'
import error from '../assets/error.gif'
import { ErrorGif } from '../styles/errorStyles'

const ErrorPage = () => {
    return(
        <div>
            <ErrorGif src={error} alt='Gif do Super Mario Bros anunciando erro 404 e que a princesa está em outro castelo' />
        </div>
    )
}

export default ErrorPage