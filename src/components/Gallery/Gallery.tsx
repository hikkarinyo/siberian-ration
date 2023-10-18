import classNames from 'classnames'
import ScrollAnimation from 'react-animate-on-scroll'

const cx = classNames.bind(require('./styles.scss'))


const Gallery = () => {
    const galleryText =
        'Каждое мероприятие - это отдельная история, с индивидуальным подходом, нестандартными решениями' +
        'и высоким уровнем обслуживания! В процессе подготовки к мероприятию наша команда продумывает всё до' +
        'мелочей. Индивидуальное меню с учётом Ваших пожеланий позволит выбрать самое лучшее, вкусное для' +
        'вашего стола.'

    const galleryUrl = {
        video1: 'https://www.dropbox.com/scl/fi/qolixjbz4k3aycuotmqkf/Untitled.mp4?rlkey=b0sz33wyhpqij55332hdaohcc&raw=1',
        video2: 'https://www.dropbox.com/scl/fi/95r5iiluh0sjop5yi9oul/video_2.mp4?rlkey=g84kpfk9ago6dxxon2qxyefzo&raw=1',
        video3: 'https://www.dropbox.com/scl/fi/egxpehuneoosxsz6etece/Untitled-3.mp4?rlkey=w8d0bx00blep8lb2yxj5vuwgr&raw=1',
        video4: 'https://www.dropbox.com/scl/fi/1qi12ayyxheoczjtxzgo3/video_4.mp4?rlkey=djsuhbufev2okmbdgt2smua18&dl&raw=1',
    }

    return (
        <section className={cx('gallery')}>
            <div className={cx('container')}>
                <p className={cx('galleryText')}>{galleryText}</p>
                <div className={cx('galleryGrid')}>
                    <ScrollAnimation className={cx('video1')} animateIn='fadeInLeft'>
                        <video
                            src={galleryUrl.video1}
                            className={cx('video')}
                            autoPlay
                            muted
                            preload='metadata'
                            poster='/images/snapshot-1.jpg'
                        >
                        </video>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo2')} animateIn='fadeInRight'>
                        <img src='/images/hot-platter.jpg' className='img' alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo3')} animateIn='fadeInRight' >
                        <img src='/images/bruschetta.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('video4')} animateIn='fadeInRight'>
                        <video
                            src={galleryUrl.video2}
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot-2.jpg'
                            preload='metadata'
                        />
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo5')} animateIn='fadeInRight'>
                        <img src='/images/set-of-dishes.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo6')} animateIn='fadeInRight'>
                        <img src='/images/bruschetta-with-fish.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo7')} animateIn='fadeInLeft'>
                        <img src='/images/pilaf.jpg' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('video8')} animateIn='fadeInRight'>
                        <video
                            src={galleryUrl.video3}
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot-3.jpg'
                            preload='metadata'
                        />
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('video9')} animateIn='fadeInRight'>
                        <video
                            src={galleryUrl.video4}
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot-4.jpeg'
                            preload='metadata'
                        />
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
};

export default Gallery
