import styled from "styled-components";

const TabContainer = styled.div<{ active?: boolean }>`
  min-width: 200px;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 0.75rem;
  margin: 0.25rem 0;
  cursor: pointer;
  border-radius: ${(props) => props.theme.radius.small};
  font-weight: 600;
  font-size: 0.95rem;
  background-color: ${(props) => props.active && props.theme.color.tab};
  color: ${(props) => props.theme.color.lightText};

  svg {
    color: ${(props) => (props.active ? props.theme.color.primary : props.theme.color.text)};
  }

  &:hover {
    color: ${(props) => !props.active && props.theme.color.black};
    background: ${(props) => !props.active && props.theme.color.lightGray};

    svg {
      color: ${(props) => !props.active && props.theme.color.black};
    }
  }
`;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;

  h3 {
    margin-top: 15px;
    color: ${(props) => props.theme.color.text};
  }

  p {
    font-size: 0.95rem;
    color: ${(props) => props.theme.color.text};
  }
`;

const TabList = styled.nav`
  flex: 0 0 220px;
  height: 100%;
  margin-top: 15px;
  padding-right: 15px;
  padding-left: 40px;
  margin-right: 15px;
  border-right: 1px solid ${(props) => props.theme.color.border};
`;

const TabContent = styled.div`
  flex: 1;
  height: 100%;
  height: 60vh;
  max-height: 500px;
  overflow-y: auto;
  padding-right: 40px;

  p {
    margin: 10px 0;
  }
`;

export { TabContainer, TabsContainer, TabList, TabContent };