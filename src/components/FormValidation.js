import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'


const FormValidation = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm();

    const customSubmit = (data) => {
        //console.log(data)
        alert('Validación exitosa!!!!!')
    }

    const [colorInput, setColorInput] = useState('#fff7f7')

    useEffect( () => {
        let words = watch('prueba')
        if(words === 'react'){setColorInput('#614ad3')}
    })

    return (
        <Fragment>
            <h2>Ejercicio de Validaciones</h2>

            <form onSubmit={ handleSubmit(customSubmit) } className='form-react'>
                <div className='form-control'>
                    <label>Name</label>
                    <input type='text' {...register('name', { required:true, maxLength:5 })} />
                    { errors.name?.type === 'required' && <small className='fail'>el campo no puede estar vacio</small> }
                    { errors.name?.type === 'maxLength' && <small className='fail'>Longitud del nombre no puede ser mayor a 5 caracteres</small> }
                </div>
                <div className='form-control'>
                    <label>Age</label>
                    <input type='number' {...register('age',{ required:true, min:10, max:100 })} />
                    { errors.age?.type === 'required' && <small className='fail'>el campo no puede estar vacio</small> }
                    { errors.age?.type === 'min' && <small className='fail'>edad no puede ser menor a 5 años</small> }
                    { errors.age?.type === 'max' && <small className='fail'>edad no puede ser mayor a 100 años</small> }
                </div>
                <div className='form-control'>
                    <label>Country</label>
                    <input type='text' {...register('country', { 
                        required:{ 
                            value:true,
                            message: "custom Message: Ingrese el dato"} })} />
                    { errors.country && <small className='fail'>{errors.country.message}</small> }
                </div>  
                <div className='form-control'>
                    <input type='text' {...register('prueba')} style={{backgroundColor:colorInput}}/>
                </div> 
                <button type='submit'>Send</button>                             
            </form>
        </Fragment>
    )
}

export default FormValidation