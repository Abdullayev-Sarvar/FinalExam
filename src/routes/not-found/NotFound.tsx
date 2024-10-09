import React from 'react'
import Container from '../../utils'

const NotFound: React.FC = () => {
    return (
        <div className='h-[50vh] bg-error-b bg-cover bg-center'>
            <Container>
                <div className='h-full flex flex-col justify-around items-center text-white text-opacity-90'>
                    <h1 className='text-6xl'>Uh oh! Looks like we can't find that.</h1>
                    <h2 className='text-2xl'>Error 404</h2>
                </div>
            </Container>
        </div>
    )
}

export default NotFound