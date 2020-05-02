import React, { Component } from "react";
import * as SurveyJSCreator from "survey-creator";
import * as SurveyKo from "survey-knockout";
import $ from "jquery";
import * as widgets from "surveyjs-widgets";
import "select2/dist/js/select2.js";

import "survey-creator/survey-creator.css";
import "jquery-ui/themes/base/all.css";
import "select2/dist/css/select2.css";
import "jquery-bar-rating/dist/themes/css-stars.css";
import "jquery-bar-rating/dist/themes/fontawesome-stars.css";
import "pretty-checkbox/dist/pretty-checkbox.css";

SurveyJSCreator.StylesManager.applyTheme("default");

widgets.prettycheckbox(SurveyKo);
widgets.select2(SurveyKo, $);
widgets.inputmask(SurveyKo);
widgets.select2tagbox(SurveyKo, $);
widgets.ckeditor(SurveyKo);

class SurveyCreator extends Component {
  surveyCreator;
  componentDidMount() {
    let options = {
      showEmbededSurveyTab: false,
      showDesignerTab: true,
      showTestSurveyTab: false,
      showToolbox: true,
      showPropertyGrid: true,
      questionTypes: ["text", "checkbox", "radiogroup", "dropdown", "file"]
    };
    this.surveyCreator = new SurveyJSCreator.SurveyCreator(
      "surveyCreatorContainer",
      options
    );
    const surveySettingsAction = this.surveyCreator.toolbarItems()
      .find((item) => item.id === "svd-survey-settings");
    this.surveyCreator.toolbarItems.remove(surveySettingsAction);
    this.surveyCreator.showToolbox = "right";
    this.surveyCreator.showPropertyGrid = "right";
    this.surveyCreator.rightContainerActiveItem("toolbox");
    this.surveyCreator.saveSurveyFunc = this.saveMySurvey;
  }
  render() {
    return <div id="surveyCreatorContainer" />;
  }
  saveMySurvey = () => {
    console.log(JSON.stringify(this.surveyCreator.text));
  };
}

export default SurveyCreator;
