import React, { useState } from "react";
import { Button } from "../components/Button";
import { AddToken } from "./AddToken";

import Claimer from "./widgets/Claimer";
import usdcImage from "../static/usdc.png";
import peImage from "../static/pe.png";

export const FaucetBlock = ({ address }) => {
  const [claimPage, setClaimPage] = useState(false);
  async function nextStep() {
    setClaimPage(true);
  }

  return (
    <div>
      {claimPage ? (
        <Claimer account={address} />
      ) : (
        <div>
          <AddToken
            address={"0xc2768beF7a6BB57F0FfA169a9ED4017c09696FF1"}
            symbol={"PE"}
            decimals={6}
            image={peImage}
          />
          <br />
          <AddToken
            address={"0x2791bca1f2de4661ed88a30c99a7a9449aa84174"}
            symbol={"USDC"}
            decimals={6}
            image={usdcImage}
          />
          <br />
          <Button
            type='button'
            buttonStyle='btn--primary--outline'
            buttonSize='btn--large'
            onClick={nextStep}
          >
            Recibir Peronios
          </Button>
        </div>
      )}
    </div>
  );
};
