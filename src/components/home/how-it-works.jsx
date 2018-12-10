import React, { Component } from "react";

class HowItWorks extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="about-services features-2">
          <div className="row">
            <div className="col-md-8 ml-auto mr-auto text-center">
              <h2 className="title">Veja como é simples receber doações</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="info info-horizontal">
                <div className="icon icon-rose">
                  <i className="material-icons">card_giftcard</i>
                </div>
                <div className="description">
                  <h4 className="info-title">1. Escolha uma doação</h4>
                  <p>
                    Crie uma conta. Acesse a sua plataforma preferida de doações
                    e procure por doações.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info info-horizontal">
                <div className="icon icon-rose">
                  <i className="material-icons">speaker_notes</i>
                </div>
                <div className="description">
                  <h4 className="info-title">2. Conte sua história</h4>
                  <p>
                    Aqui a "moeda" é a sua história. Ao mostrar interesse em uma
                    doação, diga o porquê você deve ganhar esta doação..
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="info info-horizontal">
                <div className="icon icon-rose">
                  <i className="material-icons">commute</i>
                </div>
                <div className="description">
                  <h4 className="info-title">3. Combine a entrega</h4>
                  <p>
                    Ao ser escolhido, combine com o doador a melhor forma de
                    entrega para a sua doação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HowItWorks;
