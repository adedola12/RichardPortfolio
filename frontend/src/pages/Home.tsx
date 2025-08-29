import React from 'react'
import TopSection from '../components/Home/TopSection'
import Tools from '../components/Home/Tools'
import ProjectHighlight from '../components/Home/ProjectHighlight'
import ProjectSample from '../components/Home/ProjectSample'
import Impressed from '../components/Home/Impressed'
import RateForm from '../components/Home/RateForm'
import Brief from '../components/Home/Brief'

const Home = () => {
  return (
    <div className='text-white'>
      <TopSection />
      <Brief />
      <Tools />
      <ProjectHighlight/>
      <ProjectSample />
      <Impressed />
      <RateForm />
    </div>
  )
}

export default Home