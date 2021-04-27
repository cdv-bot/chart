import React, { Component } from 'react';
import MainCenter from './mainCenter';
import MainLeft from './mainLeft';
import MainRight from './mainRight';
import SelectList from './selectList';

function Main() {
  const [id, setId] = React.useState(1);
  const handleListTask = (id) => {
    setId(id);
  }
  return (
    <div className="App__content">
      <MainLeft />
      <MainCenter />
      <MainRight handlerIdSelect={id} />
      <div className="select">
        <SelectList handleListTask={handleListTask} />
      </div>
    </div>
  );

}

export default Main;
