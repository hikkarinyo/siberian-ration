import React from 'react'
import classNames from 'classnames'
import { MessageProps } from '../types'
import { SvgIcon } from '../SvgIcon/SvgIcon'


const cx = classNames.bind(require('./styles.scss'))

const type = {
    success: 'success',
    error: 'error'
}

export const Message = ({typeMessage}: MessageProps) => (
    <div className={cx('messageContent')}>
        {typeMessage  === type.success &&
            <>
                <SvgIcon src='ok.svg' width='100'/>
                <p className={cx('message')}>
                    Благодарим вас!
                    <br/>
                    Мы обязательно свяжемся с вами в ближайшее время.
                </p>
            </>
        }
        {typeMessage === type.error &&
            <>
                <SvgIcon src='error.svg' width='100'/>
                <p className={cx('message')}>
                    Возникла ошибка при обработке вашей заявки.
                    <br/>
                    Пожалуйста, попробуйте ещё раз позже.
                </p>
            </>
        }
    </div>
)