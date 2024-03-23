import { useLocation, useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../Authentication/AuthContext';
import { json } from "../surveycomponents/json";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { themeJson } from "../surveycomponents/theme";

export const EditSurvey = () => {

  const { user } = useContext(AuthContext);
  const [surveyData, setSurveyData] = useState(null);
  const { state } = useLocation();
  const { surveyName } = useParams();
  const [survey, setSurvey] = useState(null);

  const storageItemKey = `survey-${surveyName}`;

  function saveSurveyData(survey) {
    const data = survey.data;
    data.pageNo = survey.currentPageNo;
    window.localStorage.setItem(storageItemKey, JSON.stringify(data));
  }

  survey.onValueChanged.add(saveSurveyData);
  survey.onCurrentPageChanged.add(saveSurveyData);
  

  const saveDataToApi = async () => {
    const data = window.localStorage.getItem(storageItemKey);
    if (data) {
      try {
        console.log(`Updating survey: ${surveyName}`);
        const response = await axios({
            method: 'post',
            url: 'http://ec2-3-79-60-215.eu-central-1.compute.amazonaws.com/api/update_survey',
            headers: {
                'username': user.username,
                'password': user.password
            },
            data: {
                survey_name: surveyName,
                survey_data: data
            }
        });

        if (response.status === 201) {
            console.log('Survey Updated successfully');
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
        url: 'http://ec2-3-79-60-215.eu-central-1.compute.amazonaws.com/api/get_survey',
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

  const handleBeforeUnload = (event) => {
    event.preventDefault();
    saveDataToApi();
  };

  useEffect(() => {
    GetSurvey(surveyName).then((response) => {
      const survey = new Model(json);
      const data = JSON.parse(response.data);
      survey.data = data;
      if(data.pageNo) {
        survey.currentPageNo = data.pageNo;
      }
      survey.applyTheme(themeJson);
      setSurvey(survey);
    });
  
    window.addEventListener('beforeunload', handleBeforeUnload);  
  }, [surveyName]);


  return (
    <div>
      {survey && <Survey model={survey} />}
  </div>
  );
};