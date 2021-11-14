import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1440px;
    max-height: 512px;

    width: 95%;
    height: 100%;

    display: grid;
    gap: 20px;

    grid-template:
        'profile-wrapper card-1 card-2 card-3' 1fr
        'profile-wrapper card-4 card-5 card-6' 1fr / 1fr 1fr 1fr 1fr;

    .profile-wrapper {
        display: flex;
        flex-direction: column;

        position: relative;
        height: 100%;
        background: var(--dark-blue);
        
        &, .top {
            border-radius: 12px;
        }

        .top {
            display: flex;
            flex-direction: column;
        }

        nav {
            padding: 2rem;
            height: 33%;

            ul {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
    
                li a {
                    color: var(--desaturated-blue);
                    font-size: 1.1rem;

                    transition: color .3s ease-out;
                    cursor: pointer;

                    &:not(.selected):hover {
                        color: white;
                    }
                }
            }
    
            .selected {
                color: white;
            }
        }


        img {
            width: 80px;
            height: 80px;

            border: 2px solid white !important;
            border-radius: 50%;
        }

        p,
        strong {
            font-weight: 300;
        }

        p {
            margin-top: 2rem;
            margin-bottom: .2rem;

            font-size: 1rem;
            color: var(--pale-blue);
        }

        strong {
            font-size: 2.5rem;
            color: white;
        }

        .top {
            background: var(--blue);
            width: 100%;
            height: 67%;
            padding: 2rem;
        }
    }

    .profile-wrapper {
        grid-area: profile-wrapper;
    }
    .card-1 {
        grid-area: card-1;
    }
    .card-2 {
        grid-area: card-2;
    }
    .card-3 {
        grid-area: card-3;
    }
    .card-4 {
        grid-area: card-4;
    }
    .card-5 {
        grid-area: card-5;
    }
    .card-6 {
        grid-area: card-6;
    }

    @media (max-width: 768px) {
        max-height: initial;
        padding: 2rem;
    }

    @media (max-width: 768px) and (min-width: 426px) {
        grid-template:
            'profile-wrapper card-1' minmax(200px, 1fr)
            'profile-wrapper card-2' minmax(200px, 1fr)
            '.               card-3' minmax(200px, 1fr)
            '.               card-4' minmax(200px, 1fr)
            '.               card-5' minmax(200px, 1fr)
            '.               card-6' minmax(200px, 1fr) / minmax(150px, 1fr) 1fr;
    }

    @media (max-width: 425px) {
        grid-template:
            'profile-wrapper' 1fr
            'card-1' minmax(150px, 1fr)
            'card-2' minmax(150px, 1fr)
            'card-3' minmax(150px, 1fr)
            'card-4' minmax(150px, 1fr)
            'card-5' minmax(150px, 1fr)
            'card-6' minmax(150px, 1fr) / minmax(150px, 1fr);

        .profile-wrapper {
            .top {
                flex-direction: row;

                .info {
                    margin-left: 1rem;

                    strong {
                        font-size: 1.33rem;
                    }
                }
            }

            nav ul {
                flex-direction: row;
            }
        }
        
    }
`
