import React, { useEffect, useState } from 'react'
import classNames from 'classnames'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Input } from '../Input/Input'
import { Button } from '../Button/Button'
import { sendApplication } from '../../api'
import { schema } from '../../helpers/validation'
import { FormProps } from '../types'
import { Slide, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PhoneInput } from '../Input/PhoneInput'


const cx = classNames.bind(require('./styles.scss'))

interface FormData {
    name: string
    phone: string
}

const Form = ({onCloseModal}: FormProps) => {
    const {
        register, handleSubmit, formState: {errors},
        reset, control
    } = useForm({mode: 'onBlur', resolver: yupResolver(schema)})
    const [isDisabled, setIsDisabled] = useState(false)

    const onSubmit = async (data: FormData) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('phone', data.phone)

        try {
            setIsDisabled(true)
            await sendApplication(formData)
            reset()
            onCloseModal()
            toast.success(
                'Благодарим вас! Мы обязательно свяжемся с вами в ближайшее время.', {
                    position: toast.POSITION.TOP_RIGHT,
                    transition: Slide
            })
        } catch (error) {
            toast.error(
                'Возникла ошибка при обработке вашей заявки. Пожалуйста, попробуйте ещё раз позже.', {
                    position: toast.POSITION.TOP_RIGHT,
                    transition: Slide
                })
        } finally {
            setIsDisabled(false)
        }
    }

    useEffect(() => {
        return () => {
            reset()
        }
    }, [onCloseModal, reset])

    return (
        <>

            <form className={cx('form')} onSubmit={handleSubmit(onSubmit)}>
                <h1 className={cx('formTitle')}>Форма для бронирования</h1>
                <p className={cx('formSubTitle')}>
                    Оставьте свои контактные данные и мы свяжемся с Вами для уточнения деталей
                </p>
                <Input
                    name='name'
                    label='Имя'
                    register={register}
                    error={errors.name?.message}
                />
                <PhoneInput
                    name='phone'
                    label='Телефон'
                    mask="+7 (999) 999-99-99"
                    control={control}
                    error={errors.phone?.message}
                />
                <Button type='submit' variant='darkV2' disabled={isDisabled}>Отправить</Button>
            </form>
        </>
    )
}

export default Form