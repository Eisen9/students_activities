import React from "react";
import {Link} from "react-router-dom";

function CreateViewEvents() {
  return (
    <div>
        <table class="create-view-elements">
            <tr>
                <td>
                <h1>
                  <Link className="link" to="/saved-events"> 
                    View Saved Events
                    </Link>
                </h1>
                </td>
                <td>
                <h2><a href="https://eisen9.github.io/outandabout/" class="link">Create an Event</a></h2>
                </td>
            </tr>
      </table>
    </div>
  );
}

export default CreateViewEvents;
