import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ReactDate from './react-date';

describe('<ReactDate />', () => {
  let wrapper, props;

  describe('using default props', () => {
    beforeEach(() => {
      props = {
        dateString: 'Mon Jun 12 2017 09:07:06'
      };
      wrapper = mount(<ReactDate {...props} />);
    });

    it('sets default currentTimeZone to GMT', () => {
      expect(wrapper.prop('currentTimeZone')).toEqual('GMT');
    });

    // Flaky depending on the time zone of the application
    it('sets default timeZoneConversion to America/New_York', () => {
      expect(wrapper.prop('timeZoneConversion')).toEqual('America/New_York');
    });

    it('sets default output format', () => {
      expect(wrapper.prop('output')).toEqual('MM/DD/YYYY@hh:mm A');
    });
  })

  describe('customized props', () => {
    beforeEach(() => {
      props = {
        dateString: 'Mon Jun 12 2017 09:07:06',
        currentTimeZone: 'Europe/London',
        timeZoneConversion: 'American/Las_Angeles',
        output: 'MM/DD/YYYY@hh:mm'
      };
      wrapper = mount(<ReactDate {...props} />);

      it('sets custom currentTimeZone', () => {
        expect(wrapper.prop('currentTimeZone')).toEqual('Europe/London')
      });

      it('sets custom timeZoneConversion', () => {
        expect(wrapper.prop('timeZoneConversion')).toEqual('American/Las_Angeles')
      })
      it('sets custom output format', () => {
        expect(wrapper.prop('output')).toEqual('MM/DD/YYYY@hh:mm')
      })
    });

  })
})
