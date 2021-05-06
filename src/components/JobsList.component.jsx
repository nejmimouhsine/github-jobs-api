import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectJobs } from "../features/jobs/jobsSlice";
import styled from "styled-components";

const JobsList = () => {
  const history = useHistory();
  const jobs = useSelector(selectJobs);

  const goToDetailsPage = (id) => history.push(`/details/${id}`);

  return (
    <JobsListContainer>
      {jobs &&
        jobs.map((job) => (
          <JobContainer key={job.id} onClick={() => goToDetailsPage(job.id)}>
            <JobCompanyLogo src={job.company_logo} alt={job.company} />
            <JobPostedOn>
              {job.created_at} <span></span> {job.type}
            </JobPostedOn>
            <JobTitle>{job.title}</JobTitle>
            <JobCompany>{job.company}</JobCompany>
            <JobLocation>{job.location}</JobLocation>
          </JobContainer>
        ))}
    </JobsListContainer>
  );
};

const JobsListContainer = styled.div`
  width: 80%;
  margin: 50px auto;
  padding: 20px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
  gap: 25px;
  row-gap: 80px;
`;

const JobContainer = styled.div`
  border-radius: 10px;
  box-shadow: -1px 10px 40px -2px rgba(0, 0, 0, 0.1);
  padding: 20px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
`;

const JobCompanyLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  object-fit: cover;
  margin-top: -50px;
`;

const JobPostedOn = styled.p`
  color: grey;
  display: flex;
  align-items: center;
  font-size: 14px;

  & span {
    background-color: grey;
    border-radius: 50%;
    width: 5px;
    height: 5px;
    margin: 0 5px;
  }
`;

const JobTitle = styled.h3`
  font-size: 16px;
  font-weight: 700;
`;
const JobCompany = styled(JobPostedOn)`
  margin-bottom: 15px;
`;
const JobLocation = styled.h5`
  color: #5964e0;
`;

export default JobsList;
