import { CiLight } from "react-icons/ci";

function Theme() {
    return(
        <div  className="flex items-center gap-2 cursor-pointer">
            <CiLight />
            <p className="text-sm md:text-base">tema</p>
        </div>
    );
};

export default Theme;
