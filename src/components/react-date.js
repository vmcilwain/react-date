import MomentTimezone from 'moment-timezone';
import React from 'react';

export default class ReactDate extends React.Component {
  static propTypes = {
    dateString: React.PropTypes.string.isRequired,
    currentTimeZone: React.PropTypes.string,
    timeZoneConversion: React.PropTypes.string,
    output: React.PropTypes.string,
    customClass: React.PropTypes.string
  };

  static defaultProps = {
    currentTimeZone: 'GMT',
    timeZoneConversion: MomentTimezone.tz.guess(),
    output: 'MM/DD/YYYY - HH:mm',
    customClass: ''
  };

  render(){
    const dateTime = MomentTimezone.tz(this.props.dateString, this.props.currentTimeZone).tz(this.props.timeZoneConversion);

    if(!dateTime.isValid()){
      return(null)
    }

    return(
      <span className={`formatted-datetime ${this.props.customClass}`}>
        {dateTime.format(this.props.output)}
      </span>
    )
  }
}
