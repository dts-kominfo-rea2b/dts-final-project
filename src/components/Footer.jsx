import React from 'react';
import {
  MDBFooter
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center fixed-bottom' color='black' bgColor='light'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      Copyright © 2022. All rights reserved &nbsp;
      </div>
      <div className='text-center pb-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-black font-bold' href='https://github.com'>
          ERIC SETIAWAN
        </a>
      </div>
    </MDBFooter>
  );
}