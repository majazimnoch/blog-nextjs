import React from 'react'
import Button from './Button'
import Image from 'next/image'

export default function Form() {
  return (
    <form className="min-w-full max-w-md mx-auto mt-4 p-10 bg-white shadow-md rounded-md bg-snow">
        <div className="flex flex-col">
          <label htmlFor="fullname">Title of your blog post:</label>
          <input 
            type="text" 
            id="title" 
            placeholder="Amazing adventure"
            className=""
          />
        </div>

        <div className="flex flex-col">
            <label htmlFor="fullname">Type your words here:</label>
            <textarea
              id="content" 
              cols="2" 
              rows="20" 
              placeholder="Today was a good day." 
              className="resize-none border rounded-md px-3 py-2 focus:outline-none focus:ring focus:border-transparent-300"
            />
        </div>

        <Button
          label="Submit"
          colour={"yellow"}
          large
        />
        
      {/* Form
      https://www.youtube.com/watch?v=a2oa0qL4CB8 */}

    </form>
  )
}
