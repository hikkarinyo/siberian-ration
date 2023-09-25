import { ButtonProps } from "../types"
import classNames from "classnames"


const cx = classNames.bind(require('./styles.scss'))

export const Button = ({ children, onClick, type }: ButtonProps) => (
    <button className={cx('button')} onClick={onClick} type={type}>
        {children}
    </button>
)