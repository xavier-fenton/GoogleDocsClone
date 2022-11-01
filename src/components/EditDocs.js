import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

//import firebase
import { updateDoc, collection, doc, onSnapshot } from 'firebase/firestore'

//
export default function EditDocs({ database }) {
  const [documentTitle, setDocumentTitle] = useState('')
  //updateDocsData
  const [docsDesc, setDocsDesc] = useState('')
  const collectionRef = collection(database, 'docsData')
  //getQuillData
  const getQuillData = (value) => {
    setDocsDesc(value)
  }
  //useParams
  let params = useParams()

  //useRef
  const isMounted = useRef()

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

  //getDATA
  const getData = () => {
    const document = doc(collectionRef, params.id)
    onSnapshot(document, (docs) => {
      setDocumentTitle(docs.data().title)
      setDocsDesc(docs.data().docsDesc)
    })
  }
  useEffect(() => {
    if (isMounted.current) {
      return
    }
    isMounted.current = true
    getData()
  }, [])
  
  return (
    <div key={docsDesc}>
      <h1>{documentTitle}</h1>
      <ReactQuill value={docsDesc} onChange={getQuillData} />
    </div>
  )
}
