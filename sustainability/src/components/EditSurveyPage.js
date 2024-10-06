import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../Authentication/AuthContext';
import { json } from "../surveycomponents/json";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { SurveyPDF } from "survey-pdf";
import { themeJson } from "../surveycomponents/theme";

export const EditSurvey = () => {

  const { user } = useContext(AuthContext);
  const [ surveyData, setSurveyData ] = useState(null);
  const { surveyName } = useParams();
  const [survey, setSurvey] = useState(null);

  const storageItemKey = `survey-${surveyName}`;

  function createSurveyPdfModel (surveyModel) {
    
    const pdfWidth = !!surveyModel && surveyModel.pdfWidth ? surveyModel.pdfWidth : 210;
    const pdfHeight = !!surveyModel && surveyModel.pdfHeight ? surveyModel.pdfHeight : 297;
    const options = {
        fontSize: 14,
        margins: {
            left: 10,
            right: 10,
            top: 10,
            bot: 10
        },
        format: [pdfWidth, pdfHeight],
        
    };
    const surveyPDF = new SurveyPDF(json, options);
    if (surveyModel) {
        surveyPDF.data = surveyModel.data;
    }
    
    return surveyPDF;
  }
  function saveSurveyToPdf (filename, surveyModel) {
      createSurveyPdfModel(surveyModel).save(filename);
  }

  function saveSurveyData(survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
  }

  const saveDataToApi = async () => {
    const data = window.localStorage.getItem(storageItemKey);
    if (data) {
      try {
        const response = await axios({
            method: 'post',
            url: 'http://3.70.8.159:5000/api/update_survey',
            headers: {
                'username': user.username,
                'password': user.password
            },
            data: {
                survey_name: surveyName,
                survey_data: data
            }
        });
        if (response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error('Failed to update survey'));
        }
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
    }
  };

  const GetSurvey = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: 'http://3.70.8.159:5000/api/get_survey',
        headers: {
          'username': user.username,
          'password': user.password
        },
        params: {
          survey_name: surveyName
        }
      });
      if (response.status === 200) {
        setSurveyData(response.data);
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error('Failed to load survey'));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  };

  useEffect(() => {
    GetSurvey(surveyName).then((response) => {
      const survey = new Model(json);
      const data = JSON.parse(response.data);
      survey.data = data;
      if(data.pageNo) {
        survey.currentPageNo = data.pageNo;
      }
      survey.addNavigationItem({
        id: "surv-save-page",
        title: "Save",
        action: () => {
          saveDataToApi();
        }
      })

      survey.addNavigationItem({
        id: "survey_save_as_file",
        title: "Save as PDF",
        action: () => {
            saveSurveyToPdf("surveyResult.pdf", survey);
        }
      })

      survey.applyTheme(themeJson);
      survey.onValueChanged.add(saveSurveyData);
      survey.onCurrentPageChanged.add(saveSurveyData);
      setSurvey(survey);
    }).catch((error) => {
      console.error('Failed to fetch survey data:', error);
    });

  }, [surveyName]);


  return (
    <div>
      {survey && <Survey model={survey} />}
  </div>
  );
};