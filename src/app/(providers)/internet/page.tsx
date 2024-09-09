
"use client"

import EnterZip from '@/components/EnterZip';
import SearchZipcodeModelBox from '@/components/search-zipcode-modelBox'
import React, { useState } from 'react'


function InternetTVIndex() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const handleModelBox = () => {
    setIsOpen(true)
  }
  return (
    <>
      <SearchZipcodeModelBox setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <EnterZip handleModelBox={handleModelBox}/> 

    </>
  )
}

export default InternetTVIndex