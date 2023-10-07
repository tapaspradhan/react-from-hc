import React from 'react'
import {Editor} from '@tinymce/tinymce-react'
import {Contrller} from 'react-hook-form'

export default function RTE({name, control, label,defaultValue=""}) {

  return (
    <div className='w-full'>
        {label && <label className='inline-block mb-1 pl-1'
        >{label}</label>}

        <Contrller
        name={name || "content"}
        control={control}
        render={({field:{onChange}})=>(
            <Editor
    initialValue="default value"
    init={
        {
            initialValue:defaultValue,
            branding:false,
            height:500,
            menubar:true,
            plugins:[
                "image",
                "advlist",
                "autolink",
                "lists",
                "image",
                "charmap",
                "ipreview",
                "anchor",
                "searchreplace",
                "visualblock",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
                'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic fourcolour | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
            content_style: "body {font=family:Helvetica,Arial,sans-sarif; font-size:14px}"
        }
    }
    onEditorChange={onChange}
    />
        )}
        />
    </div>
  )
}
