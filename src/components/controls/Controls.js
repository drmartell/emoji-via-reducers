import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.css';

const Controls = ({ controlsInfo }) => (
  <section className={styles.Controls}>
    {controlsInfo.map(({ text, action, count }) => 
      <button key={text} onClick={action}>
        {text} {!!count && `- ${count}`}
      </button>
    )}
  </section>
);

Controls.propTypes = {
  controlsInfo: PropTypes.array.isRequired
};

export default Controls;
