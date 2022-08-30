import React , {Component} from "react";
import { CircularProgress } from "@mui/material";

class ProgressSign extends Component
{

    render()
    {
        return(
        <div id="progress-sign" style={{display : this.props.display}}>
            <CircularProgress />
        </div>
        )
    }
}

export default ProgressSign