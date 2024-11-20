
import IPODetails from '@/components/ipoDetails/IpoDetails'
import React from 'react'




const page = async ({params}) => {
  const url = await params
  const id =url.slug
  return (
    <>
    <IPODetails id={id}    />
    </>
  )
}

export default page
