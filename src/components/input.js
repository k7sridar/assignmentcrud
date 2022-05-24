import React from 'react';
import { useDispatch } from 'react-redux';

const Input = ({ info, setInfo, edit, setedit, submitFn, Eindex }) => {
  const dispatch = useDispatch();

  const fName = document.getElementById('Fname');
  const SName = document.getElementById('Sname');
  const FDate = document.getElementById('date');
  const updateFn = () => {
    dispatch({ type: 'up_Form', payload: { info: info, index: Eindex } });
    fName.value = '';
    SName.value = '';
    FDate.value = 'yyyy-MM-dd';
  };

  return (
    <div>
      <div className="ui inverted segment">
        <div className="ui inverted form">
          <div className="inline field">
            <div className="field">
              <label>FirstName</label>
              <input
                type="text"
                id="Fname"
                placeholder="first name"
                onChange={(e) =>
                  setInfo({ ...info, FirstName: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label>SecondName</label>
              <input
                type="text"
                id="Sname"
                placeholder="Second name"
                onChange={(e) =>
                  setInfo({ ...info, SecondName: e.target.value })
                }
              />
            </div>
            <div className="field">
              <label>DOB</label>
              <input
                type="date"
                id="date"
                placeholder="name"
                onChange={(e) => setInfo({ ...info, FDate: e.target.value })}
              />
            </div>
          </div>
          <div
            className="ui submit button"
            onClick={() => {
              if (!edit) {
                submitFn(info);
              } else {
                updateFn(Eindex);
              }
            }}
          >
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
