import { SvgIconProps } from '../types'

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
    <img className={className} src={`/icon/${src}`} alt={src} width={width} height={height} />
)