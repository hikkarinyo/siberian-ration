import React from 'react'

export interface SvgIconProps {
    src: string
    width?: string
    height?: string
    className?: string
}

export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset'
    variant?: 'dark' | 'darkV2'
    disabled?: boolean
}

export interface SliderProps {
    images: string[]
}

export interface InputProps {
    label: string
    value?: string
    name: string
    error?: string
    register?: any
    onChange?: () => void
}

export interface PhoneInputProps {
    label: string
    value?: string
    name: string
    mask: string
    error?: string
    control?: any
    onChange?: () => void
}

export interface SocialIconProps {
    width?: string
}

export interface ModalProps {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}

export interface FormProps {
    onCloseModal: () => void
}

export interface MessageProps {
    typeMessage: string
}
