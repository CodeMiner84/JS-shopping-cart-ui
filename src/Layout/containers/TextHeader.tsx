import * as React from 'react';
import HeaderComponent from '../components/TextHeader';

type Props = {
  title: string;
};

const TextHeader: React.FC<Props> = ({ title }: Props) => (
  <HeaderComponent>{title}</HeaderComponent>
);

export default TextHeader;
