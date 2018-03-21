import React, { Component } from 'react';

class EventCard extends Component {

  render() {
    const event = this.props.data.event;
    const type = this.props.data.type;

    const tittel = event.tittel;
    const klokkeslett = event.klokkeslett;
    const foredragsholder = event.foredragsholder;
    const icon = type === 'foredrag' ? 'comments' : 'cogs';
    const info = event.info;

    const timeLabel = null // event.klokkeslett ? <TimeLabel icon={icon} klokkeslett={klokkeslett} /> : null;
    const påmelding = null

    return (
      <div className='event-card'>
        {timeLabel}
        <h3> {tittel} </h3>
        <p> {foredragsholder} </p>
        <p className='event-info'> {info} </p>
        {påmelding}
      </div>
    );
  }
}

export default EventCard;
