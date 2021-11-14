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
    
    .card > svg {
        position: absolute;
        top: -.5rem;
        left: 70%;
        transform: rotate(40deg);
        filter: brightness(.7);
        opacity: .5;
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
    
                h2 {
                    font-weight: 400;
                    font-size: 1.1rem;
                }
    
                svg:hover {
                    fill: white;
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
        .card > svg {
            left: 75%;
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