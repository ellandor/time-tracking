import styled from 'styled-components'

export const Container = styled.div`
    overflow: hidden;
    width: 100%;

    background: ${props => props.style?.background};
    position: relative;
    cursor: pointer;

    &, .draft {
        border-radius: 12px;
    }
    
    .card > span {
        position: absolute;
        top: -1rem;
        left: calc(100% - ${props => props.style?.width + 'px'} - 3rem);
    }

    .card-4 {
        span {
            top: -.1rem;
        }
    }
    
    .draft {
        position: absolute;
        bottom: 0;
        background: var(--dark-blue);
        height: 81%;
        width: 100%;
        padding: 2rem;

        font-family: 'Rubik', sans-serif;
        color: white;

        &:hover {
            background: #34387a;
        }

        .content {
            margin: 0 auto;

            .info {
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
    
            strong {
                display: block;
                margin: 1.6rem 0 .6rem;
                font-size: 3.2rem;
                font-weight: 300;
            }
    
            p {
                color: var(--pale-blue);
                font-size: .9rem;
            }
        }
    }

    @media (max-width: 425px) {
        .card > span {
            left: calc(100% - ${props => props.style?.width + 'px'} - 3rem);
        }

        .draft {
            height: 73%;
            
            .content .info {
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                
                strong {
                    margin: 0;
                    font-size: 1.9rem;
                }
            }
        }
    }
`