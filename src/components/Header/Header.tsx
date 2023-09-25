import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { SvgIcon } from '../../common/SvgIcon/SvgIcon'
import {useEffect, useState} from "react";


const cx = classNames.bind(require('./styles.scss'))

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    return (
        <header className={cx('header', { 'scrolled': isScrolled })}>
            <div className={cx('headerWrapper', 'container')}>
                <h1 className={cx('headerLogo')}>Сибирский рацион</h1>
                <nav className={cx('headerNav')}>
                    <Link to="/#" className={cx('headerNav-link')}>
                        Меню
                    </Link>
                    <Link to="/#" className={cx('headerNav-link')}>
                        Наши преимущества
                    </Link>
                    <Link to="/#" className={cx('headerNav-link')}>
                        Контакты
                    </Link>
                </nav>
                <nav className={cx('headerNav')}>
                    <a className={cx('headerPhone')} href="tel:+7(3822)33-06-03">+7 (3822) 33-06-03</a>
                    <div className={cx('headerSocialLinks')}>
                        <a href="https://wa.me/79138530603" target="_blank">
                            <SvgIcon src={'whats-app.svg'} width={'30'}/>
                        </a>
                        <a href="https://vk.com/siberian_racion" target="_blank">
                            <SvgIcon src={'vk.svg'} width={'30'}/>
                        </a>
                        <a href="https://t.me/+79138530603" target="_blank">
                            <SvgIcon src={'telegram.svg'} width={'30'}/>
                        </a>
                        <a href="mailto:sibracion@mail.ru" target="_blank">
                            <SvgIcon src={'mail.svg'} width={'30'}/>
                        </a>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header
