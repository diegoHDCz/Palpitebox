import React, {useState} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import PageTitle from '../components/PageTitle'

const Pesquisa = () => {
    const [form, setForm] = useState({
        Nome:'',
        Email:'',
        WhatsApp:'',
        Nota: 0
    })

    const notas = [0,1,2,3,4,5]
    const [success, SetSuccess] = useState(false)
    const [retorno, setRetorno] = useState({})

    const save = async () =>{
        
        try {
      const response = await  fetch('/api/save', {
            method: 'POST',
            body: JSON.stringify(form)
        })
        const data = await response.json()
        SetSuccess(true)
        setRetorno(data)
      
    }

    catch (err) {

    }    
 }

 const onChange = evt => {
     const value = evt.target.value
     const key = evt.target.name
     setForm(old => ({
         ...old, 
         [key]: value
     }) )
 }

return (
    <div className='pt-6'>
        <PageTitle title='Pesquisa' /> 
        <h1 className='text-center font-bold my-6 text-2xl'>Críticas e sugestões</h1>
        <p className='text-center mb-6'>O restaurante X sempre busca por atender melhor seus clientes.<br />
        Por isso, estamos sempre abertos a ouvir sua opinião</p>
{! success && <div className='w-1/5 mx-auto'>
        <label className='font-bold'>Seu nome:</label>
        <input type='text'className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='Nome' onChange={onChange} name='Nome' value={form.Nome}/>
        <label className='font-bold'>E-mail:</label>
        <input type='text'className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='E-mail' onChange={onChange} name='Email' value={form.Email} />
        <label className='font-bold'>WhatsApp:</label>
        <input type='text'className='p-4 block shadow bg-blue-100 my-2 rounded' placeholder='WhatsApp' onChange={onChange} name='WhatsApp' value={form.WhatsApp} />
            <div className='flex py-6'>
        { notas.map( nota => {
        return (<label className='block w-1/6 text-center'>
                {nota} <br />
         <input type='radio' name='Nota' value={nota} onChange={onChange}></input>
        </label>)})
        }
            </div>
        <button className='mb-6 mt-4 bg-blue-400 px-6 text-center py-4 font-bold rounded-lg shadow-lg hover:shadow' onClick={save}>Salvar</button>
      
        </div>}
        { success && <div className='w-1/5 mx-auto' >
            <p className=' mb-6 text-center bg-blue-100 border-t border-b border-blue-500 text-blue 700 px-4 py-3'>Obrigado por contribuir com sua sugestão ou crítica</p>
        {
            retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                Seu Cupom <br/>
                <span className='font-bold text-2xl '>{retorno.Cupom}</span>
                </div>
        }
        {
                retorno.showCoupon && <div className='text-center border p-4 mb-4'>
                <span className='font-bold block mb-2'>{retorno.Promo}</span>
                <br /> 
                <span className='italic'> Tire um print ou foto dessa tela e apresente ao caixa.</span>
                </div>


        }
         </div>}
    </div>
)

}
export default Pesquisa