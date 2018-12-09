import React, { Component } from "react";

class HowItWorks extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div class="about-services features-2">
          <div class="row">
            <div class="col-md-8 ml-auto mr-auto text-center">
              <h2 class="title">Veja como é simples receber doações</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="info info-horizontal">
                <div class="icon icon-rose">
                  <i class="material-icons">card_giftcard</i>
                </div>
                <div class="description">
                  <h4 class="info-title">1. Escolha uma doação</h4>
                  <p>
                    Crie uma conta. Acesse a sua plataforma preferida de doações
                    e procure por doações.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info info-horizontal">
                <div class="icon icon-rose">
                  <i class="material-icons">speaker_notes</i>
                </div>
                <div class="description">
                  <h4 class="info-title">2. Conte sua história</h4>
                  <p>
                    Aqui a "moeda" é a sua história. Ao mostrar interesse em uma
                    doação, diga o porquê você deve ganhar esta doação..
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="info info-horizontal">
                <div class="icon icon-rose">
                  <i class="material-icons">commute</i>
                </div>
                <div class="description">
                  <h4 class="info-title">3. Combine a entrega</h4>
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
