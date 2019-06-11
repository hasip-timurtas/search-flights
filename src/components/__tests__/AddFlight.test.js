import AddFlight from "../AddFlight";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<AddFlight />", () => {
  it("renders correctly", () => {
    const renderedComponent = AddFlight();
    expect(renderedComponent).not.toBe(null);
  });
});
