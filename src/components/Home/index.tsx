import { Container } from './style'

import Image from 'next/image'

import { Card } from '../Card'
import { useEffect, useState } from 'react'
import { API } from '../../services/api'

type User = {
    name: string
    icon: string
    info: {
        [key: string]: {
            mainText: string
            subText: string
        }[]
    }
}

const allStats = ['Daily', 'Weekly', 'Monthly']

export function Home() {
    const [stat, setStat] = useState('Weekly')
    const [user, setUser] = useState({} as User)

    function togglestats(value: string) {
        setStat(value)
    }

    useEffect(() => {
        API.get('/users').then(r => setUser(r.data[0])).catch(e => console.log(e))
    }, [])

    if (!user.info) return <></>

    const texts = user.info[stat]

    return (
        <Container>
            <div className="main-card">
                <div className="profile">
                    <Image
                        src={user.icon}
                        alt={user.name}
                        width={80}
                        height={80}
                        layout="fixed"
                        className="profile__image"
                    />

                    <div className="profile__info">
                        <p>Report for</p>
                        <strong className="profile__username">Jeremy Robson</strong>
                    </div>
                </div>

                <nav className="stats">
                    <ul>
                        {allStats.map(k => (
                            <li key={k}>
                                <a
                                    className={stat === k ? 'stats__selected' : ''}
                                    onClick={() => togglestats(k)}
                                >
                                    {k}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <Card
                bg="var(--light-orange)"
                icon="/images/icon-work.svg"
                title="Work"
                size={[85, 85]}
                mainText={texts[0].mainText}
                subText={texts[0].subText}
                className="card-1"
            />
            <Card
                bg={'var(--soft-blue)'}
                icon="/images/icon-play.svg"
                title="Play"
                size={[90, 90]}
                mainText={texts[1].mainText}
                subText={texts[1].subText}
                className="card-2"
            />
            <Card
                bg={'var(--light-red)'}
                icon="/images/icon-study.svg"
                title="Study"
                size={[90, 90]}
                mainText={texts[2].mainText}
                subText={texts[2].subText}
                className="card-3"
            />
            <Card
                bg={'var(--lime-green)'}
                icon="/images/icon-exercise.svg"
                title="Exercise"
                size={[80, 60]}
                mainText={texts[3].mainText}
                subText={texts[3].subText}
                className="card-4"
            />
            <Card
                bg={'var(--violet)'}
                icon="/images/icon-social.svg"
                size={[80, 100]}
                title="Social"
                mainText={texts[4].mainText}
                subText={texts[4].subText}
                className="card-5"
            />
            <Card
                bg={'var(--yellow)'}
                icon="/images/icon-self-care.svg"
                title="Self Care"
                size={[75, 75]}
                mainText={texts[5].mainText}
                subText={texts[5].subText}
                className="card-6"
            />
        </Container>
    )
}
