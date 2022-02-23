import { Container, LoadingMessage, CircleWrapper, Circle } from './styled';

type CircleLoadingProps = {
  message: string;
};

export const CircleLoading = ({ message }: CircleLoadingProps) => (
  <Container>
    <LoadingMessage>{message}</LoadingMessage>
    <CircleWrapper>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </CircleWrapper>
  </Container>
);
