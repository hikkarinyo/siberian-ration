import classNames from 'classnames'
import {SvgIcon} from '../../common/SvgIcon/SvgIcon'

const cx = classNames.bind(require('./styles.scss'))


interface OurAdvantagesProps {
    id?: string
}

const OurAdvantages = (props: OurAdvantagesProps) => {
    const advantages = [
        { text: 'качественно', icon: '/icons/hand.svg' },
        { text: 'надежно', icon: '/icons/reliably.svg' },
        { text: 'доступно', icon: '/icons/available.svg' },
        { text: 'профессионально', icon: '/icons/cook.svg' }
    ]

    return (
        <section id={props.id} className={'ourAdvantages'}>
            <div className={cx('container')}>
                <h1 className={cx('ourAdvantagesTitle')}>Наши преимущества</h1>
                <div className={cx('ourAdvantagesBlocks')}>
                    {advantages.map((advantage, index) => (
                        <div className={cx('ourAdvantagesBlock')} key={index}>
                            <SvgIcon src={advantage.icon} width='80'/>
                            <h1 className={cx('ourAdvantagesBlockTitle')}>{advantage.text}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OurAdvantages
