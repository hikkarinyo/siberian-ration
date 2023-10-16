import React from 'react'
import classNames from 'classnames'
import { SvgIcon } from '../SvgIcon/SvgIcon'
import { SocialIconProps } from '../types'

const cx = classNames.bind(require('./styles.scss'))
export const SocialIcon = ({ width }: SocialIconProps) => {
    
    return (
        <div className={cx('socialLinks')}>
            <a href='https://wa.me/79138530603' target='_blank'>
                <SvgIcon src='/icons/whats-app.svg' width={width}/>
            </a>
            <a href='https://vk.com/siberian_racion' target='_blank'>
                <SvgIcon src='/icons/vk.svg' width={width}/>
            </a>
            <a href='https://t.me/+79138530603' target='_blank'>
                <SvgIcon src='/icons/telegram.svg' width={width}/>
            </a>
        </div>
    )
}