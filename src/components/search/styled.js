import styled from 'styled-components'

export const TGSearch = styled.form`
    display: flex;
    align-items: center;
    box-shadow: 0px 3px 6px ${({ theme }) => theme.color.fourth};
    background: #fff;
    overflow: hidden;
    border-radius: 48px;
    width: 100%;

    button {
        order: -1;
        border: 0;
        background: #fff;
        height: 40px;
        width: 48px;
        border-right: solid 1px #ccc;
    }
    input {
        flex: 1;
        min-width: 0;
        height: 48px;
        border: 0;
        background: #fff;
        padding: 0 15px;
        font-size: 16px;
        color: #7d7d7d;

        &::placeholder {
            color: #7d7d7d;
        }

        &:focus {
            outline: none;
        }
    }

    @media (min-width: 992px) {
        max-width: 445px;
    }
`
