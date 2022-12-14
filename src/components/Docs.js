import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

//Docs Component
export default function Docs({ database }) {
  const [title, setTitle] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  let navigate = useNavigate()
  //docsData
  const [docsData, setDocsData] = useState([])

  //useRef
  const isMounted = useRef()

  //getData
  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      setDocsData(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )
    })
  }
  //UseEffect
  useEffect(() => {
    if (isMounted.current) {
      return
    }

    isMounted.current = true
    getData()
  })

  //getID
  const getID = (id) => {
    navigate(`/editDocs/${id}`)
  }

  //database

  const collectionRef = collection(database, 'docsData')

  const addData = () => {
    addDoc(collectionRef, {
      title: title,
      docsDesc: '',
    })
      .then(() => {
        alert('Data Added')
        handleClose()
      })
      .catch(() => {
        alert('Cannot add data')
      })
  }
  return (
    <div className="docs-main">
      <h1>Docs Clone</h1>

      <button className="add-docs" onClick={handleOpen}>
        Add a Document
      </button>

      <Modal
        open={open}
        setOpen={setOpen}
        title={title}
        setTitle={setTitle}
        addData={addData}
      />
      <div className="grid-main">
        {docsData.map((doc) => {
          return (
            <div
              className="grid-child"
              onClick={() => getID(doc.id)}
              key={doc.id}
            >
              <p>{doc.title}</p>
              <div dangerouslySetInnerHTML={{ __html: doc.docsDesc }} />
            </div>
          )
        })}
      </div>
    </div>
  )
}
