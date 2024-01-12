import React from 'react'
import { useLocation } from 'react-router-dom'

export const JobDetail = () => {
    const location = useLocation();
    const jobData = location.state.jobData;
    console.log(jobData)
  return (
    <div>JobDetail</div>
  )
}
