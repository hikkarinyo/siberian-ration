import { useEffect, useState } from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { SocialIcon } from '../../common/SocialIcon/SocialIcon'


const cx = classNames.bind(require('./styles.scss'))

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

    const toggleMenuMobile = () => {
        setMobileMenuOpen(!isMobileMenuOpen)
    }

    const closeMobileMenu = () => {
        setMobileMenuOpen(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset
            if (scrollTop > 0) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = ''
        }
    }, [isMobileMenuOpen])


    return (
        <header className={cx('header', { 'scrolled': isScrolled },  { mobile: isMobileMenuOpen })}>
            <div className={cx('headerWrapper', 'container', { mobile: isMobileMenuOpen })}>
                <div className={cx('headerInner')}>
                    <Link to='/#banner' className={cx('headerLogo')} onClick={closeMobileMenu}>Сибирский рацион</Link>
                    <button className={cx('mobileMenuButton', { active: isMobileMenuOpen })} onClick={toggleMenuMobile}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <nav className={cx('headerNav', { mobile: isMobileMenuOpen })}>
                    <Link to='/#menu' className={cx('headerNav-link')} onClick={closeMobileMenu}>
                        Меню
                    </Link>
                    <Link to='/#ourAdvantages' className={cx('headerNav-link')} onClick={closeMobileMenu}>
                        Наши преимущества
                    </Link>
                    <Link to='/#contacts' className={cx('headerNav-link')} onClick={closeMobileMenu}>
                        Контакты
                    </Link>
                </nav>
                <nav className={cx('headerNav', { mobile: isMobileMenuOpen })}>
                    <a className={cx('headerPhone')} href='tel:+7(3822)33-06-03'>+7 (3822) 33-06-03</a>
                    <SocialIcon width={'30'}/>
                </nav>
            </div>
        </header>
    )
}

export default Header
