import React from 'react'
import Button from './Button'

export default function Form() {
  return (
    <form className="min-w-full max-w-md mx-auto mt-4 p-4 bg-white shadow-md rounded-md border border-solid border-2px border-black">
        <div>
            <label htmlFor="fullname">Title of your blog post:</label>
            <input type="text" id="email" placeholder="Amazing adventure" />
        </div>

        <div>
            <label htmlFor="fullname">Type your words here:</label>
            <input type="text" id="email" cols="2" rows="30" placeholder="Today was a good day." />
        </div>

        <div>
            <label htmlFor="fullname">Test test</label>
            <input type="text" id="email" placeholder="test@test.com" />
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
