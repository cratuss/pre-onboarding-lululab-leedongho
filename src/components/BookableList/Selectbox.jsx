import styled from 'styled-components';
import { useEffect, useState, useContext } from 'react';
import { SelectDateContext, SelectTimeContext } from '../../App';

const allTime = ['10', '11', '12', '13', '14', '15', '16', '17', '18'];

const Selectbox = ({ exceptTime }) => {
  const [clickTime, setClickTime] = useState('');
  const [noshow, setNoshow] = useState(false);

  const { selectDate, setSelectDate } = useContext(SelectDateContext);
  const { selectTime, setSelectTime } = useContext(SelectTimeContext);

  const clickHandler = time => {
    setSelectTime(time);
    setClickTime(time);
  };

  useEffect(() => {}, []);

  return (
    <SelectboxBlock>
      <ul>
        {!noshow && (
          <>
            {allTime.map((time, index) => {
              if (!exceptTime.includes(time)) {
                return (
                  <li key={time + index} onClick={() => clickHandler(time)} style={{ backgroundColor: time === clickTime ? '#0a58ca' : 'white', color: time === clickTime ? 'white' : 'black' }}>
                    {time}:00
                  </li>
                );
              }
            })}
          </>
        )}
        {noshow && <p>예약 가능 시간대가 없습니다.</p>}
      </ul>
    </SelectboxBlock>
  );
};

const SelectboxBlock = styled.div`
  ul {
    max-width: 530px;
    display: flex;
  }
  li {
    border: 1px solid black;
    margin: 20px 0 20px 0;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export default Selectbox;