import Image from 'next/image'
import { Container } from './style'

type CardProps = {
    bg: string
    className?: string
    icon: string
    mainText: string
    title: string
    size?: [number, number]
    subText: string
}

export function Card({
    bg,
    className,
    icon,
    mainText,
    title,
    size,
    subText,
}: CardProps) {
    size ||= [72, 72]
    className ||= ''

    return (
        <Container
            className={className}
            style={{ background: bg, width: size[0].toString() }}
        >
            <div className="image-wrapper">
                <Image
                    src={icon}
                    width={size[0]}
                    height={size[1]}
                    layout="fixed"
                />
            </div>

            <div className="content-wrapper">
                <div className="content">
                    <header>
                        <h2>{title}</h2>
                        <Image
                            src="/images/icon-ellipsis.svg"
                            width={20}
                            height={5}
                            layout="fixed"
                        />
                    </header>

                    <div className="content__info">
                        <strong className="content__main-text">
                            {mainText}
                        </strong>
                        <p className="content__sub-text">{subText}</p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
