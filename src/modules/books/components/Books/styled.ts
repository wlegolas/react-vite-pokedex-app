import styled from 'styled-components';

export const Container = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  width: 114rem;
  grid-gap: 6rem;
  grid-template-columns: repeat(auto-fit, minmax(42rem, 1fr));
  align-items: stretch;
`;

export const BookCard = styled.li`
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: $transition;

  &:hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.2);
  }
`;

export const BookPricture = styled.img`
  display: block;
  width: 100%;
  height: 18rem;
  object-fit: cover;
`;

export const BookCardContent = styled.div`
  padding: 3rem 3rem;
`;

export const BookCardHeading = styled.h1`
  font-size: 3rem;
  font-weight: ${(props) => props.theme.fontWeightMiddle};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 1.5rem;
  min-height: 70px;
`;

export const BookCardDescription = styled.div`
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  line-height: 1.7;
  color: #3d3d3d;
  margin-bottom: 2.5rem;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
`;

export const BookCardButton = styled.button`
  display: block;
  width: 100%;
  padding: 1.5rem;
  font-size: 2rem;
  text-align: center;
  color: #3363ff;
  background-color: #e6ecff;
  border: none;
  border-radius: 0.4rem;
  transition: 0.2s;
  cursor: pointer;

  span {
    margin-left: 1rem;
    transition: 0.2s;
  }

  &:hover,
  &:active {
    background-color: #dce4ff;

    span {
      margin-left: 1.5rem;
    }
  }
`;
