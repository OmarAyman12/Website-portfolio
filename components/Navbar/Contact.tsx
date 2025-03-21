import React from 'react'
import { Button } from '../ui/button';
import Link from 'next/link';


function Contact() {
  return (
    <div>
      <Button className='bg-transparent text-white dark:font-black hover:bg-gray-900'><Link href='contact'>Contact</Link></Button>
    </div>
  );
}

export default Contact