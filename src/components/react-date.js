import MomentTimezone from 'moment-timezone';
import React from 'react';

export default class ReactDate extends React.Component {
  constructor(props) {
    super(props);
  };

  static propTypes = {
    dateString: React.PropTypes.string.isRequired,
    currentTimeZone: React.PropTypes.string.isRequired,
    timeZoneConversion: React.PropTypes.string.isRequired,
    output: React.PropTypes.string.isRequired
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
  };
}
