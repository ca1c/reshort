import { Component } from 'react';
import axios from 'axios';

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            unshortenedLink: "",
            linkVisible: false,
            link: "",
            error: false,
            errorMessage: "",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const { name, value } = e.target;

        this.setState({
            [name]: value,
        })
    }

    handleSubmit() {
        axios.put('/api/createURL', {
            redirectURL: this.state.unshortenedLink
        })
        .then((response) => {
            if(response.data.error) {
                this.setState({
                    errorMessage: response.data.message,
                    error: true,
                    linkVisible: false,
                });
                
                return;
            }

            this.setState({
                link: response.data.message,
                linkVisible: true,
                error: false,
            });
        })
        .catch((error) => {
            this.setState({
                errorMessage: "request error",
                error: true,
                linkVisible: false,
            });
            console.log(error);
        })
    }

    render() {
        return(
            <div>
                <div className="flexGrid">
                    <div className="container">
                        <div className="card">
                            <div className="textCenter">
                                <h1 className="header">Reshort.</h1>
                                <input 
                                    type="text" 
                                    placeholder="URL"
                                    name="unshortenedLink"
                                    value={this.state.unshortenedLink} 
                                    onChange={this.handleInputChange}
                                    className="urlInput"
                                />
                                <button className="btn" onClick={this.handleSubmit}>Submit</button>
                            </div>

                            {

                            this.state.linkVisible

                            ?

                            <div className="urlContainer">
                                <div id="url">
                                    <p>Your shortened url:</p>
                                    <p>{this.state.link}</p>
                                </div>
                            </div>

                            :

                            null

                            }

                            {
                            
                            this.state.error

                            ?

                            <div className="errorContainer">
                                <div className="error">
                                    <p>{this.state.errorMessage}</p>
                                </div>
                            </div>

                            :

                            null

                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}