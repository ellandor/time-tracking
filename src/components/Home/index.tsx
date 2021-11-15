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

const filterTypes = ['Daily', 'Weekly', 'Monthly']

export function Home() {
    const [content, setContent] = useState('Weekly')
    const [user, setUser] = useState({} as User)

    function toggleContent(value: string) {
        setContent(value)
    }

    useEffect(() => {
        API.get('/users').then(r => {
            setUser(r.data[0])
        })
    }, [])

    if (!user.info) return <></>

    return (
        <Container>
            <div className="profile-wrapper">
                <div className="top">
                    <Image
                        src={user.icon}
                        alt={user.name}
                        width={80}
                        height={80}
                        layout="fixed"
                    />

                    <div className="info">
                        <p>Report for</p>
                        <strong>Jeremy Robson</strong>
                    </div>
                </div>

                <nav>
                    <ul>
                        {filterTypes.map(k => (
                            <li key={k}>
                                <a
                                    className={content === k ? 'selected' : ''}
                                    onClick={() => toggleContent(k)}
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
                mainText={user.info[content][0].mainText}
                subText={user.info[content][0].subText}
                className="card-1"
            />
            <Card
                bg={'var(--soft-blue)'}
                icon="/images/icon-play.svg"
                title="Play"
                size={[90, 90]}
                mainText={user.info[content][1].mainText}
                subText={user.info[content][1].subText}
                className="card-2"
            />
            <Card
                bg={'var(--light-red)'}
                icon="/images/icon-study.svg"
                title="Study"
                size={[90, 90]}
                mainText={user.info[content][2].mainText}
                subText={user.info[content][2].subText}
                className="card-3"
            />
            <Card
                bg={'var(--lime-green)'}
                icon="/images/icon-exercise.svg"
                title="Exercise"
                size={[80, 60]}
                mainText={user.info[content][3].mainText}
                subText={user.info[content][3].subText}
                className="card-4"
            />
            <Card
                bg={'var(--violet)'}
                icon="/images/icon-social.svg"
                size={[80, 100]}
                title="Social"
                mainText={user.info[content][4].mainText}
                subText={user.info[content][4].subText}
                className="card-5"
            />
            <Card
                bg={'var(--yellow)'}
                icon="/images/icon-self-care.svg"
                title="Self Care"
                size={[75, 75]}
                mainText={user.info[content][5].mainText}
                subText={user.info[content][5].subText}
                className="card-6"
            />
        </Container>
    )
}
