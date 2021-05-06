import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import styled from "styled-components";

import { selectJobs } from "../features/jobs/jobsSlice";

import BackgroundDetailFooter from "../assets/desktop/bg-pattern-detail-footer.svg";

const JobDetails = () => {
  const jobs = useSelector(selectJobs);
  const { jobId } = useParams();

  const details = jobs && jobs.find((job) => job.id === jobId);
  console.log(details);

  return (
    <>
      {details && (
        <DetailsContainer>
          <DetailsWrapper>
            <JobImg src={details.company_logo} alt={details.company} />
            <JobHeader>
              <JobIdentity>
                <JobInfo>
                  <h3>{details.company}</h3>
                  <p>{details.company_url}</p>
                </JobInfo>
                <JobLink target="_blank" href={details.company_url}>
                  company site
                </JobLink>
              </JobIdentity>
            </JobHeader>
          </DetailsWrapper>

          <DescriptionWrapper>
            <p>
              {new Date(details.created_at).toLocaleDateString()} <span></span>{" "}
              {details.type}
            </p>
            <DescriptionHeader>
              <DescriptionTitle>
                <h2>{details.title}</h2>
                <button>Apply Now</button>
              </DescriptionTitle>
              <p>{details.location}</p>
            </DescriptionHeader>
            <JobDescription>
              <div dangerouslySetInnerHTML={{ __html: details.description }} />
            </JobDescription>
          </DescriptionWrapper>

          <HowToApply>
            <h3>How to Apply</h3>
            <div dangerouslySetInnerHTML={{ __html: details.how_to_apply }} />
          </HowToApply>

          <Footer>
            <JobInfo>
              <h3>{details.company}</h3>
              <p>{details.company_url}</p>
            </JobInfo>
            <JobLink target="_blank" href={details.company_url}>
              company site
            </JobLink>
          </Footer>
        </DetailsContainer>
      )}
    </>
  );
};

const DetailsContainer = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const DetailsWrapper = styled.div`
  height: 150px;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  margin-top: -40px;
  margin-bottom: 50px;
`;

const JobHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
`;

const JobIdentity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const JobInfo = styled.div`
  & h3 {
    color: #222;
    font-size: 24px;
    margin-bottom: 10px;
  }

  & p {
    color: grey;
    font-size: 14px;
  }
`;

const JobImg = styled.img`
  height: 100%;
  width: 20%;
  object-fit: cover;
`;

const JobLink = styled.a`
  padding: 15px 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #5964e0;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 14px;
  background-color: #eee;
`;

const DescriptionWrapper = styled.div`
  margin: 50px 0;
  padding: 30px;
  border-radius: 15px;
  box-shadow: -1px 10px 21px -2px rgba(0, 0, 0, 0.2);
  -webkit-box-shadow: -1px 10px 21px -2px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -1px 10px 21px -2px rgba(0, 0, 0, 0.2);

  & > p {
    color: grey;
  }

  & p {
    font-size: 18px;
    line-height: 1.5;
    display: flex;
    align-items: center;

    & span {
      background-color: grey;
      border-radius: 50%;
      width: 5px;
      height: 5px;
      margin: 0 5px;
    }
  }
`;

const DescriptionHeader = styled.div`
  & p {
    color: #5964e0;
    font-weight: 700;
    margin-top: -5px;
    margin-bottom: 25px;
  }
`;

const DescriptionTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    background-color: #5964e0;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    padding: 15px 30px;
    border-radius: 10px;
    letter-spacing: 1.5px;
  }
`;

const JobDescription = styled.div`
  p,
  ul {
    margin-bottom: 20px;
  }

  ul {
    padding-left: 40px;
  }
`;

const HowToApply = styled.div`
  height: 200px;
  width: 100%;
  padding: 20px 30px;
  margin-bottom: 60px;
  overflow: hidden;
  color: #fff;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url(${BackgroundDetailFooter});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;

  & a {
    color: #fff;
  }

  & h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

const Footer = styled.footer`
  padding: 30px 0;
  display: flex;
  justify-content: space-between;
`;

export default JobDetails;
