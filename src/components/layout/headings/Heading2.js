import styled from 'styled-components';

const Heading2 = styled.h2`
    color: ${function ( props ) {
        return props.theme.colors.darkPurple;
        }};
    text-align: center;
    margin-top: 40px;
`

export default Heading2;