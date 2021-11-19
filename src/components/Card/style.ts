import styled from 'styled-components'

export const Container = styled.div`
    background: ${props => props.style?.background};
    cursor: pointer;

    border-radius: 12px;
    overflow: hidden;


    .image-wrapper {
        position: relative;
        overflow: hidden;
        height: 2.7rem;

        span {
            position: relative;
            top: -1rem;
            left: calc(100% - ${props => props.style?.width + 'px'} - 3rem);
        }
    }


    .card-4 {
        // Card background icon
        .image-wrapper span {
            top: -0.1rem;
        }
    }

    .content-wrapper {
        background: var(--dark-blue);
        width: 100%;
        padding: 2rem;
        border-radius: 12px 12px 0 0;

        font-family: 'Rubik', sans-serif;
        color: white;

        &:hover {
            background: #34387a;
        }

        .content {
            margin: 0 auto;

            &__info {
                display: flex;
                flex-direction: column;
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;

                h2 {
                    font-weight: 400;
                    font-size: 1.1rem;
                }

                img:hover {
                    filter: brightness(170%);
                }
            }

            &__main-text {
                display: block;
                margin: 1.6rem 0 0.6rem;
                font-size: 3.2rem;
                font-weight: 300;
            }

            p {
                color: var(--pale-blue);
                font-size: 0.9rem;
            }
        }
    }

    @media (max-width: 425px) {
        .image-wrapper {
            height: 2.7rem;

            span {
                left: calc(100% - ${props => props.style?.width + 'px'} - 3rem);
            }
        }

        .content-wrapper {
            .content__info {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;

                .content__main-text {
                    margin: 0.7rem 0 0;
                    font-size: 1.9rem;
                }
            }
        }
    }
`
