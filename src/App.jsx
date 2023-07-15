import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Frase from "./components/Frase";

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #ff7f50 0%,
    #ff7f40 40%,
    #ff7f00 100%
  );
  background-size: 300px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 3rem;
  padding: 1rem 2rem;
  color: #fff;
  font-weight: bold;
  font-size: 2rem;
  border: 1px solid #d1d1d1;
  border-radius: 12px;
  transition: background-size 0.3s ease;
  &:hover {
    cursor: pointer;
    color: #000;
    border: 2px solid #000;
  }
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4rem;
`;
const App = () => {
  const [frase, setFrase] = useState({});

  useEffect(() => {
    consularApi();
  }, []);

  const consularApi = async () => {
    // const api = fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    // const frase = api.then((res) => res.json());
    // frase.then((data) => console.log(data));
    const api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const frase = await api.json();
    setFrase(frase[0]);
  };
  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consularApi}>Get phrase</Boton>
    </Contenedor>
  );
};

export default App;
