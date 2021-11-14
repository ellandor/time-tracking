import { Container } from './style'

import Image from 'next/image'

import { BsFillBriefcaseFill, BsFillChatDotsFill } from 'react-icons/bs'
import { IoLogoGameControllerB } from 'react-icons/io'
import { GiOpenBook, GiHeartPlus } from 'react-icons/gi'
import { BiRun } from 'react-icons/bi'

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
                    <Image src={user.icon} alt={user.name} width={80} height={80} layout="fixed" />

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
                icon={BsFillBriefcaseFill}
                title="Work"
                mainText={user.info[content][0].mainText}
                subText={user.info[content][0].subText}
                className="card-1"
            />
            <Card
                bg={'var(--soft-blue)'}
                icon={IoLogoGameControllerB}
                title="Play"
                mainText={user.info[content][1].mainText}
                subText={user.info[content][1].subText}
                className="card-2"
            />
            <Card
                bg={'var(--light-red)'}
                icon={GiOpenBook}
                title="Study"
                mainText={user.info[content][2].mainText}
                subText={user.info[content][2].subText}
                className="card-3"
            />
            <Card
                bg={'var(--lime-green)'}
                icon={BiRun}
                title="Exercise"
                mainText={user.info[content][3].mainText}
                subText={user.info[content][3].subText}
                className="card-4"
            />
            <Card
                bg={'var(--violet)'}
                icon={BsFillChatDotsFill}
                title="Social"
                mainText={user.info[content][4].mainText}
                subText={user.info[content][4].subText}
                className="card-5"
            />
            <Card
                bg={'var(--yellow)'}
                icon={GiHeartPlus}
                title="Self Care"
                mainText={user.info[content][5].mainText}
                subText={user.info[content][5].subText}
                className="card-6"
            />
        </Container>
    )
}