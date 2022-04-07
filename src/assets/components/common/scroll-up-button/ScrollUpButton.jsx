import React from "react";
import ScrollUpButton from "react-scroll-up-button";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <ScrollUpButton 
        StopPosition={0}
        ShowAtPosition={150}
        EasingType='easeOutCubic'
        AnimationDuration={500}
        style={{width: 60}} ToggledStyle={{right: 30}} />
      </div>
    );
  }
}

