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
      const response = await axios({
        method: 'get',
        url: 'http://3.126.123.215:5000/api/get_all_surveys',
        headers: {
          'username': user.username,
          'password': user.password
        }
      });
  
      if (response.status === 200) {
        setSurveys(response.data.survey_names);
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error('Failed to load surveys'));
      }
    } catch (error) {
      console.error(error);
      return Promise.reject(error);
    }
  };

  const createSurvey = async () => {

    const surveyName = prompt('Please enter the survey name');
    const surveyData = JSON.stringify("NULL");

    if (surveyName === null || surveyName === '') {
        return;
    }

    try {
        const response = await axios({
            method: 'post',
            url: 'http://3.126.123.215:5000/api/create_survey',
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
            window.location.reload();
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error('Failed to create survey'));
        }
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
  };

  const deleteSurvey = async (surveyName) => {
    try {
        const response = await axios({
            method: 'post',
            url: 'http://3.126.123.215:5000/api/delete_survey',
            headers: {
                'username': user.username,
                'password': user.password
            },
            data: {
                'survey_name': surveyName
            }
        });

        if (response.status === 200) {
            window.location.reload();
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error('Failed to delete survey'));
        }
    } catch (error) {
        console.error(error);
        return Promise.reject(error);
    }
};

  const editSurvey = (surveyName) => {
    if (surveyName) {
      navigate(`/edit-survey/${surveyName}`);
    }
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
                    <button onClick={() => editSurvey(survey)} className="btn btn-primary rounded-pill py-2 px-3 animated zoomIn">Edit</button>
                    <button onClick={() => deleteSurvey(survey)} className="btn btn-primary rounded-pill py-2 px-3 animated zoomIn">Delete</button>
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