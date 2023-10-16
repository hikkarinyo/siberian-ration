import { ButtonProps } from '../types'
import classNames from 'classnames'


const cx = classNames.bind(require('./styles.scss'))

export const Button = ({ children, onClick, type, variant, disabled }: ButtonProps) => (
    <button
        className={cx('button', {'button__dark': variant === 'dark', 'button__darkV2': variant === 'darkV2'})}
        onClick={onClick}
        type={type}
        disabled={disabled}
    >
        {children}
    </button>
)