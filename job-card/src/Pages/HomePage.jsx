import React from 'react'
import Hero from '../components/Hero/Hero'
import HomeCards from '../components/HomeCards/HomeCards'
import JobListings from '../components/JobListings/JobListings'
import ViewAllJobs from '../components/ViewAllJobs/ViewAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome = {true}/>
      <ViewAllJobs />
    </>
  )
}

export default HomePage
