import React from "react";
function Contact(){
    return(
        <> CONTACT US  <div className="flex gap-2 justify-center">
        <button><a className="p-2 text-xs bg-gray-900 text-white rounded-lg text-center " href="/">Homepage</a></button>
        <button><a className="p-2 text-xs bg-gray-900 text-white rounded-lg text-center " href="/about">About</a></button>
        <button><a className="p-2 text-xs bg-gray-900 text-white rounded-lg text-center " href="/contact">Contact</a></button>
       </div> </>
    )
}
export default Contact 