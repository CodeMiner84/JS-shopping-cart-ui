import styled from 'styled-components';
import { Card } from 'antd';
const { Meta } = Card;

export default styled(Meta)`
  .ant-card-meta-title {
    text-shadow: 1px 1px #aaa;
    color: #000;
  }
  .ant-card-meta-description {
    height: 42px;
    overflow: hidden;
  }
`;
