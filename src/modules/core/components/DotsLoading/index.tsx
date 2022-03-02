import { ReactNode } from 'react';
import { Container, DotsWrapper, Dot } from './styled';

type DotsLoadingProps = {
  children: ReactNode
};

export const DotsLoading = ({ children }: DotsLoadingProps) => (
  <Container>
    {children}
    <DotsWrapper>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </DotsWrapper>
  </Container>
);
