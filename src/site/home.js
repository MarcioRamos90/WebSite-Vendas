import React from "react";
import "bootstrap-css-only";
import "./home.css";

export default props => (
  <div className="">
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h1>Sitemas de vendas, web chats, aplicativos mobile etc.</h1>
            <p>Tudo que sua empresa precisa para dar um UP!</p>
          </div>
        </div>
      </div>
    </section>

    <section className="sobre" id="sobre">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h2 className="h3">Sobre</h2>
            <p className="text-big">
              Meu nome é Márcio Alves Ramos e eu sou desenvolvedor web, posso
              fazer site, sitemas de vendas, web chats, aplicativos mobile etc.
            </p>
            <h2 className="h3">Preço ?</h2>
            <p className="text-big">
              Fale comigo pelo meus contatos e você irá se surpreender o quanto
              pode ser barato aumentar seu faturamento!!!
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- Page Footer--> */}
    <footer className="main-footer" id="contatos">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-offset-4">
            <div className="contact-details">
              <p>Sorocaba, SP</p>
              <p>+55 15 996042331</p>
              <p>
                Email:
                <a href="mailto:marcioalvesramos90@hotmail.com">
                  marcioalvesramos90@hotmail.com
                </a>
              </p>
            </div>
            <div className="col-md-4" />
          </div>
        </div>
      </div>
      <div className="copyrights">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <p>Marcio Ramos &copy; 2018.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>

    <script src="js/front.js" />
  </div>
);
