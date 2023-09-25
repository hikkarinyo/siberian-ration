export interface SvgIconProps {
    src: string
    width?: string
    height?: string
    className?: string
}

export interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
    type?: "button" | "submit" | "reset"
}
