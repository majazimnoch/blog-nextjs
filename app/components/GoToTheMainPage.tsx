import Link from 'next/link'
import React from 'react'
import Button from './Button'

const GoToTheMainPage: React.FC = () => {
  return (
    <div className="flex flex-row gap-10 py-10 ">
        <Link href="/">
            <Button label="Go to the main page" colour={"yellow"} large />
        </Link>
    </div>
  )
}

export default GoToTheMainPage;