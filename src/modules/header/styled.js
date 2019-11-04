import styled from 'styled-components'

export const TGHeader = styled.header`
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: solid 1px #ccc;

    @media (min-width: 992px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 50px;
        margin-bottom: 50px;
    }
`

export const TGHeaderTitle = styled.h1`
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;

    span {
        font-weight: 400;
    }

    > * {
        margin-left: 5px;
    }
`
export const TGHeaderDescription = styled.h2`
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.text};
`
