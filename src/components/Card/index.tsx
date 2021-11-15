import Image from 'next/image'
import { Container } from './style'

type CardProps = {
    bg: string
    icon: string
    size?: [number, number]

    title: string
    mainText: string
    subText: string

    className?: string
}

export function Card({
    icon,
    bg,
    size,
    title,
    mainText,
    subText,
    className,
}: CardProps) {
    size ||= [72, 72]
    
    return (
        <Container style={{ background: bg, width: size[0].toString() }}>
            <div className={`card ${className || ''}`}>
                <Image
                    src={icon}
                    {...{ width: size[0], height: size[1] }}
                    layout="fixed"
                    className="card-image"
                />
                <div className="draft">
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

                        <div className="info">
                            <strong>{mainText}</strong>
                            <p>{subText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}
