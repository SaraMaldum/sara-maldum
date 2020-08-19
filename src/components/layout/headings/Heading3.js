import styled from 'styled-components';

const Heading3 = styled.h3`
    color: ${function (props) {
        return props.theme.colors.purple;
    }};
`

export default Heading3;