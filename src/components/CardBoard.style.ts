import styled from 'styled-components';

export const Wrapper = styled.div`
    .cardboard {
        display: -webkit-flex;
        -webkit-flex-direction: row;
        -webkit-flex-wrap: wrap;
        width: 500px;
        height: auto;
        min-height: 200px;
    }

    #flexbox .card {
        -webkit-flex: 130px 1;
    }
`