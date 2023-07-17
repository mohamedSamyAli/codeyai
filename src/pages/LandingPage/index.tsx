import { Button } from 'antd'
import React from 'react'
import {Link} from 'react-router-dom'
export const LandingPaage = () => {
  return (
    <div>
        <Button>
            <Link to='/codeyai/projects'>
        login
        </Link>
        </Button>
        <Button>sign up</Button>
    </div>
  )
}
