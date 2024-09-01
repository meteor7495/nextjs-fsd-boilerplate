import { Button as MantineButton } from '@mantine/core';
import { IProps } from './button.types';

export const Button = ({ children }: IProps) => {
    return <MantineButton>{children}</MantineButton>;
};
