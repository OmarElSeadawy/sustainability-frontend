import AuthContext from '../Authentication/AuthContext';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const SurveyPage = () => {
  const { user } = useContext(AuthContext);
  const [surveys, setSurveys] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    loadSurveys();
  }, []);

  const loadSurveys = async () => {
    try {
      console.log(`Loading surveys for user: ${user}`);
      const response = await axios({
        method: 'get',
        url: 'http://ec2-3-79-60-215.eu-central-1.compute.amazonaws.com/api/get_all_surveys',
        headers: {
          'username': user.username,
          'password': user.password
        }
      });
  
      if (response.status === 200) {
        setSurveys(response.data.survey_names);
        console.log(response.data.survey_names)
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error('Failed to load surveys'));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  };

  const createSurvey = async (surveyData) => {
    const surveyName = prompt('Please enter the survey name');

    if (surveyName === null || surveyName === '') {
        console.log('No survey name entered');
        return;
    }

    try {
        console.log(`Creating survey: ${surveyName}`);
        const response = await axios({
            method: 'post',
            url: 'http://ec2-3-79-60-215.eu-central-1.compute.amazonaws.com/api/create_survey',
            headers: {
                'username': user.username,
                'password': user.password
            },
            data: {
                survey_name: surveyName,
                survey_data: surveyData
            }
        });

        if (response.status === 201) {
            console.log('Survey created successfully');
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error('Failed to create survey'));
        }
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
  };

  const deleteSurvey = async (surveyId) => {
    //await axios.delete(`/api/surveys/${surveyId}`);
    //loadSurveys();
  };

  const editSurvey = (surveyId) => {
    const surveyToEdit = surveys.find(survey => survey.id === surveyId);
    if (surveyToEdit) {
      navigate(`/edit-survey/${surveyId}`, { state: { surveyJson: surveyToEdit.json } });
    }
    // Send Name to get with name
  };

  return (
    <>
      <div className="container-fluid product py-2">
        <div className="container py-5">
          <div className="section-title text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px' }}>
            <p className="fs-3 fw-medium fst-italic text-primary">Your Surveys</p>
            {surveys.map((survey, index) => (
                <div key={index} className="fs-4 text-body d-flex justify-content-between align-items-center">
                    <span>{survey}</span>
                    <div>
                    <button onClick={() => editSurvey(survey.id)} className="btn btn-primary rounded-pill py-2 px-3 animated zoomIn">Edit</button>
                    <button onClick={() => deleteSurvey(survey.id)} className="btn btn-primary rounded-pill py-2 px-3 animated zoomIn">Delete</button>
                    </div>
                </div>
                ))}
            <button onClick={createSurvey} className="btn btn-primary rounded-pill py-3 px-5 animated zoomIn">+ New Survey</button>
          </div>
        </div>
      </div>
    </>
  );
};