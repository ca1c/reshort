import { Component } from 'react';

export default class Main extends Component {
    render() {
        return(
            <div>
                <div className="flexGrid">
                    <div className="container">
                        <div className="card">
                            <div className="textCenter">
                                <h1 className="header">Reshort.</h1>

                                <form>
                                    <input type="text" placeholder="URL" className="urlInput"/>
                                    <button className="btn">Submit</button>
                                </form>
                            </div>
                            <div className="urlContainer">
                                <div id="url">
                                    <p>Your shortened url:</p>
                                    <p>http://localhost:3000/8d0s32sv</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}