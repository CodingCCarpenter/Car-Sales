import React from 'react';

import AddedFeature from './AddedFeature';

const AddedFeatures = (props) => {
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature 
              key={item.id} 
              feature={item} 
              removeFeature = {props.removeFeature}/>
          ))}
        </ol>
      ) : (
        <p>Add items from the list on the right to get started!</p>
      )}
    </div>
  );
};

export default AddedFeatures;
