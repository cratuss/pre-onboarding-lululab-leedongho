import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { SelectTimeContext } from '../../App';
import { useContext } from 'react';

const MoveButton = () => {
  const navigate = useNavigate();
  const { selectTime, setSelectTime } = useContext(SelectTimeContext);

  return (
    <MoveButtonBlock>
      <Button variant='primary' size='lg' onClick={() => navigate('../')} active>
        이전
      </Button>
      <Button variant={selectTime ? 'primary' : 'secondary'} size='lg' onClick={() => navigate('../form')} style={{ cursor: selectTime ? 'pointer' : 'default' }} active>
        예약정보 입력
      </Button>
    </MoveButtonBlock>
  );
};

const MoveButtonBlock = styled.div`
  display: flex;
  padding: 10px;
  width: 46%;
  button {
    width: 100%;
    margin: 0 10px 0 10px;
    border: none;
  }
`;

export default MoveButton;