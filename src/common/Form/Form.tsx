import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { request } from '../../api'
import { schema } from '../../helpers/validation'
import { FormProps } from '../types'
import { Message } from '../Message/Message'


const cx = classNames.bind(require('./styles.scss'))

interface FormData {
    name: string
    phone: string
}

const Form = ({onCloseModal}: FormProps) => {
    const {
        register, handleSubmit, formState: {errors},
        reset
    } = useForm({mode: 'onBlur', resolver: yupResolver(schema)})
    const [message, setMessage] = useState('')

    const onSubmit = async (data: FormData) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone', data.phone)

        try {
            await request(formData)
            reset()
            setMessage('success')
        } catch (error) {
            setMessage('error')
        }
    }

    useEffect(() => {
        return () => {
            setMessage('')
            reset()
        }
    }, [onCloseModal, reset])

    return (
        <>
            {message
                ? <Message typeMessage={message}/>
                : <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                    <h1 className={cx('formTitle')}>Форма для бронирования</h1>
                    <p className={cx('formSubTitle')}>
                        Оставьте свои контактные данные и мы свяжемся с Вами для уточнения деталей
                    </p>
                    <Input
                        name={'name'}
                        label={'Имя'}
                        register={register}
                        error={errors.name?.message}
                    />
                    <Input
                        name={'phone'}
                        label={'Телефон'}
                        register={register}
                        error={errors.phone?.message}
                    />
                    <Button type={'submit'} variant={'darkV2'}>Отправить</Button>
                </form>
            }
        </>
    )
}

export default Form