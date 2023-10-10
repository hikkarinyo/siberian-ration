import classNames from 'classnames'


const cx = classNames.bind(require('./styles.scss'))

export const Loader = () => {
    return (
        <div className={cx('wrapperLoader')}>
            <span className={cx('loader')}></span>
        </div>
    )
}