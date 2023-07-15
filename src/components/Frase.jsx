import styled from "@emotion/styled";

const ContenedorFrase = styled.div`
  background-color: #244533;
  color: #fff;
  padding: 2rem;
  max-width: 600px;
  text-align: center;
  font-size: 12px;
  border-radius: 12px;

  h1 {
    text-align: center;
    position: relative;
    padding-left: 3rem;

    &::before {
      content: open-quote;
      color: #000;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-size: 14px;
    text-align: end;
    color: #000;
    margin-top: 1rem;
    font-weight: bold;
  }
`;

const Frase = ({ frase }) => {
  const { quote, author } = frase;

  if (Object.keys(frase).length === 0) return null;
  return (
    <ContenedorFrase>
      <h1>{quote}</h1>
      <p>{author}</p>
    </ContenedorFrase>
  );
};

export default Frase;
