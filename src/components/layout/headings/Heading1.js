import styled from 'styled-components';

const Heading1 = styled.h1`
    color: ${function (props) {
        return props.theme.colors.darkPurple;
    }};
    margin: 40px;
    text-align: center;
    border-bottom: 2px solid #2D0431;
`

export default Heading1; 