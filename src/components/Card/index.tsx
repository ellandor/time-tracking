import { IconType } from 'react-icons'
import { Container } from './style'

import { FaEllipsisH } from 'react-icons/fa'

type CardProps = {
    bg:         string
    icon:       IconType

    title:      string
    mainText:   string
    subText:    string

    className?: string
}

export function Card({ icon: Icon, bg, title, mainText, subText, className }: CardProps) {
    return (
       <Container style={{ background: bg }}>
           <div className={`card ${className || ''}`}>
                <Icon size={72} color={bg}/>
                <div className="draft">
                    <div className="content">
                        <header>
                            <h2>{title}</h2>
                            <FaEllipsisH size={20} color="var(--pale-blue)" />
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