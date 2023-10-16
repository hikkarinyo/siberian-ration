import { SvgIconProps } from '../types'

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
    <img className={className} src={`%PUBLIC_URL%/${src}`} alt={src} width={width} height={height} draggable='false'/>
)