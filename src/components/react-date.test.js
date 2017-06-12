import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import ReactDate from './react-date';

describe('<ReactDate />', () => {
  let component, props;

  describe('using default props', () => {
    beforeEach(() => {
      props = {
        dateString: 'Mon Jun 12 2017 09:07:06'
      };
      component = mount(<ReactDate {...props} />);
    });



    it('it renders .formatted-datetime', () => {
      expect(component.hasClass('formatted-datetime')).toEqual(true);
    });

    it('converts time to GMT default', () => {
      expect(component.find('.formatted-datetime').text()).toEqual('06/12/2017 - 05:07');
    });
  });

  describe('customized props', () => {
    beforeEach(() => {
      props = {
        dateString: 'Mon Jun 12 2017 09:07:06',
        currentTimeZone: 'American/New_York',
        timeZoneConversion: 'American/Los_Angeles',
        output: 'MM/DD/YYYY@hh:mm A',
        customClass: 'some-class'
      };
      component = mount(<ReactDate {...props} />);

      it('renders custom class', () => {
        expect(component.hasClass('some-class')).toEqual(true);
      });

      it('sets custom output format', () => {
        expect(component.find('.some-class').text()).toEqual('06/12/201@02:07 AM');
      })
    });
  });
})
