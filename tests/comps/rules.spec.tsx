import { shallow } from 'enzyme';
import RulesModal from '../../comps/rules';

describe("Testing Rules Modal", ()=>{
    const mocks = {
        handleClose: jest.fn(),
        show: true
    }
    const modal = shallow(<RulesModal show={mocks.show} handleClose={mocks.handleClose}/>);
    expect(modal).toMatchSnapshot();
})