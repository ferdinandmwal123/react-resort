import React, { Component } from 'react';
import {RoomContext} from '../context';
export default class FeaturedRooms extends Component {
    static contextType =  RoomContext
    render() {
        const {} = this.context;
        
        return (
            <div>
                Hello feat rooms 
            </div>
        )
    }
}
