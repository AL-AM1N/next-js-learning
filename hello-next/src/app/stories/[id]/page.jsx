import React from 'react'

const StoryDetailsPage = async({ params }) => {
    const {id} = await params;
    console.log(id);
  return (
    <div>
      <h2>Story Details page of id: {id}</h2>
    </div>
  )
}

export default StoryDetailsPage
