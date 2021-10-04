import React from 'react'
import { useHistory } from 'react-router'
import goToHome from '../router/coordinator'

const Header = () => {
    const history = useHistory()
    return (
        <div>
            {history.location.pathname !== '/cart' ?

            <div>
                <button onClick={() => history.go(0)} />
            </div>

                :
                <div>
                    <button onClick={() => goToHome(history)} />
                </div>
            }
        </div>
    )
}

export default Header