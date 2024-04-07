'use client'
import DossierMedicalPDF from '@/components/pdfs/DossierMedicalPDF'
import { PDFViewer } from '@react-pdf/renderer'
import React from 'react'

const page = () => {
  return (
    <PDFViewer className='w-full h-full'>
      <DossierMedicalPDF />
    </PDFViewer>
  )
}

export default page