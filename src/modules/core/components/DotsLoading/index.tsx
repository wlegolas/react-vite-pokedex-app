import { Container, Message, DotsWrapper, Dot } from './styled';

type DotsLoadingProps = {
  message: string;
};

export const DotsLoading = ({ message }: DotsLoadingProps) => (
  <Container>
    <Message>{message}</Message>
    <DotsWrapper>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </DotsWrapper>
  </Container>
);
