// tslint:disable:no-console
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1em;
  border-radius: 0.5em;
`;

const Log = styled.div`
  border: 1px solid black;
`;

const ClaimResponse = (props) => {
  return (
    <Container>
      <div>
        {props.response.status == 200 ? (
          <div>
            <div>
              <h3>Bienvenido compañero!</h3>
            </div>
            <div>{props.tx}</div>
          </div>
        ) : (
          <div>
            <div>
              <h3>Hubo un error</h3>
            </div>
            <div>{props.message}</div>
            <Log>
              <div>
                <h4>Log</h4>
              </div>
              <div>{JSON.stringify(props)}</div>
            </Log>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ClaimResponse;
