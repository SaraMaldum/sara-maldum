import styled from 'styled-components';

const Heading1 = styled.h1`
    color: ${({ theme }) => theme.colors.darkPurple};
    border-bottom: 2px solid #2D0431;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

export default Heading1; 