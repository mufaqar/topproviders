
"use client"

import EnterZip from '@/components/EnterZip';
import PageHead from '@/components/metas/pagesmeta';
import SearchZipcodeModelBox from '@/components/search-zipcode-modelBox'
import React, { useState } from 'react'


function InternetTVIndex() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const handleModelBox = () => {
    setIsOpen(true)
  }
  return (
    <>
      <PageHead
        title="Local Internet Service Providers| Cable Movers"
        description=""
        url="https://topproviders.net/internet"
      />
      <SearchZipcodeModelBox setIsOpen={setIsOpen} modalIsOpen={modalIsOpen} />
      <EnterZip handleModelBox={handleModelBox}/>

    </>
  )
}

export default InternetTVIndex