import styled from 'styled-components';

const Heading2 = styled.h2`
    color: ${({ theme }) => theme.colors.darkPurple};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export default Heading2;