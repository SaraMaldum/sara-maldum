import styled from 'styled-components';

const Heading3 = styled.h3`
    color: ${({theme}) => theme.colors.purple};

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`

export default Heading3;