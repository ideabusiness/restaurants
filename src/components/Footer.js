import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Paieškos įrankį sukūrė Jelizaveta Potapova. Kavinių sąrašas paimtas iš <a href="http://www.auginupametinukus.lt/titulinis/vaikams-draugisku-kaviniu-lietuvoje-sarasas/" target="_blank">"Auginu Pametinukus"</a>.
          <br/>Atsiliepimai/pasiūlymai laukiami el. paštu potapova.jelizaveta@gmail.com
        </p>
        <p> </p>
      </footer>
    );
  }
}

export { Footer };
