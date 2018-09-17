import React from 'react'
import kroneImage from '../images/krone.png'

const LeitbildPage = () => (
  <div id="leitbild" className="page leitbild">
    <p className="lead">
      Ich richte mich nach diesen Leitlinien:
    </p>
    <div className="row marketing">
      <div className="col-lg-4">
        <div
          className="glyphicon glyphicon-question-sign"
          style={{ fontSize: 40 }}
        />
        <h4>
          Verstehen, wie Sie arbeiten
        </h4>
        <p>
          Je mehr ich Ihre Arbeit verstehe,<br />
          je genauer die Anwendung Ihre Arbeit abbildet,<br />
          desto besser "passt" sie.
        </p>
        <p>
          Und desto kleiner ist das Risiko bei der Einführung.
        </p>
        <p>
          Wenn Menschen vom selben sprechen, verstehen nicht immer alle dasselbe.
          Klappt etwas nicht? Oft liegt der Hund hier begraben.
        </p>
      </div>
      <div className="col-lg-4">
        <div className="glyphicon glyphicon-retweet" style={{ fontSize: 40 }} />
        <h4>
          Sinn suchen
        </h4>
        <p>
          Menschen gewöhnen sich erstaunlich gut an Inkonsistenzen. Oft leidet darunter die Produktivität.
        </p>
        <p>
          Software versteht nur Logik.
        </p>
      </div>
      <div className="col-lg-4">
        <div
          className="glyphicon glyphicon-ok-circle"
          style={{ fontSize: 40 }}
        />
        <h4>
          So einfach wie möglich,<br />
          so vollständig wie nötig
        </h4>
        <p>
          Ist die Anwendung klar und übersichtlich, arbeiten Sie effizient.
        </p>
        <p>
          Beansprucht sie zu viel Aufmerksamkeit, passieren Fehler.
        </p>
        <p>
          Eine elegante Architektur beschleunigt die Entwicklung und reduziert den Unterhalt.
        </p>
      </div>
      <div className="col-lg-4">
        <div className="glyphicon glyphicon-wrench" style={{ fontSize: 40 }} />
        <h4>
          Geeignete Technologie wählen
        </h4>
        <p>
          Wer einen Hammer hat, ist verleitet, in allem einen Nagel zu erkennen.
        </p>
        <p>
          Sie kommen mit einer Schraube zu mir?
        </p>
        <p>
          Ich leite Sie zur Kollegin mit dem Schraubenzieher weiter.
        </p>
        <p>
          Oder lerne zu schrauben. Und freue mich über die angewandte Weiterbildung. Natürlich auf meine Kosten.
        </p>
      </div>
      <div className="col-lg-4">
        <img
          src={kroneImage}
          height="38"
          width="50"
          style={{ marginTop: 3 }}
          alt="Krone"
        />
        <h4 style={{ marginTop: 13 }}>
          Der Kunde ist König
        </h4>
        <p>
          Damit Sie zufrieden sind, braucht es mehr als eine gute Anwendung. Ich bin bestrebt:
        </p>
        <ul>
          <li>
            offen zu kommunizieren
          </li>
          <li>
            rechtzeitig zu agieren
          </li>
          <li>
            oder besser: einen Schritt voraus
          </li>
          <li>
            den Aufwand zu minimieren
          </li>
          <li>
            Vertrauen aufzubauen
          </li>
        </ul>
      </div>
    </div>
  </div>
)

LeitbildPage.displayName = 'LeitbildPage'

export default LeitbildPage
