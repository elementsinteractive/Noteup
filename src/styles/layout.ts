import styled from "styled-components";

type FlexProps = {
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  justifyContent?: string;
  alignItems?: string;
  gap?: number;
};

export const Flex = styled.div<FlexProps>`
  position: relative;
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: ${(props) => props.gap || 0}px;
`;

export const FlexColumn = styled(Flex)<FlexProps>`
  flex-direction: column;
`;

export const Ellipsis = styled.div`
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
`;
