import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Display = ({ info, setInfo, setedit, submitFn, setIndex }) => {
  const data = useSelector((data) => data.data);
  const dispatch = useDispatch();
  const remove = (index) => {
    dispatch({ type: 'del_Form', payload: index });
  };
  const update = (i) => {
    document.getElementById('Fname').value = data[i].FirstName;
    document.getElementById('Sname').value = data[i].SecondName;
    document.getElementById('date').value = data[i].FDate;
    setInfo(data[i]);
    setedit(true);
    setIndex(i);
    // submitFn(info, i);
  };

  return (
    <div>
      {data.map((v, i) => (
        <div className="ui cards" key={i}>
          <div className="card">
            <div className="content">
              <div className="header">{v.FirstName}</div>
              <div className="meta">{v.SecondName}</div>
              <div className="description">{v.FDate}</div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div
                  className="ui basic green button"
                  onClick={() => {
                    update(i);
                  }}
                >
                  Edit
                </div>
                <div
                  className="ui basic red button"
                  onClick={() => {
                    remove(i);
                  }}
                >
                  Delete
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Display;
