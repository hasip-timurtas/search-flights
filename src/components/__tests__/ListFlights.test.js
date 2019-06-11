import ListFlights from "../ListFlights";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<ListFlights />", () => {
  it("renders correctly", () => {
    const renderedComponent = ListFlights();
    expect(renderedComponent).not.toBe(null);
  });
});
