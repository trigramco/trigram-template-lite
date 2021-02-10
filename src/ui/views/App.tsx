import React, { useState, useEffect } from 'react'
import VBox from '@/ui/components/VBox'
import Button from '@/ui/components/Button'
import Heading from '@/ui/components/Heading'

interface AppProps {}

const TRIGRAMS = ['☰', '☱', '☲', '☳', '☴', '☵', '☶', '☷']

function App({}: AppProps) {

  const [count, setCount] = useState(0)

  useEffect(() => {
    
    const interval = setInterval(() => {
      (count >= 7)
        ? setCount(0)
        : setCount(count + 1)  
    }, 2000);
    
    return () => clearInterval(interval);
  
  }, [count, setCount]);


  return (
    <VBox center vcenter className='bg-black min-w-full min-h-screen'>
      <Heading size={1} color={'gray-800'}>TRIGRAM-TEMPLATE-LITE</Heading>

      <br /><br />

      <div className='text-9xl text-white transition-all'>{TRIGRAMS[count]}</div>

      <br /><br />

      <Heading size={1} color={'white'}>Header - 1</Heading>
      <Heading size={2} color={'white'}>Header - 2</Heading>
      <Heading size={3} color={'white'}>Header - 3</Heading>
      <Heading size={4} color={'white'}>Header - 4</Heading>

      <br />

      <Button>Primary Button</Button>
    </VBox>
  )
}

export default App
