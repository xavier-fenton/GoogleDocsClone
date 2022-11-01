import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

//import firebase
import { updateDoc, collection, doc } from 'firebase/firestore'
import { database } from '../firebaseConfig'

//
export default function EditDocs(id) {
  const [docsDesc, setDocsDesc] = useState('')
  //getQuillData
  const getQuillData = (value) => {
    setDocsDesc(value)
  }
  let params = useParams(id)

  //updateDocsData
  const collectionRef = collection(database, 'docsData')

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
    }, 5000)
    return () => clearTimeout(updateDocsData)
  }, [docsDesc])

  return (
    <div key={docsDesc}>
      <h1>EditDocs</h1>
      <ReactQuill value={docsDesc} onChange={getQuillData} />
    </div>
  )
}
