import * as React from 'react';
import HeaderComponent from '../components/TextHeader';

type Props = {
  title: string;
};

const TextHeader: React.SFC<Props> = ({ title }: Props) => (
  <HeaderComponent>{title}</HeaderComponent>
);

export default TextHeader;
