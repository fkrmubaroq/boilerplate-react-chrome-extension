import { renderComponent } from "@/libs/utils/render";
import "../styles/main.css";


const Component = () => {
    return <div className="!absolute !left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 bg-white w-[400px] shadow-md">
        <h1 className="text-red-600">content script using reactjs + tailwindcss</h1>
    </div>
}

renderComponent(<Component />)