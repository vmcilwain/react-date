import MomentTimezone from 'moment-timezone';
import React from 'react';

export default class ReactDate extends React.Component {

  static propTypes = {
    dateString: React.PropTypes.string.isRequired,
    currentTimeZone: React.PropTypes.string,
    timeZoneConversion: React.PropTypes.string,
    output: React.PropTypes.string
  };

  static defaultProps = {
    currentTimeZone: 'GMT',
    timeZoneConversion: MomentTimezone.tz.guess(),
    output: 'MM/DD/YYYY@hh:mm A'
  };

  render(){
    return (
      <span>
      {MomentTimezone.tz(this.props.dateString,
                         this.props.currentTimeZone).tz(
                         this.props.timeZoneConversion).format(
                         this.props.output)}
      </span>
    )
  }
}
