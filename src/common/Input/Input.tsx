import { useState } from 'react'
import { InputProps } from '../types'
import classNames from 'classnames'


const cx = classNames.bind(require('./styles.scss'))

export const Input = ({value, label, name, register, error, onChange}: InputProps) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <div className={cx('input', {focused: isFocused || value})}>
            <input
                className={cx('inputField', {'inputError': error})}
                name={name}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={onChange}
                {...register(name)}
            />
            <label
                className={cx('inputLabel', {active: isFocused || value, 'inputLabelError': error}
                )}
            >
                {label}
            </label>
            {error && <span className={cx({'inputErrorMessage': error})}>{error}</span>}
        </div>
    )
}