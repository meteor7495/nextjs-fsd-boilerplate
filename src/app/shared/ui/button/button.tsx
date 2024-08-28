import { Button as MantineButton } from '@mantine/core';

interface IProps {
  children: React.ReactNode;
}

export const Button = ({ children }: IProps) => {
  return <MantineButton>{children}</MantineButton>;
};
