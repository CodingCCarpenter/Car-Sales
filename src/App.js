import React from "react";

//redux imports
import { connect } from "react-redux";

//action imports
import { buyAction, removeAction } from "./actions";

//component imports
import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

const App = (props) => {
  const removeFeature = (item) => {
    return props.removeAction(item);
  };

  const buyItem = (item) => {
    return props.buyAction(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures removeFeature={removeFeature} car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures
          buyItem={buyItem}
          additionalFeatures={props.additionalFeatures}
        />
        <Total 
          car={props.car} 
          additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures
  };
};

export default connect(mapStateToProps, { buyAction, removeAction })(App);