import React, { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { updateDoc, collection, doc, onSnapshot } from 'firebase/firestore'

//Component EditDocs
export default function EditDocs({ database }) {
  const isMounted = useRef()
  const collectionRef = collection(database, 'docsData')
  let params = useParams()
  const [documentTitle, setDocumentTitle] = useState('')
  const [docsDesc, setDocsDesc] = useState('')
  const getQuillData = (value) => {
    setDocsDesc(value)
  }
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
    <div className="editDocs-main">
      <h1>{documentTitle}</h1>
      <div className="editDocs-inner">
        <ReactQuill
          className="react-quill"
          value={docsDesc}
          onChange={getQuillData}
        />
      </div>
    </div>
  )
}
