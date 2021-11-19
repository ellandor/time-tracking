import styled from 'styled-components'

export const Container = styled.div`
    max-width: 1440px;
    max-height: 512px;

    width: 95%;

    display: grid;
    gap: 1.6rem;

    grid-template:
        'main-card card-1 card-2 card-3' 1fr
        'main-card card-4 card-5 card-6' 1fr
        / 1fr 1fr 1fr 1fr;

    .main-card {
        display: flex;
        flex-direction: column;

        position: relative;
        height: 100%;
        background: var(--dark-blue);

        &,
        .profile {
            border-radius: 12px;
        }

        .profile {
            display: flex;
            flex-direction: column;

            background: var(--blue);
            width: 100%;
            height: 67%;
            padding: 2rem;

            &__image {
                width: 80px;
                height: 80px;

                // Override next/image border
                border: 2px solid white !important;

                border-radius: 50%;
            }

            &__info {
                p,
                .profile__username {
                    font-weight: 300;
                }

                p {
                    margin-top: 2rem;
                    margin-bottom: 0.2rem;

                    font-size: 1rem;
                    color: var(--pale-blue);
                }

                .profile__username {
                    font-size: 2.5rem;
                    color: white;
                }
            }
        }

        .stats {
            padding: 2rem;
            height: 33%;

            &__selected {
                color: white;
            }

            ul {
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;

                li a {
                    font-size: 1.1rem;

                    transition: color 0.3s ease-out;
                    cursor: pointer;

                    &:not([class*='stats__selected']) {
                        color: var(--desaturated-blue);

                        &:hover {
                            color: white;
                        }
                    }
                }
            }
        }
    }

    .main-card {
        grid-area: main-card;
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
            'main-card card-1' 1fr
            'main-card card-2' 1fr
            'card-3    card-5' 1fr
            'card-4    card-6' 1fr / 1fr 1fr;
    }

    @media (max-width: 425px) {
        grid-template:
            'main-card' 1fr
            'card-1' auto
            'card-2' auto
            'card-3' auto
            'card-4' auto
            'card-5' auto
            'card-6' auto / 1fr;

        .main-card {
            .profile {
                flex-direction: row;

                &__info {
                    margin-left: 1rem;

                    .profile__username {
                        font-size: 1.33rem;
                    }
                }
            }

            .stats ul {
                flex-direction: row;
            }
        }
    }
`
