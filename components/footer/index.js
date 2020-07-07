import React from 'react'

const Footer = () => {
return (
    <div className='bg-gray-700 p-4'>
        <div className='container mx-auto text-center font-bold text-white'>
        Projeto desenvolvido por:
        <a className='hover:underline' href='https://www.facebook.com/diego.czajka.7'> {' '}Diego Hernan</a> /{'  '}
        <a className='hover:underline' href='https://www.instagram.com/diegoczajka/'>IG</a> /{'  '}
        <a className='hover:underline' href=''>try again</a>{'  '}
        <div className='mt-4'>
            <img className='inline p-4 h-24 w-30 ' src='/logo_semana_fsm.png' />
            <img className='inline p-4 h-36 w-36' src='/logo_devpleno.png' />
            </div>
        </div>
    </div>

)
}

export default Footer   