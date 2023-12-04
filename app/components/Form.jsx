import React from 'react'
import Button from './Button'

export default function Form() {
  return (
    <form>
        <div>
            <label htmlFor="fullname">Title of your blog post</label>
            <input type="text" id="email" placeholder="test@test.com" />
        </div>

        <div>
            <label htmlFor="fullname">Type your words here</label>
            <input type="text" id="email" cols="2" rows="30" placeholder="test@test.com" />
        </div>

        <div>
            <label htmlFor="fullname">Full name</label>
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
