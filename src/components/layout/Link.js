import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.purple};
    font-weight: bold;

    &:hover {
        color: ${({ theme }) => theme.colors.purple};
        font-style: italic;
        text-decoration: none;
    }
` 

export default StyledLink;