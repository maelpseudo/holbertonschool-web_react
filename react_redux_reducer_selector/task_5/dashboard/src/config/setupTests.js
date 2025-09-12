import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetchMock from "fetch-mock-jest";

fetchMock.enableMocks()

configure({
  adapter: new Adapter(),
});