import React from 'react'
import jobs from "../jobs.json"
import JobListing from "./JobListing"


const JobListings = ( { isHome=false}) => { //💡 這種寫法通常用在 React Functional Components，因為 props 傳進來時就是一個物件！
  const JobListings = isHome ? jobs.slice(0,3) : jobs;
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          { isHome ? 'Recent Jobs' : 'All Jobs' }
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {JobListings.map((job) => (
            <div className="bg-white rounded-xl shadow-md relative">
            <JobListing key={job.id} job={job}></JobListing>
            </div>
          ))}




        </div>
      </div>
  </section>
  )
}

export default JobListings