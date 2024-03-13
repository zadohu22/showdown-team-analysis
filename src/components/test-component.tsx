import { FC } from 'react'

interface IProps {
    hello: string
}

/**
* @author
* @function @testComponent
**/

export const TestComponent:FC<IProps> = ({ hello }) => {
    console.log('test');
  return (
    <div className='text-white'>{hello}</div>
   )
 }
