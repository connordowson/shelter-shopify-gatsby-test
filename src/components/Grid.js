import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  gap: ${({ gap }) => gap};
  grid-template-columns: ${({ columns }) => columns};
  grid-template-rows: ${({ rows }) => rows};
`;

export default Grid;
