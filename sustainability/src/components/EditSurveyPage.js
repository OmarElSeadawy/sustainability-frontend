import "survey-react/survey.css";
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Model } from 'survey-core';
import React from "react";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "./theme";
import { json } from "./json";
import "survey-core/survey.i18n";
import "survey-core/i18n/arabic";

export const EditSurveyPage = () => {
  const { state } = useLocation();
  const { surveyId } = useParams();
  const surveyJson = state.surveyJson;

  const storageItemKey = `survey-${surveyId}`;

  const survey = new Model(surveyJson);
  survey.onValueChanged.add(() => saveSurveyData(survey));
  survey.onCurrentPageChanged.add(() => saveSurveyData(survey));

  const saveSurveyData = (survey) => {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
  };

  useEffect(() => {
    const prevData = window.localStorage.getItem(storageItemKey) || null;
    if (prevData) {
      const data = JSON.parse(prevData);
      survey.data = data;
      if (data.pageNo) {
        survey.currentPageNo = data.pageNo;
      }
    }

    return async () => {
      // Save the changes to the API when the component is unmounted
      await axios.put(`/api/surveys/${surveyId}`, { json: survey.data });
      // Empty the local storage after the survey is saved
      window.localStorage.setItem(storageItemKey, "");
    };
  }, [survey, surveyId]);

  return (
    <Survey model={survey} />
  );
};