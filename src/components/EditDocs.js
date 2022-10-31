import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

//
export default function EditDocs() {
  const [docsDesc, setDocsDesc] = useState('')
  //getQuillData
  const getQuillData = (value) => {
    setDocsDesc(value)
  }
  let params = useParams()

  return (
    <div>
      <h1>EditDocs</h1>
      <ReactQuill value={docsDesc} onChange={getQuillData} />
    </div>
  )
}
