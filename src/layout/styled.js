import styled from 'styled-components'

export const TGWrapper = styled.div`
    display: flex;
    align-items: stretch;
    min-height: 100vh;
`
export const TGNav = styled.div`
    flex: 0 1 60px;
    min-width: 0;
    background: ${(props) => props.theme.background.primary};
    box-shadow: 0px 3px 50px #00000029;

    @media (min-width: 992px) {
        flex: 0 0 130px;
    }
`
export const TGMain = styled.main`
    flex: 1;
    min-width: 0;
    margin: 20px;

    @media (min-width: 992px) {
        margin: 50px;
    }
`
