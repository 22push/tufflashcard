import React from 'react'
import Navbar from '../components/navbar'
import Addquestion from '../components/addquestion'
import Allquestion from '../components/question'
function AdminPage() {
  return (
    <>
    <Navbar/>
    <Addquestion/>
    <Allquestion/>
    </>
  )
}

export default AdminPage