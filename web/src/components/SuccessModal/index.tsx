import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

import './styles.css';

interface Props{
  onClickHide: () => void;
  show: boolean;
}

const SuccessModal: React.FC<Props> = ({ onClickHide, show }) => {
  const showClasseName = show ? "display-block" : "display-none";
  return(
    <div className={[ showClasseName, "overlay" ].join(' ')} onClick={ onClickHide } >
      <p>
        <FiCheckCircle />
        Sucesso!
      </p>
    </div>
  );
}

export default SuccessModal;