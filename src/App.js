import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyCreator from "./SurveyCreator";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";

import "pretty-checkbox/dist/pretty-checkbox.css";
window["$"] = window["jQuery"] = $;


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="surveyjs">
          <SurveyCreator />
        </div>
      </div>
    );
  }
}

export default App;
