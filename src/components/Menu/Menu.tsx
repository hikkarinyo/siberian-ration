import React, { useState } from 'react'
import classNames from 'classnames'
import { MySlider } from '../../common/MySlider/MySlider'
import { Button } from '../../common/Button/Button'
import Modal from '../../common/Modal/Modal'
import Form from '../../common/Form/Form'

const cx = classNames.bind(require('./styles.scss'))


interface MenuProps {
    id?: string
}

const Menu = (props: MenuProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const menuImages = [
        '/menu/page-1.svg',
        '/menu/page-2.svg',
        '/menu/page-3.svg',
        '/menu/page-4.svg',
        '/menu/page-5.svg',
        '/menu/page-6.svg',
        '/menu/page-7.svg',
        '/menu/page-8.svg',
        '/menu/page-9.svg',
        '/menu/page-10.svg',
        '/menu/page-11.svg',
        '/menu/page-12.svg',
    ]

    const handleOpenModal = () => {
        setIsOpen(true);
    }
    const handleCloseModal = () => {
        setIsOpen(false);
    }
    
    return (
        <>
            <section id={props.id} className={'menu'}>
                <div className={cx('container')}>
                    <h1 className={cx('menuTitle')}>Меню</h1>
                    <MySlider images={menuImages}/>
                </div>
                <Button variant={'dark'} onClick={handleOpenModal}>Забронировать</Button>
            </section>
            <Modal isOpen={isOpen} onClose={handleCloseModal}><Form onCloseModal={handleCloseModal}/></Modal>
        </>
    )
}

export default Menu
