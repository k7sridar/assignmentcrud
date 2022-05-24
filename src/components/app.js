import React, { useState } from 'react';
import Input from './input';
import Display from './display';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const [info, setInfo] = useState({
    FirstName: '',
    SecondName: '',
    FDate: '',
  });
  const [index, setindex] = useState(0);
  const [edit, setedit] = useState(false);
  const submitFn = (info, index) => {
    if (info.FirstName !== '' && info.SecondName !== '' && info.Date !== null) {
      dispatch({ type: 'add_Form', payload: { info, edit, index } });
      document.getElementById('Fname').value = '';
      document.getElementById('Sname').value = '';
      document.getElementById('date').value = 'yyyy-MM-dd';
      setInfo({});
      setedit(false);
    }
  };

  return (
    <div>
      <Input
        info={info}
        setInfo={setInfo}
        setedit={setedit}
        edit={edit}
        submitFn={submitFn}
        Eindex={index}
      />
      <Display
        info={info}
        setInfo={setInfo}
        setedit={setedit}
        edit={edit}
        submitFn={submitFn}
        setIndex={setindex}
      />
    </div>
  );
};
export default App;
