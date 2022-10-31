import React, { useEffect, useRef, useState } from 'react'
import Modal from './Modal'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'

//Docs Component
export default function Docs({ database }) {
  const [title, setTitle] = useState('')
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  //useRef
  const isMounted = useRef()

  //getData
  const getData = () => {
    onSnapshot(collectionRef, (data) => {
      console.log(
        data.docs.map((doc) => {
          return { ...doc.data(), id: doc.id }
        })
      )
    })
  }
  //UseEffect
  useEffect(() => {
    getData()
  })

  //database

  const collectionRef = collection(database, 'docsData')

  const addData = () => {
    addDoc(collectionRef, {
      title: title,
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
    </div>
  )
}
