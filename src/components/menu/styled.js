import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const TGMenuItem = styled.div`
    display: block;
    text-align: center;
    border-top: solid 1px #ccc;
    margin: 0 20px;

    & + & {
        margin-top: 10px;
    }

    figure {
        margin: 0;
    }
`

export const TGMenuLink = styled(Link)`
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: ${(props) => props.theme.color.primary};
    text-decoration: none;
    padding: 20px 0 0;
    opacity: 0.5;
    ${(props) => props.actived === 'true' && 'opacity: 1;'}
    span {
        display: none;
    }

    img {
        max-width: 100%;
    }

    @media (min-width: 992px) {
        padding: 20px 0;
        span {
            display: inline-block;
        }
    }
`
