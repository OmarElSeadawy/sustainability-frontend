import AuthContext from '../Authentication/AuthContext';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const SurveyPage = () => {
  const { user } = useContext(AuthContext);
  const [surveys, setSurveys] = useState([]);
  let navigate = useNavigate();

  useEffect((loadSurveys) => {
    //loadSurveys();
  }, []);

  const loadSurveys = async () => {
    //const response = await axios.get('/api/surveys', { params: { userId: user.id } });
    //setSurveys(response.data);
  };

  const createSurvey = async () => {
    const surveyName = prompt("Please enter the survey name:");
    if (surveyName) {
      const newSurvey = { name: surveyName, userId: user.id, json: {} };
      setSurveys(prevSurveys => [...prevSurveys, newSurvey]);
  
      // Save the new survey to the database
      //await axios.post('/api/surveys', newSurvey);
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
            {surveys.map(survey => (
                <div key={survey.id} className="fs-4 text-body d-flex justify-content-between align-items-center">
                    <span>{survey.name}</span>
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