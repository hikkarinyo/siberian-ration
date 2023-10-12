import { SvgIconProps } from '../types'

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => (
    <img className={className} src={`images/icon/${src}`} alt={src} width={width} height={height} />
)