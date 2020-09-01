import firebase from 'firebase'
import 'firebase/storage'
import React, { useState } from 'react'

import FileUploader from 'react-firebase-file-uploader'
import { Button, TextField, LinearProgress } from '@material-ui/core'

var firebaseConfig = {
  apiKey: 'AIzaSyAL_o1mgA5XKlZGclFt0RfKJh4kNRPUKOI',
  authDomain: 'dtangle-io.firebaseapp.com',
  databaseURL: 'https://dtangle-io.firebaseio.com',
  projectId: 'dtangle-io',
  storageBucket: 'dtangle-io.appspot.com',
  messagingSenderId: '838787889938',
  appId: '1:838787889938:web:333c63aecb1869eb8e11cb',
  measurementId: 'G-DG02RLYJ6X'
}
// Initialize Firebases
if (firebase.apps.length < 1) {
  firebase.initializeApp(firebaseConfig)
  // firebase.analytics()
}

const ProfilePage = (props) => {
  const [username, setUsername] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, seError] = useState('')

  const handleChangeUsername = (event) => setUsername(event.target.value)

  const handleUploadStart = () => {
    setIsUploading(true)
    setProgress(0)
  }

  const handleProgress = (progress) => setProgress(progress)
  const handleUploadError = (error) => {
    setIsUploading(false)
    console.error(error)
    if (error) {
      seError(String(error))
    }
  }

  const handleVidChange = (url) => {
    console.log({ url })
    props.setVideo(url)
  }

  const handleUploadSuccess = (filename) => {
    setProgress(100)
    setIsUploading(false)
    firebase
      .storage()
      .ref('images')
      .child(filename)
      .getDownloadURL()
      .then((url) => {
        handleVidChange(url)
      })
  }

  return (
    <div>
      <form>
        <TextField
          type='text'
          value={username}
          name='username'
          onChange={handleChangeUsername}
          fullWidth
          label='Username:'
        />
        {isUploading && (
          <LinearProgress variant='determinate' value={progress} />
        )}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <br />
        <br />
        <Button
          variant='contained'
          size='large'
          color='primary'
          style={{ padding: 0 }}
          disabled={isUploading}
        >
          <label style={{ margin: 10 }}>
            <FileUploader
              accept='video/*'
              name='avatar'
              randomizeFilename
              storageRef={firebase.storage().ref('images')}
              onUploadStart={handleUploadStart}
              onUploadError={handleUploadError}
              onUploadSuccess={handleUploadSuccess}
              onProgress={handleProgress}
              hidden
            />
            Upload a video
          </label>
        </Button>
        <br />
        <br />

        <br />
        <br />
      </form>
    </div>
  )
}

export default ProfilePage
