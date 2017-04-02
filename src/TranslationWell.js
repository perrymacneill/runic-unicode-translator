import React from 'react';
import { Fade, Well } from 'react-bootstrap';

const TranslationWell = (props) => (
  <Fade in={props.open} id="translation-well">
    <div>
      <Well>
        <h2>{props.content}</h2>
      </Well>
    </div>
  </Fade>
)


TranslationWell.propTypes = {
  open: React.PropTypes.bool.isRequired,
  content: React.PropTypes.string.isRequired
};

export default TranslationWell;
