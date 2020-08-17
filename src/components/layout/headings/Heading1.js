import styled from 'styled-components';

const Heading1 = styled.h1`
    color: ${function (props) {
        return props.theme.colors.darkPurple;
    }};
    margin: 40px 0 10px 0;
    text-align: center;
`

export default Heading1; 