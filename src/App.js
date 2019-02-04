import React from 'react';
import './App.css';
import { Button } from 'antd';
import AttributeModalSelect from './components/AttributeModalSelect';

const App = () => {
  const [show, updateShow] = React.useState(false);
  const clickHandler = () => {
    updateShow(!show);
  }
  return (
    <div>
      <Button type="primary" onClick={clickHandler}>
        Open Modal
      </Button>
      <AttributeModalSelect
        isOpen={show}
        options={['L', 'S', 'M', 'XL', 'XLL']}
        shouldCloseOnSelect={true}
        onValueSelect={i => updateShow(false)}
      />
    </div>
  );
}

export default App;
