import React, { Component, useContext } from 'react';
import MainCenter from './mainCenter';
import MainLeft from './mainLeft';
import MainRight from './mainRight';
import SelectList from './selectList';
export const CounterContext = React.createContext();

function Main() {
  const [id, setId] = React.useState(1);
  const [changeHide, setChangeHide] = React.useState(true);
  const counter = useContext(CounterContext);
  const handleListTask = (id) => {
    setId(id);
  }
  const handlerHide = () => {
    setChangeHide(false);
  }
  const handlerShow = () => {
    setChangeHide(true);

  }
  return (

    <div className="App__content" style={changeHide ? { gridTemplateColumns: '1fr 370px 400px' } : { gridTemplateColumns: '1fr 400px' }}>
      <MainLeft />
      <MainCenter />
      <CounterContext.Provider value={{
        handlerHide: handlerHide
      }}>
        {
          changeHide ? <MainRight handlerIdSelect={id} /> : null
        }
      </CounterContext.Provider>

      <div className="select">
        <SelectList handlerShow={handlerShow} handleListTask={handleListTask} />
      </div>
    </div>
  );

}

export default Main;
