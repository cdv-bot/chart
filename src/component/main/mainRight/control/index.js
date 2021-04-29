import React, { useContext } from 'react';
import { faExternalLinkAlt, faMinus, faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CounterContext } from './../../../main';
function Control({ hider }) {
  const counter = useContext(CounterContext);
  return (
    <>
      <div className='icon_cn'>
        <FontAwesomeIcon
          icon={faSyncAlt}
          className='icon_ld'
          style={{ cursor: 'pointer' }}
        />
        {
          hider ? null : <FontAwesomeIcon
            icon={faExternalLinkAlt}
            className="icon_ld"
            style={{ cursor: "pointer", marginLeft: "10px" }}
          />
        }

        <FontAwesomeIcon
          icon={faMinus}
          className='icon_ld'
          style={{ cursor: 'pointer' }}
          style={{ cursor: 'pointer' }}
          onClick={counter.handlerHide}
        />
      </div>
    </>
  );
}

export default Control;