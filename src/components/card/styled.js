import styled, { css } from 'styled-components'

export const TGList = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-flow: row wrap;
    margin: -20px;
`

export const TGFigure = styled.figure`
    position: relative;
    display: block;
    margin: 0;
    font-size: 0;

    img {
        width: ${(props) => props.width};
        height: ${(props) => props.height};
        object-fit: ${(props) => props.objectFit};
    }
    a {
        display: block;
    }
`
export const TGCard = styled.article`
    flex: 1 1 340px;
    min-width: 0;
    border-radius: 3px;
    transition: all 0.2s ease;

    ${TGFigure} {
        margin: -20px -20px 0;
    }
`

export const TGCardContainer = styled.div`
    margin: 20px;
    padding: 20px;
    height: calc(100% - 80px);

    ${(props) =>
        css`
            box-shadow: 0px 10px 20px ${props.theme.color.fourth};
            background: ${(props) => props.theme.background.primary};
        `}

    &:hover {
        box-shadow: none;
    }
`

export const TGCardMain = styled.div`
    padding: 10px 0 0;
`

export const TGCardMainHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TGCardPrice = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: ${(props) => props.theme.color.price};
    @media (min-width: 992px) {
        font-size: 20px;
    }
`
export const TGCardTitle = styled.div`
    margin: 10px 0;
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.theme.color.primary};
    @media (min-width: 992px) {
        font-size: 20px;
    }
`
export const TGCardDescription = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme.color.text};

    @media (min-width: 992px) {
        font-size: 14px;
    }
`

export const TGTags = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const TGTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 110px;
    height: 20px;
    font-size: 10px;
    font-weight: 400;
    background: ${(props) => props.bg};
    color: #fff;
    @media (min-width: 992px) {
        font-size: 12px;
    }
`

export const TGRadio = styled.label`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    font-size: 12px;
    line-height: 12px;
    color: ${({ theme }) => theme.color.text};
    input {
        opacity: 0;
        position: absolute;

        + span {
            display: inline-block;
            width: 20px;
            height: 12px;
            background: #a4a5bc;
            border-radius: 12px;
            text-align: right;
            margin-right: 3px;

            &:before {
                content: '';
                display: inline-block;
                width: 8px;
                height: 8px;
                border-radius: 50%;
                background: #fff;
                margin: 2px;
            }

            @media (min-width: 992px) {
                width: 26px;
            }
        }

        &:checked + span {
            background: #0086f8;
            text-align: left;
        }
    }
`

export const TGCardDescriptionLong = styled.div``

export const TGCardContent = styled.div`
    @media (min-width: 992px) {
        display: flex;
        align-items: flex-start;
        margin: -20px;

        ${TGFigure} {
            flex: 0 1 362px;
            min-width: 0;
            margin: 20px;
        }

        ${TGCardDescriptionLong} {
            flex: 1;
            min-width: 0;
            padding: 20px;
        }
    }
`
export const TGDatasheet = styled.div`
    ${TGCardTitle} {
        padding-bottom: 20px;
        margin: 50px 0 20px;
        border-bottom: solid 1px #ccc;
    }
    ul {
        display: block;
        font-size: 14px;
        font-weight: 400;
        color: ${({ theme }) => theme.color.text};
        padding: 0;
    }
    li {
        display: block;
        break-inside: avoid;
        list-style: none;
        line-height: 1.3;
        padding: 5px 0;

        &:before {
            content: '';
            display: inline-block;
            border-radius: 50%;
            vertical-align: middle;
            width: 5px;
            height: 5px;
            background: ${({ theme }) => theme.color.text};
            margin-right: 5px;
            margin-top: -3px;
        }
    }
    @media (min-width: 992px) {
        ul {
            column-count: 3;
        }
    }
`
