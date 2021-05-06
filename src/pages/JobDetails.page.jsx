import React from "react";
import { useParams } from "react-router";

const JobDetails = () => {
  const { jobId } = useParams();
  return (
    <div>
      <h1>{jobId}</h1>
    </div>
  );
};

export default JobDetails;
