import React, { useState } from 'react'
import { PhoneInputProps } from '../types'
import classNames from 'classnames'
import { Controller } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'

const cx = classNames.bind(require('./styles.scss'))

export const PhoneInput = ({value, label, mask, name, error, control}: PhoneInputProps) => {
    const [isFocused, setIsFocused] = useState(false)
    const [hasValue, setHasValue] = useState(!!value)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target
        setHasValue(!!value)
    }

    return (
        <div className={cx('input', {focused: isFocused || hasValue})}>
            <Controller
                control={control}
                name={name}
                defaultValue={''}
                render={({ field: { value, onChange } }) => (
                    <ReactInputMask
                        name='phone'
                        className={cx('inputField', {'inputError': error})}
                        mask={mask}
                        onChange={(event) => {
                            handleChange(event)
                            onChange(event)
                        }}
                        value={value}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                    />
                )}
            />
            <label className={cx('inputLabel', {active: isFocused || hasValue, 'inputLabelError': error})}>
                {label}
            </label>
            {error && <span className={cx({'inputErrorMessage': error})}>{error}</span>}
        </div>
    )
}