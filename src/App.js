import React, { useEffect, useState } from "react";
import "./styles.css";
import logo from "./static/logo.png";

import { Button } from "./components/Button";
import { OnBoarding } from "./components/OnBoarding";

export default function App() {
  const ethereum = window.ethereum;

  const [addr, setAddr] = useState("");
  const [chainId, setChainId] = useState(0);

  const handleGetAcount = async (e) => {
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    setAddr(account);

    setChainId(parseInt(ethereum.chainId, 16));
  };

  useEffect(() => {
    if (ethereum) {
      console.info("ethereum");
      console.dir(ethereum);

      setChainId(parseInt(ethereum.chainId, 16));
      console.dir(ethereum.chainId);

      ethereum.on("accountsChanged", function (accounts) {
        setAddr(accounts[0]);
      });

      ethereum.on("chainChanged", function (_chainId) {
        setChainId(parseInt(_chainId, 16));
      });
    }
  }, [ethereum]);

  return (
    <div className='App'>
      <img alt='Peronio Logo' src={logo} className='logo' />
      <h1>Como arrancar?</h1>

      {ethereum && (
        //<a href="https://metamask.online/" target="_blank">
        <>
          <h3>Tenes Alpha Wallet instalado!</h3>
          <div>
            {!addr ? (
              <p>
                Hacé click en <b>Conectar a billetera</b>
              </p>
            ) : (
              ""
            )}
          </div>

          {!addr ? (
            <Button
              type='button'
              buttonStyle='btn--primary--outline'
              buttonSize='btn--large'
              onClick={handleGetAcount}
            >
              Conectar a Billetera
            </Button>
          ) : (
            <OnBoarding addr={addr} chainId={chainId} />
          )}
        </>
      )}
      <br />
      {!ethereum && (
        <p>
          <h1>Seguí estos pasos</h1>
          <p>Recomendamos hacerlo en una computadora</p>
          <h3>Primero bajate Metamask</h3>

          <div>
            <a target='blank' href='https://metamask.io/'>
              Descargar Metamask
            </a>
          </div>
          <p>Configurá la billetera y refrescá esta página</p>
        </p>
      )}
    </div>
  );
}
