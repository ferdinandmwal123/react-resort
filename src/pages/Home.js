import React from 'react'
import Hero from '../components/Hero'
import Bannner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function Home() {
    return <Hero>
        <Bannner title="luxurious rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    our rooms
                </Link>
        </Bannner>
    </Hero>;
    
}


