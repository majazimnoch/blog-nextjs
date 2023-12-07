import React from 'react';
import Link from 'next/link';
import Button from './Button';

const Layer: React.FC = () => {

  return (
   <div className="bg-snow bg-opacity-60 p-10 flex flex-col gap-3">
    <h3 className="text-4xl text-forest font-maven">What are you grateful for today?</h3>
    <p className="text-2xl text-forest font-maven">Share it with the <span className="bg-wood text-snow p-2">Zenitude</span> society 🧘🏾</p>
    <Link href="/">
      <Button label="View all posts" colour={"yellow"} large />
    </Link>
   </div>

    
  );
};

export default Layer;
