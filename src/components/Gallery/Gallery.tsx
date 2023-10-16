import classNames from 'classnames'
import ScrollAnimation from 'react-animate-on-scroll'

const cx = classNames.bind(require('./styles.scss'))


const Gallery = () => {
    return (
        <section className={cx('gallery')}>
            <div className={cx('container')}>
                <p className={cx('galleryText')}>
                    Каждое мероприятие - это отдельная история, с индивидуальным подходом, нестандартными решениями
                    и высоким уровнем обслуживания! В процессе подготовки к мероприятию наша команда продумывает всё до
                    мелочей. Индивидуальное меню с учётом Ваших пожеланий позволит выбрать самое лучшее, вкусное для
                    вашего стола.
                </p>
                <div className={cx('galleryGrid')}>
                    <ScrollAnimation className={cx('video1')} animateIn='fadeInLeft'>
                        <video
                            src='https://www.dropbox.com/scl/fi/qolixjbz4k3aycuotmqkf/Untitled.mp4?rlkey=b0sz33wyhpqij55332hdaohcc&raw=1'
                            className={cx('video')}
                            autoPlay
                            muted
                            preload='metadata'
                            poster='/images/snapshot_1.png'
                        >
                        </video>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo2')} animateIn='fadeInRight'>
                        <img src='/images/IMG_7464.JPG' className='img' alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo3')} animateIn='fadeInRight' >
                        <img src='/images/IMG_7872.JPG' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('video4')} animateIn='fadeInRight'>
                        <video
                            src='https://www.dropbox.com/scl/fi/95r5iiluh0sjop5yi9oul/video_2.mp4?rlkey=g84kpfk9ago6dxxon2qxyefzo&raw=1'
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot_2.png'
                            preload='metadata'
                        />
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo5')} animateIn='fadeInRight'>
                        <img src='/images/IMG_8031.JPG' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo6')} animateIn='fadeInRight'>
                        <img src='/images/IMG_7840.JPG' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo7')} animateIn='fadeInLeft'>
                        <img src='/images/IMG_7465.JPG' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('video8')} animateIn='fadeInRight'>
                        <video
                            src='https://www.dropbox.com/scl/fi/egxpehuneoosxsz6etece/Untitled-3.mp4?rlkey=w8d0bx00blep8lb2yxj5vuwgr&raw=1'
                            className={cx('video')}
                            autoPlay
                            muted
                            loop
                            poster='/images/snapshot_3.png'
                            preload='metadata'
                        />
                    </ScrollAnimation>
                    <ScrollAnimation className={cx('photo9')} animateIn='fadeInLeft'>
                        <img src='/images/IMG_7830.JPG' className={cx('img')} alt='photo' draggable='false'/>
                    </ScrollAnimation>
                </div>
            </div>
        </section>
    )
};

export default Gallery
