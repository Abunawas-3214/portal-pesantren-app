import React, { useState } from 'react'
import Tiptap from './Tiptap'
const content = '<p>Hello World!</p>'
const PesantrenDeskripsiEditor = () => {
    const [richText, setRichText] = useState('')
    console.log(richText)

    return (
        <Tiptap content={content} onChange={setRichText} />
    )
}

export default PesantrenDeskripsiEditor