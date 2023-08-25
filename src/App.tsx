import { useState, useEffect } from 'react'
import './App.css'
import TabsComponent from './tabs'
import { Button } from 'antd-mobile'

function App() {
  const [flag, setFlag] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlag(true)
    }, 2500)
    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
        <Button style={{ width: '120px' }} onClick={() => setFlag(!flag)}>切换</Button>
      </div>
    <TabsComponent showBodySizeFlag={flag} />
    </>
  )
}

export default App
