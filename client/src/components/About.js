import React from "react";
import Wacommerce from "./wacommerce.png";

class About extends React.Component {
  render() {
    return (
      <article data-name="article-full-bleed-background">
        <div className="cf">
          <img
            src={Wacommerce}
            alt="logo"
            style={{
              height: "100%",
              padding: "80px",
              backgroundSize: "cover no-repeat center center fixed",
            }}
          ></img>

          <div className="fl pa3 pa4-ns bg-white black-70 measure-narrow f3 times">
            <header className="bb b--black-70 pv4">
              <h3 className="f2 fw7 ttu tracked lh-title mt0 mb3 avenir">
                Wacommerce
              </h3>
              <h4 className="f3 fw4 i lh-title mt0 red">
                La nouvelle technologie à petit prix
              </h4>
            </header>
            <section className="pt5 pb4">
              <p className="times lh-copy measure f4 mt0">
                Wacommerce est le (super) marché des produits reconditionnés. Le
                concept de Wacommerce est simple, mais radical : mettre
                directement en relation les consommateurs avec des
                professionnels du reconditionnement (usines, marques et
                distributeurs), via une seule et même plateforme. Avec une
                ambition folle : créer une alternative mainstream à l’achat de
                produits neuf 🚀 Fidèle à nos valeurs écologiques, nous avons
                mis en place la stratégie de gestion de produits nommée "The 3
                R'S": Reduce Reuse Recycle
              </p>
            </section>
          </div>
        </div>
      </article>
    );
  }
}

export default About;
