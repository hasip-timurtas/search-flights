
import App from "../App";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("<App />", () => {
  it("renders correctly", () => {
    const renderedComponent = App();
    expect(renderedComponent).not.toBe(null);
  });
});
