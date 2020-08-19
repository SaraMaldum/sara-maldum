import styled from 'styled-components';

const Heading2 = styled.h2`
    color: ${function ( props ) {
        return props.theme.colors.purple;
        }};
    text-align: center;
`

export default Heading2;