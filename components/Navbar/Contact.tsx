import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';


function Contact() {
  return (
    <div>
      <Button className='bg-transparent text-black dark:text-white hover:bg-gray-400'><Link href='contact'>Contact</Link></Button>
    </div>
  );
}

export default Contact