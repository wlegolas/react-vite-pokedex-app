import styled, { keyframes } from 'styled-components';

const growAnimation = keyframes`
  from {
    transform: scale(0, 0);
    opacity: 0;
  }
  to {
    transform: scale(1, 1);
    opacity: 1;
  }
`;

const moveAnimation = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(45px);
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Message = styled.h2`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.5rem;
`;

export const DotsWrapper = styled.div`
  height: 15px;
  width: 105px;
  display: flex;
  position: relative;
`;

export const Dot = styled.span`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.black};
  animation: ${moveAnimation} 500ms linear 0ms infinite;
  margin-right: 30px;

  :first-child {
    position: absolute;
    top: 0;
    left: 0;
    animation: ${growAnimation} 500ms linear 0ms infinite;
  }

  :last-child {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 0;
    animation: ${growAnimation} 500ms linear 0s infinite reverse;
  }
`;
