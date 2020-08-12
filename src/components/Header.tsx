import React from 'react'
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
      <header>
        <Link to="/"><h1>Countries</h1></Link>
      </header>
    )
}

export default Navbar
