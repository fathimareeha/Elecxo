import React from 'react';

function Footer() {
  return (
    <div className='bg-gray-200 p-6'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center md:text-left '>
        <div>
          <h1 className='font-bold text-lg'>Know us</h1>
          <ul className='text-gray-700 space-y-2 mt-2'>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Press</li>
            <li>Careers</li>
            <li>Elexo Earn</li>
          </ul>
        </div>
        
        <div>
          <h1 className='font-bold text-lg'>Policy</h1>
          <ul className='text-gray-700 space-y-2 mt-2'>
            <li>Security</li>
            <li>Privacy</li>
            <li>Terms of Use</li>
            <li>Return Policy</li>
            <li>Compliance</li>
          </ul>
        </div>
        
        <div>
          <h1 className='font-bold text-lg'>Help You</h1>
          <ul className='text-gray-700 space-y-2 mt-2'>
            <li>Return and Cancellation</li>
            <li>Membership</li>
            <li>Payments</li>
            <li>Account</li>
            <li>Shipping</li>
          </ul>
        </div>
        
        <div>
          <h1 className='font-bold text-lg'>Social</h1>
          <ul className='text-gray-700 space-y-2 mt-2'>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
            <li>YouTube</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-300 my-6'></div>

      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left space-y-4 md:space-y-0'>
        <div>
          <h1 className='font-bold text-lg'>Mail Us</h1>
          <ul className='text-gray-700 mt-2'>
            <li>Elexo@info.com</li>
            <li>Elexoindia@info.com</li>
          </ul>
        </div>

        <h1 className='font-bold text-3xl'><span className='text-blue-500'>Elec</span>xo</h1>

        <div>
          <h1 className='font-bold text-lg'>Contact Us</h1>
          <ul className='text-gray-700 mt-2'>
            <li>B-11 D.I.D Complex, F.I.E</li>
            <li>Patparganj Industrial Area</li>
            <li>New Delhi, Delhi 110092</li>
            <li>011-42420976</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
