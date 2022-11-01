import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

//import firebase
import { updateDoc, collection, doc } from 'firebase/firestore'

//
export default function EditDocs({ database }) {
  //updateDocsData
  const [docsDesc, setDocsDesc] = useState('')
  const collectionRef = collection(database, 'docsData')
  //getQuillData
  const getQuillData = (value) => {
    setDocsDesc(value)
  }
  let params = useParams()

  //useEff
  useEffect(() => {
    const updateDocsData = setTimeout(() => {
      const document = doc(collectionRef, params.id)
      updateDoc(document, {
        docsDesc: docsDesc,
      })
        .then(() => {
          alert('Saved')
        })
        .catch(() => {
          alert('Cannot Save')
        })
    }, 1000)
    return () => clearTimeout(updateDocsData)
  }, [docsDesc])

  return (
    <div key={docsDesc}>
      <h1>EditDocs</h1>
      <ReactQuill value={docsDesc} onChange={getQuillData} />
    </div>
  )
}
