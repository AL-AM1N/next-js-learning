import React from 'react'

const TutorialPage = async({params}) => {
    const result = await params;
    console.log(result);
  return (
    <div>
      This is tutorials page
    </div>
  )
}

export default TutorialPage
